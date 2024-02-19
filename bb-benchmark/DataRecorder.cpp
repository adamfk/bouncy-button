#include "DataRecorder.hpp"
#include "defines.h"
#include <string.h>
#include "MyNonIsrHardwareSerial.hpp"

static inline void debug_toggle_pin_for_log(void);
static inline void debug_toggle_pin_for_sample(void);
static inline void debug_toggle_pin(void);
static inline void handle_rising_edge_overflow(void);
static inline void set_debug_toggle_pin_low(void);


uint16_t DataRecorder::g_stream_1ms_rising_edge_overflow_count = 0;
uint16_t DataRecorder::g_stream_unstable_ms = 0;
LogEntry DataRecorder::g_entries[ENTRIES_COUNT];


enum RecordDataResult DataRecorder::record_data(void) {
    g_stream_unstable_ms = 0;
    g_stream_1ms_rising_edge_overflow_count = 0;
    set_debug_toggle_pin_low();
    Periph::customize_timers();
    auto result = record_data_inner();
    Periph::restore_timers();
    return result;
}





enum RecordDataResult DataRecorder::record_data_inner(void) {
    reset_entries();
    enum RecordDataResult result = RecordDataResult_SUCCESS;

    uint8_t overflows_before_stop;
    overflows_before_stop = 1020 / MS_PER_TIMER_OVERFLOW; // 1020 is max before too large for U8 when using 1/1 prescaler

    uint16_t index = 0;

    // some faster variables and initial sample. `register` keyword likely ignored by compiler, but it at least lets
    // programmers know those variables need fast access.
    register uint8_t masked_input = PIND; // masking comes later to be consistent with other code
    register uint8_t rising_edge_count = 0;
    masked_input = masked_input & INPUT_PIN_MASK;
    register uint8_t last_masked_state = masked_input;
    register uint8_t last_rising_edge_count = rising_edge_count;

    Periph::clear_rising_edges();
    uint16_t timer_count = 0;

    // log setup condition
    g_entries[index].flags = STATE_FLAG_SETUP_SAMPLE | masked_input;
    g_entries[index].timer_count = 0;  // we don't care about timer count for initial sample as it will likely rollover many times before user presses button
    g_entries[index].rising_edge_count = rising_edge_count;
    index++;
    static_assert(COUNT_OF(g_entries) >= 2, "required because only check logging index _after_ next log");

    // We don't clear rising_edge hardware counter, just let it wrap around so we can't miss any.
    // Ignore rising edge counter overflow flag as it can't wrap around the last sample in the period between samples (roughly 2500ns).
    // For that to happen, rising edges would have to occur 2500ns/255 = 9.8ns apart. That's not possible with our hardware.

    // rapidly sample until change detected
    // then log first sample
    while (true) {
        // check if user transmitted serial data to us
        if (UCSR0A & (1<<RXC0)) {
            // user input detected
            return RecordDataResult_USER_INPUT;    // <--------------- NOTE RETURN!!!!! ----------------
        }

        // clear timer so that we can delay a timer rollover log entry
        Periph::clear_timer();
        Periph::clear_t1_overflow_flag();
        
        debug_toggle_pin_for_sample();

        // read raw registers without masking so that each line takes a single clock cycle
        // ordering below is important
        asm volatile (
            "in %[masked_input], %[input_reg]"        "\n\t" // single clock
            "in %[rising_edge_count], %[counter_reg]" "\n\t" // single clock
        
            // outputs:
            : [masked_input] "=r" (masked_input), [rising_edge_count] "=r" (rising_edge_count)
            // inputs:
            : [input_reg]"I" (_SFR_IO_ADDR(PIND)), [mask_literal]"I" (INPUT_PIN_MASK), [counter_reg] "I" (_SFR_IO_ADDR(TCNT0))
        );

        masked_input &= INPUT_PIN_MASK;

        // for crazy fast pulse trains, it is better to test for rising edge count change first, but for most buttons, pin change is more likely.
        if (masked_input != last_masked_state || rising_edge_count != last_rising_edge_count) {
            timer_count = Periph::read_timer();
            debug_toggle_pin_for_log();

            g_entries[index].flags = masked_input;
            g_entries[index].timer_count = timer_count;
            g_entries[index].rising_edge_count = rising_edge_count;

            last_masked_state = masked_input;
            last_rising_edge_count = rising_edge_count;

            index++;

            goto start;  // <--------------- NOTE JUMP!!!!! ----------------
        }
    }

