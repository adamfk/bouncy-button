#pragma once
#include <stdint.h>
#include "defines.h"
#include "Timers.hpp"
#include "SectionType.h"

enum {
    STATE_FLAG_SETUP_SAMPLE = (1 << 7),
    // "Noted" because we may not actually know when this rollover happened as we don't check the overflow flag while
    // sampling really fast. That's fine because we can clearly see the rollover in the data.
    // While decoding the data, you'll have to manually keep track of whether we expect the flag to be set or not.
    // If you manually detect a timer rollover/overflow, ignore the next rollover noted flag.
    STATE_FLAG_TIMER_ROLLOVER_NOTED = (1 << 6),
    STATE_FLAG_UNUSED = (1 << 5),
};
// We log pin in its natural position, so we don't need to shift it for some extra speed.
// Ensure that pin number is not same as a flag bit.
static_assert(STATE_FLAG_SETUP_SAMPLE != (1 << INPUT_PIN_NUMBER), "pin number can't be same as flag bit");
static_assert(STATE_FLAG_TIMER_ROLLOVER_NOTED != (1 << INPUT_PIN_NUMBER), "pin number can't be same as flag bit");
static_assert(STATE_FLAG_UNUSED != (1 << INPUT_PIN_NUMBER), "pin number can't be same as flag bit");

enum RecordDataResult {
    RecordDataResult_SUCCESS,
    RecordDataResult_USER_INPUT,
    RecordDataResult_FULL_BUFFER,
    RecordDataResult_NOT_STABLE,
};

typedef struct LogEntry {
    uint8_t flags;
    uint8_t rising_edge_count;
    uint16_t timer_count;
} LogEntry;


class DataRecorder {
    public:
    static uint16_t g_stream_unstable_ms;
    static uint16_t g_stream_1ms_rising_edge_overflow_count; // we could move to a stack variable instead
    static LogEntry g_entries[ENTRIES_COUNT];

    static enum RecordDataResult record_data(void);
    static RecordDataResult wait_for_stable_pin(void);
private:
    static enum RecordDataResult record_data_inner(void);
    static RecordDataResult wait_for_stable_pin_inner(void);
    static void reset_entries(void);
};

