#include <HardwareSerial.h>
#include <assert.h>
#include <stdarg.h>

typedef void (*InterlacedCallback)(void);

// We subclass HardwareSerial primarily so that we can use its memory buffer instead of creating our own.
// This class should only be used while interrupts are disabled.
class MyNonIsrHardwareSerial : public HardwareSerial {
   public:
    inline void setup() {
        _tx_buffer_head = 0;
        _tx_buffer_tail = 0;
    }

    void clean_up() {
        _tx_buffer_head = 0;
        _tx_buffer_tail = 0;
    }

    // This takes too long!!!
    // // wrap snprintf to add to the tx buffer
    // int printf(const char *format, ...) {
    //     va_list args;
    //     va_start(args, format);
    //     int len = vsnprintf((char *)_tx_buffer + _tx_buffer_head, SERIAL_TX_BUFFER_SIZE - _tx_buffer_head, format, args);
    //     va_end(args);
    //     if (len > 0) {
    //         _tx_buffer_head += len;
    //     }
    //     return len;
    // }

    void append_char(char c) {
        if (_tx_buffer_head + 1 >= SERIAL_TX_BUFFER_SIZE) {
            return;
        }
        _tx_buffer[_tx_buffer_head++] = c;
    }

    void append_str(const char *str, InterlacedCallback callback) {
        while (*str != '\0') {
            if (_tx_buffer_head + 1 >= SERIAL_TX_BUFFER_SIZE) {
                return;
            }
            _tx_buffer[_tx_buffer_head++] = *str;
            str++;
            callback();
        }
    }

    void append_u16_as_hex(uint16_t value, InterlacedCallback callback) {
        bool non_zero_found = false;
        append_nibble_as_hex(&non_zero_found, (value >> 12) & 0xF);
        callback();
        append_nibble_as_hex(&non_zero_found, (value >> 8) & 0xF);
        callback();
        append_nibble_as_hex(&non_zero_found, (value >> 4) & 0xF);
        callback();
        non_zero_found = true; // force to at least one digit
        append_nibble_as_hex(&non_zero_found, value & 0xF);
    }

    void append_nibble_as_hex(bool * const non_zero_found, uint8_t nibble) {
        if (_tx_buffer_head + 1 >= SERIAL_TX_BUFFER_SIZE) {
            return;
        }

        if (nibble == 0) {
            if (*non_zero_found == false) {
                return;
            }
        } else {
            *non_zero_found = true;
        }

        if (nibble < 10) {
            _tx_buffer[_tx_buffer_head++] = '0' + nibble;
        } else {
            _tx_buffer[_tx_buffer_head++] = 'a' + (nibble - 10);
        }
    }


    inline bool is_tx_data_register_ready() { 
        return (*_ucsra) & (1 << UDRE0);
    }

    bool is_tx_queue_empty() { return _tx_buffer_head == _tx_buffer_tail; }

    // We MUST not have a naming conflict with the HardwareSerial::flush() as that method is virtual,
    // and we are simply casting a HardwareSerial* to a MyNonIsrHardwareSerial*.
    void my_flush() {
        while (!is_tx_queue_empty()) {
            try_send_next_byte();
        }
    }

    // try to send the next byte
    void try_send_next_byte() {
        // return if no data in the buffer to send
        if (is_tx_queue_empty()) {
            setup(); // reset the pointers
            return;
        }

        // return if UART hardware buffer is not yet ready to send data
        if (!is_tx_data_register_ready()) {
            return;
        }

        uint8_t c = _tx_buffer[_tx_buffer_tail];
        _tx_buffer_tail++;
        *_udr = c;

        // We can't wrap the tx buffer like a ring buffer because we are lazy and use vsnprintf.
        // if we reached the end, reset the pointers to zero
        if (_tx_buffer_tail == _tx_buffer_head) {
            setup(); // reset the pointers
        }
    }
};