    start:

    while (true) {
        // Constant logging takes 38 clocks (2.4 us) with 16 MHz clock if rising edge difference. 40 if pin difference.
        // Tested with 8 MHz input signal.

        debug_toggle_pin_for_sample();

        // https://www.nongnu.org/avr-libc/user-manual/inline_asm.html
        // https://gcc.gnu.org/wiki/avr-gcc
        // read raw registers without masking so that each line takes a single clock cycle
        // ordering below is important
        asm volatile (
            "in %[masked_input], %[input_reg]"        "\n\t" // single clock
            "in %[rising_edge_count], %[counter_reg]" "\n\t" // single clock

            // outputs:
            : [masked_input] "=r" (masked_input), [rising_edge_count] "=r" (rising_edge_count)
            // inputs:
            : [input_reg]"I" (_SFR_IO_ADDR(PIND)), [mask_literal]"I" (INPUT_PIN_MASK), [counter_reg] "I" (_SFR_IO_ADDR(TCNT0))
        );

        masked_input &= INPUT_PIN_MASK;

        // for crazy fast pulse trains, it is better to test for rising edge count change first, but for most buttons, pin change is more likely.
        if (masked_input != last_masked_state || rising_edge_count != last_rising_edge_count) {
            timer_count = Periph::read_timer();
            debug_toggle_pin_for_log();

            g_entries[index].flags = masked_input;
            g_entries[index].timer_count = timer_count;
            g_entries[index].rising_edge_count = rising_edge_count;

            last_masked_state = masked_input;
            last_rising_edge_count = rising_edge_count;

            index++;
            if (index >= COUNT_OF(g_entries)) {
                goto full;  // <--------------- NOTE JUMP!!!!! ----------------
            }
        } else if (Periph::get_t1_overflow_flag()) {
            const uint16_t timer_count = Periph::read_timer();
            debug_toggle_pin_for_log();

            Periph::clear_t1_overflow_flag();

            // log
            g_entries[index].flags = masked_input | STATE_FLAG_TIMER_ROLLOVER_NOTED;
            g_entries[index].timer_count = timer_count;
            g_entries[index].rising_edge_count = rising_edge_count;

            last_masked_state = masked_input;
            last_rising_edge_count = rising_edge_count;

            overflows_before_stop--;
            if (overflows_before_stop == 0) {
                goto timed_out;  // <--------------- NOTE JUMP!!!!! ----------------
            }

            index++;
            if (index >= COUNT_OF(g_entries)) {
                goto full;  // <--------------- NOTE JUMP!!!!! ----------------
            }
        }
    }


timed_out:
full:
    Periph::clear_timer();

    // we now have around 16000 cycles to setup for first sample, but we need to handle rising edge count overflows which could happen
    // every 256 instructions.
    uint32_t cumulative_rising_edge_count = 0;
    uint32_t last_cumulative_rising_edge_count = 0;

    // detect rising edge count overflow manually the first time while we clear the overflow flag
    {
        // clear overflow flag because it could have overflowed at anytime during high speed sampling
        rising_edge_count = Periph::read_rising_edges();
        Periph::clear_rising_edges_overflow_flag();
        uint8_t to_add = rising_edge_count - last_rising_edge_count; // modulo math
        cumulative_rising_edge_count += to_add;
        last_rising_edge_count = rising_edge_count;
    }

    handle_rising_edge_overflow();

    // setup timer1 to overflow & reset at 1ms
    // 16 MHz clock, 1/1 prescaler, 16 bit timer

    // timer1 will count to 16000 to get 1ms, set TOV1 flag, and reset to 0
    // See Table 15-5. Waveform Generation Mode Bit Description, row/mode 4
    // TCCR1A = 0; // already done
    TCCR1B = (1 << WGM12) | (1 << CS10);  // CTC mode 4, 1/1 prescaler.
    OCR1A = 16000; // 1 ms exactly
    static_assert(F_CPU == 16000000, "F_CPU must be 16 MHz for this to work");

    // NOTE! We can't use the overflow flag because we are using CTC mode (we don't let it overflow).
    // We have to use the output compare match flag instead.
    Periph::clear_t1_output_compare_match_flag();

    handle_rising_edge_overflow();

    // We need to determine how long to sample in streaming mode while we wait for the signal to stabilize or timeout.
    // If the input has been stable for a while, we can stop sampling early.
    int16_t ms_left_for_stable = MS_TO_WAIT_FOR_STABLE;

