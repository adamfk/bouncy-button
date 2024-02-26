#pragma once
#include <stdint.h>
#include "stdbool.h"

class StatsAndConfig {
public:
    uint16_t total_count : 10;
    uint16_t new_record_just_recorded : 1;
    uint16_t print_raw_logs : 1;
    uint16_t internal_pullup : 1;
    uint16_t skip_wait_for_stable : 1;

    uint32_t max_duration_ns;    // max of 4 seconds
    uint32_t old_max_duration_ns; // for deleting last test

    StatsAndConfig() {
        total_count = 1;
        new_record_just_recorded = 0;
        print_raw_logs = 0;
        internal_pullup = 0;
        skip_wait_for_stable = 0;

        max_duration_ns = 0;
        old_max_duration_ns = 0;
    }
};
