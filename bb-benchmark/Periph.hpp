#pragma once
#include "Arduino.h"
#include <stdint.h>
#include "defines.h"
#include "Stats.h"
#include <avr/boot.h> // for boot_signature_byte_get

class Periph {
    static uint8_t old_tccr0a;
    static uint8_t old_tccr0b;
    //
    static uint8_t old_tccr1a;
    static uint8_t old_tccr1b;
    //
    static uint8_t original_tccr2a;
    static uint8_t original_tccr2b;
    static uint8_t original_ocr2a;

    static const int SIGNAL_GEN_PIN = 11;
    public:

    static void setup(void) {
        original_tccr2a = TCCR2A;
        original_tccr2b = TCCR2B;
        original_ocr2a = OCR2A;
    }

    static void customize_timers(void) {
        Serial.flush(); // wait for any pending serial output to complete before disabling interrupts

        // disable interrupts. More consistent timing and required for safely reading 16 bit TCNT1 safely.
        // The hardware makes reading the 16 bit value atomic as long as interrupts are disabled.
        // It is important to notice that accessing 16-bit registers are atomic operations. If an interrupt occurs between the
        // two instructions accessing the 16-bit register, and the interrupt code updates the temporary register by accessing the
        // same or any other of the 16-bit timer registers, then the result of the access outside the interrupt will be
        // corrupted. Therefore, when both the main code and the interrupt code update the temporary register, the main code must
        // disable the interrupts during the 16-bit access.
        noInterrupts();

        old_tccr0a = TCCR0A;
        old_tccr0b = TCCR0B;
        old_tccr1a = TCCR1A;
        old_tccr1b = TCCR1B;

        // timer0 as rising_edge counter
        //  Arduino i/o pin 4 used to count timer0 rising_edges
        //  How fast can it capture? Section 28.5.4 External Clock Drive lists 25 ns as min high or low time.
        //  But that's not guaranteed. To ensure we capture it, it needs to be at least 62.5 ns (1 clock cycle).
        TCCR0A = 0;
        TCCR0B = 0;
        TCCR0B |= 0b111;  // increments count when pin 4 rises
        TCNT0 = 0;

        // timer1 as free running fast clock
        TCCR1A = 0;
        TCCR1B = 0;

        // A pre-scaler of 1 (aka none) is tempting because it gives 1 clock (62.5 ns) resolution with 16 MHz clock, but it also has some downsides.
        // It results in a rollover every 4.1 ms which means we will fill up our buffer faster and have to stop sampling sooner.
        // If our buffer is 350 entries, that's 350 * 4.1 ms = 1.435 seconds. I don't expect buttons to bounce longer than that :)
        // It also slows our sampling rate a bit because we have to log more timer overflow events. How bad is the ratio?
        // Well we can sample (without logging) every 20 clocks so 20/65536 = 0.03%. Nothing to worry about :)
        // I seem to have convinced myself that a 1/1 prescaler is fine.
        TCCR1B |= 0b1;  // No prescaler.

        clear_t1_overflow_flag();
    }

    static void restore_timers(void) {
        TCCR0A = old_tccr0a;
        TCCR0B = old_tccr0b;

        TCCR1A = old_tccr1a;
        TCCR1B = old_tccr1b;

        interrupts();
    }
    
    static inline void clear_t1_overflow_flag(void) {
        // 15.11.9 TIFR1 – Timer/Counter1 Interrupt Flag Register
        // • Bit 0 – TOV1: Timer/Counter1, Overflow Flag
        // The setting of this flag is dependent of the WGM13:0 bits setting. In normal and CTC modes, the TOV1 flag is set when
        // the timer overflows. Refer to Table 15-5 on page 109 for the TOV1 flag behavior when using another WGM13:0 bit
        // setting. TOV1 is automatically cleared when the Timer/Counter1 overflow interrupt vector is executed. Alternatively,
        // TOV1 can be cleared by writing a logic one to its bit location.

        TIFR1 = (1 << TOV1);  // clear TOV1 flag by writing a one to it
    }

    static inline bool get_t1_overflow_flag(void) {
        // 15.11.9 TIFR1 – Timer/Counter1 Interrupt Flag Register
        // • Bit 0 – TOV1: Timer/Counter1, Overflow Flag
        // The setting of this flag is dependent of the WGM13:0 bits setting. In normal and CTC modes, the TOV1 flag is set when
        // the timer overflows.
        return TIFR1 & (1 << TOV1);
    }

    static inline bool get_t1_output_compare_match_flag(void) {
        return TIFR1 & (1 << OCF1A);
    }

    static inline void clear_t1_output_compare_match_flag(void) {
        TIFR1 = (1 << OCF1A); // clear OCF1A flag by writing a one to it
    }

