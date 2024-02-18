#pragma once
#include <stdint.h>
#include "stdbool.h"

class StatsAndConfig {
public:
    uint16_t total_count : 10;
    uint16_t new_record_just_recorded : 1;
    uint16_t print_raw_logs : 1;

    uint32_t max_duration_ns = 0;    // max of 4 seconds
    uint32_t old_max_duration_ns = 0; // for deleting last test

    StatsAndConfig() {
        total_count = 1;
    }
};
