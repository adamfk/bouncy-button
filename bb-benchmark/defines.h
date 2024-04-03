#pragma once

#define VERSION_STR "0.4.5"

// debug stuff
#define DEBUG_TOGGLE_PIN_AT_SAMPLES  0
#define DEBUG_TOGGLE_PIN_AT_LOGS     0
#define DEBUG_TOGGLE_CUSTOM          0

#define ENTRIES_COUNT 350

static const int16_t MS_TO_WAIT_FOR_STABLE = 500;
static const int16_t MS_STREAM_TIMEOUT = 1000;


// Print stuff
#define print_str(arg) Serial.print(F(arg))
#define print_raw(arg) Serial.print(arg) // use for printing numbers and stuff

#define X_STRINGIFY(x) #x
#define STRINGIFY(x) X_STRINGIFY(x)


#if defined(ARDUINO_AVR_UNO) || defined(ARDUINO_AVR_NANO)
// must use Arduino pin 4 (PD4) as it has special hardware
#  define INPUT_PIN_NUMBER     4
#  define INPUT_PIN_REGISTER   PIND

// pre-scaler 1 gives 62.5 ns resolution with 16 MHz clock
// 4.096 ms to rollover. Round down to 4 ms.
#  define MS_PER_TIMER_OVERFLOW    4

static_assert(INPUT_PIN_NUMBER == 4,  "must use Arduino pin 4 (PD4) as it has special hardware");

#else
#  error "Board not supported yet"
#  define INPUT_PIN_NUMBER   4  // dummy for vscode
#  define INPUT_PIN_REGISTER 0  // dummy for vscode
#  define print_str(arg)
#  define print_raw(arg)
#endif

#define INPUT_PIN_MASK       (1 << INPUT_PIN_NUMBER)
static_assert(F_CPU == 16000000, "must use 16 MHz clock (for now)");

#define COUNT_OF(x) ((sizeof(x) / sizeof(0 [x])) / ((size_t)(!(sizeof(x) % sizeof(0 [x])))))