    // subtract the time we've already been stable
    {
        // search backwards from last sample and count up timeouts (AKA stable samples)
        int16_t ms_stable = 0;
        for (int16_t i = index - 1; i >= 0; i--) {
            handle_rising_edge_overflow();
            if (g_entries[i].flags & STATE_FLAG_TIMER_ROLLOVER_NOTED) {
                ms_stable += MS_PER_TIMER_OVERFLOW; // FIXME rename to be clear this is the buffered recordings timeout
                // adding up instead of multiplying allows us to check for rising edges overflows in the same loop instead of one long multiplication operation
                // that may prevent us from checking for rising edge overflows in time.
            } else {
                break;
            }
        }

        ms_left_for_stable -= ms_stable;

        if (ms_left_for_stable < 0 || ms_stable > MS_STREAM_TIMEOUT) {
            result = RecordDataResult_SUCCESS;
            return result;  // <--------------- NOTE JUMP!!!!! ----------------
        }
    }
    handle_rising_edge_overflow();

    // get access to the hardware serial object's transmit buffer to save RAM
    MyNonIsrHardwareSerial& my_serial = static_cast<MyNonIsrHardwareSerial&>(Serial);
    static_assert(SERIAL_TX_BUFFER_SIZE > 11, "SERIAL_TX_BUFFER_SIZE must be greater than 11 for our needs");

    my_serial.setup();
    my_serial.append_str("<stream>\n", handle_rising_edge_overflow);
    handle_rising_edge_overflow();

    uint16_t ms_count = 0;

    while (true) {
        // finish sending any remaining bytes
        while (my_serial.is_tx_queue_empty() == false) {
            handle_rising_edge_overflow();
            my_serial.try_send_next_byte();
        }

        handle_rising_edge_overflow();

        // check if 1 ms has passed
        if (Periph::get_t1_output_compare_match_flag()) {
            Periph::clear_t1_output_compare_match_flag();
            debug_toggle_pin_for_sample();
            ms_count++;

            handle_rising_edge_overflow();

            // sample with asm as order is important. See above examples.
            asm volatile (
                "in %[masked_input], %[input_reg]"        "\n\t" // single clock
                "in %[rising_edge_count], %[counter_reg]" "\n\t" // single clock

                // outputs:
                : [masked_input] "=r" (masked_input), [rising_edge_count] "=r" (rising_edge_count)
                // inputs:
                : [input_reg]"I" (_SFR_IO_ADDR(PIND)), [mask_literal]"I" (INPUT_PIN_MASK), [counter_reg] "I" (_SFR_IO_ADDR(TCNT0))
            );

            // detect rising edge count overflow manually
            if (rising_edge_count < last_rising_edge_count) {
                // We've clearly overflowed, but when did it happen?
                // It might have happened just after the last call to handle_rising_edge_overflow().
                handle_rising_edge_overflow();
                g_stream_1ms_rising_edge_overflow_count--; // Remove the last overflow count we added in handle_rising_edge_overflow().
                // We add 256 to cumulative_rising_edge_count on every overflow because we can have up to 16000 rising edges in 1 ms.
                // It's only the last overflow that we want to remove.             
            }

            cumulative_rising_edge_count += g_stream_1ms_rising_edge_overflow_count * 256; // add overflow count
            g_stream_1ms_rising_edge_overflow_count = 0; // reset overflow count
            handle_rising_edge_overflow();

            // add to cumulative count
            {
                uint8_t to_add = rising_edge_count - last_rising_edge_count; // modulo math
                cumulative_rising_edge_count += to_add;
                last_rising_edge_count = rising_edge_count;
            }
            handle_rising_edge_overflow();

            const uint16_t rising_edge_diff = cumulative_rising_edge_count - last_cumulative_rising_edge_count; // max of 16000
            handle_rising_edge_overflow();

            masked_input &= INPUT_PIN_MASK;
            if (masked_input != last_masked_state || rising_edge_diff > 0) {
                debug_toggle_pin_for_log();
                ms_left_for_stable = MS_TO_WAIT_FOR_STABLE;

                handle_rising_edge_overflow();

                // <0-999><'H'/'L'><0-99999><nl>
                my_serial.append_u16_as_hex(ms_count, handle_rising_edge_overflow);
                handle_rising_edge_overflow();

                if (masked_input) {
                    my_serial.append_char('H');
                } else {
                    my_serial.append_char('L');
                }
                handle_rising_edge_overflow();

                my_serial.append_u16_as_hex(rising_edge_diff, handle_rising_edge_overflow);
                handle_rising_edge_overflow();
                my_serial.append_char('\n');

                last_cumulative_rising_edge_count = cumulative_rising_edge_count;
                last_masked_state = masked_input;
            }
            else
            {
                handle_rising_edge_overflow();

                // no change. decrement ms_left_for_stable
                ms_left_for_stable--;

                if (ms_left_for_stable <= 0) {
                    if (ms_count > MS_STREAM_TIMEOUT) {
                        // `ms_count` might be less than timeout if high speed recording ended stable.
                        g_stream_unstable_ms = ms_count - MS_TO_WAIT_FOR_STABLE;
                    }

                    result = RecordDataResult_SUCCESS;
                    goto streaming_done;  // <--------------- NOTE JUMP!!!!! ----------------
                }
            }

            handle_rising_edge_overflow();

            if (ms_count >= MS_STREAM_TIMEOUT) {
                result = RecordDataResult_NOT_STABLE;
                g_stream_unstable_ms = ms_count;
                goto streaming_done;  // <--------------- NOTE JUMP!!!!! ----------------
            }
        } // end if (get_t1_output_compare_match_flag())
    } // end while (true)

streaming_done:
    my_serial.my_flush(); // finish sending any remaining bytes
    my_serial.append_str("</stream>\n", handle_rising_edge_overflow);
    my_serial.my_flush();
    my_serial.clean_up();
    return result;
}