    static inline uint8_t read_rising_edges(void) { return TCNT0; }
    static inline void clear_rising_edges(void) { TCNT0 = 0; }
    static inline void clear_rising_edges_overflow_flag(void) { TIFR0 = (1 << TOV0); } // clear TOV0 flag by writing a one to it
    static inline bool get_rising_edges_overflow_flag(void) { return TIFR0 & (1 << TOV0); }

    static inline uint16_t read_timer(void) { return TCNT1; }
    static inline void clear_timer(void) { TCNT1 = 0; }

    static uint32_t scale_timer_counts_to_ns(uint32_t timer_counts)
    {
        // 1/1 prescaler
        static_assert(F_CPU == 16000000, "must use 16 MHz clock (for now)");
        uint32_t result = timer_counts * 62; // 62.5 ns per count
        result += timer_counts / 2; // this gets us the 0.5 ns
        return result;
    }

    // signal generation -----------------------------------------------------------------------

    static void disable_signal_gen(void) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // TCCR2A = original_tccr2a;
        // TCCR2B = original_tccr2b;
        // OCR2A = original_ocr2a;
    }

    static void generate_62_5_ns_pulse(void) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // 62.5 ns pulse per 16.00 us period
        // fOCnxPWM = fclk_I/O / (prescaler x 256) = 16 MHz / (1 x 256) = 62.5 kHz (period = 16.00 us)
        TCCR2A = _BV(COM2A1) | _BV(WGM22) | _BV(WGM21) | _BV(WGM20);  // Fast PWM mode
        TCCR2B = _BV(CS20);  // No prescaler
        OCR2A = 0;

        pinMode(SIGNAL_GEN_PIN, OUTPUT);
    }

    static void generate_8MHz(void) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // 8 MHz output, 50% duty cycle, 62.5ns high/low, 125 ns period
        TCCR2A = _BV(COM2A0) | _BV(WGM21);  // CTC mode, toggle on match
        TCCR2B = _BV(CS20);   // No prescaler
        OCR2A = 0;

        pinMode(SIGNAL_GEN_PIN, OUTPUT);
    }

    static void generate_4MHz(void) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // 4 MHz output, 50% duty cycle, 125 ns high/low, 250 ns period 
        TCCR2A = _BV(COM2A0) | _BV(WGM21);  // CTC mode, toggle on match
        TCCR2B = _BV(CS20);   // No prescaler
        OCR2A = 1;

        pinMode(SIGNAL_GEN_PIN, OUTPUT);
    }

    static void generate_2_6MHz(void) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // 2.66666 MHz output, 50% duty cycle, 187.5 ns high/low, 375 ns period
        TCCR2A = _BV(COM2A0) | _BV(WGM21);  // CTC mode, toggle on match
        TCCR2B = _BV(CS20);   // No prescaler
        OCR2A = 2;

        pinMode(SIGNAL_GEN_PIN, OUTPUT);
    }

    // if value = 0, frequency = 7812.50 Hz
    // if value = 255, frequency = 30.52 Hz
    static float generate_slow_custom(uint8_t value) {
        pinMode(SIGNAL_GEN_PIN, INPUT);

        // F = 16 MHz / (2 * Prescaler * (1 + OCR2A))
        // F = 16 MHz / (2 * 1024 * (1 + <value>)) = 30.51757813 Hz or 32.7680 ms period
        TCCR2A = _BV(COM2A0) | _BV(WGM21);  // CTC mode, toggle on match
        TCCR2B = _BV(CS22) | _BV(CS21) | _BV(CS20);   // 1024 prescaler
        OCR2A = value;

        pinMode(SIGNAL_GEN_PIN, OUTPUT);

        float hz = F_CPU * 1.0f / (2 * 1024 * (1.0f + value));
        return hz;
    }

    static void enable_pullup(StatsAndConfig &stats_config) {
        stats_config.internal_pullup = 1;
        pinMode(INPUT_PIN_NUMBER, INPUT_PULLUP);
    }

    static void disable_pullup(StatsAndConfig &stats_config) {
        stats_config.internal_pullup = 0;
        pinMode(INPUT_PIN_NUMBER, INPUT);
    }

    static void print_board_id(void) {
        // See https://github.com/ricaun/ArduinoUniqueID/blob/master/MCU.md#Disclaimer
        // https://microchip.my.site.com/s/article/Serial-number-in-AVR---Mega-Tiny-devices
        #if defined(__AVR_ATmega328P__)
            const bool skip_byte_6 = true;
        #elif defined(__AVR_ATmega328PB__)
            const bool skip_byte_6 = false;
        #else
            print_str("Unsupported MCU");
            return;
        #endif

        print_str("0x");
        for (uint8_t i = 0; i <= 9; i++)
        {
            if (i == 6 && skip_byte_6)
                continue;
            uint8_t b = boot_signature_byte_get(0x0E + i);
            if (b < 0x10)
                print_str("0");
            Serial.print(b, HEX); // doesn't print leading 0
        }
    }

};