static inline void handle_rising_edge_overflow(void) {
    // debug_toggle_pin();

    if (Periph::get_rising_edges_overflow_flag()) {
        Periph::clear_rising_edges_overflow_flag();
        DataRecorder::g_stream_1ms_rising_edge_overflow_count++;
    }
}


void DataRecorder::reset_entries(void) {
    memset(&g_entries, 0, sizeof(g_entries));

    for (uint16_t i = 0; i < COUNT_OF(g_entries); i++) {
        g_entries[i].flags = STATE_FLAG_UNUSED;
    }
}


RecordDataResult DataRecorder::wait_for_stable_pin(void) {
    Periph::customize_timers();
    RecordDataResult result = wait_for_stable_pin_inner();
    Periph::restore_timers();

    return result;
}

RecordDataResult DataRecorder::wait_for_stable_pin_inner(void) {
    const uint8_t overflows_before_stable = 500 / MS_PER_TIMER_OVERFLOW;    // 1020 ms is max before too large for U8 when using 1/1 prescaler
    uint8_t overflows_left = overflows_before_stable;

    // wait for pin to be stable
    uint8_t pin_state = 0;
    uint8_t last_pin_state = 0xFF; // impossible value to trigger reset

    bool done = false;
    while (!done) {
        // check if user transmitted serial data to us
        if (UCSR0A & (1<<RXC0)) {
            // user input detected
            return RecordDataResult_USER_INPUT;    // <--------------- NOTE RETURN!!!!! ----------------
        }

        pin_state = INPUT_PIN_REGISTER & INPUT_PIN_MASK;
        if (pin_state != last_pin_state || Periph::read_rising_edges() != 0) {
            Periph::clear_rising_edges();
            Periph::clear_timer();
            Periph::clear_t1_overflow_flag();
            overflows_left = overflows_before_stable;
            last_pin_state = pin_state;
        }

        if (Periph::get_t1_overflow_flag()) {
            Periph::clear_t1_overflow_flag();
            overflows_left--;
            if (overflows_left == 0) {
                done = true;
            }
        }
    }

    return RecordDataResult_SUCCESS;
}



static inline void set_debug_toggle_pin_low(void) {
    PORTD &= ~(1 << 7); // set pin 7 to low
}

static inline void debug_toggle_pin(void) {
    // fun trick with AVRs: writing a 1 to the input register toggles the output pin :)
    PIND = (1 << 7);
}

static inline void debug_toggle_pin_for_log(void) {
    if (DEBUG_TOGGLE_PIN_AT_LOGS) {
        debug_toggle_pin();
    }
}

static inline void debug_toggle_pin_for_sample(void) {
    if (DEBUG_TOGGLE_PIN_AT_SAMPLES) {
        debug_toggle_pin();
    }
}