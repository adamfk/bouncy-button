#pragma once
#include <stdint.h>
#include "DataRecorder.hpp"
#include "Arduino.h"
#include "Stats.h"
#include "Section.hpp"
#include "Screen.hpp"

class ResultsPrinter {
public:

    static uint32_t print_result_smarter(LogEntry entries[], const uint16_t entries_count, uint32_t stream_unstable_ms)
    {
        uint32_t cumulative_timer_counts = 0;
        uint32_t last_change_at_timer_counts = 0;
        uint16_t last_change_at_log_index = 0;
        uint16_t event_number = 0; // unique event number (aggregates timer rollovers)
        bool ignore_next_rollover = false;
        const LogEntry* last_entry = &entries[0];

        print_str("<buffered_events>"); print_str("\n");

        // for loop over all entries
        for (uint16_t i = 0; i < entries_count; i++)
        {
            const LogEntry* entry = &entries[i];

            if (entry->flags & STATE_FLAG_UNUSED) {
                break;
            }

            const uint16_t time_diff = entry->timer_count - last_entry->timer_count;
            const int8_t pin_diff = (entry->flags & INPUT_PIN_MASK) - (last_entry->flags & INPUT_PIN_MASK);
            const uint8_t rising_edge_diff = entry->rising_edge_count - last_entry->rising_edge_count;
            const bool manual_rollover_detected = (entry->timer_count < last_entry->timer_count);
            const bool change_detected = (pin_diff != 0 || rising_edge_diff != 0);
            ignore_next_rollover |= manual_rollover_detected;

            cumulative_timer_counts += time_diff;
            if (entry->flags & STATE_FLAG_TIMER_ROLLOVER_NOTED) {
                if (ignore_next_rollover) {
                    ignore_next_rollover = false;
                } else {
                    cumulative_timer_counts += 65536;
                }
            }

            if (change_detected || i == 0) {
                event_number++;
                last_change_at_log_index = i;
                last_change_at_timer_counts = cumulative_timer_counts;

                //print message like: "pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1"
                print_str("pin: "); print_raw((entry->flags & INPUT_PIN_MASK) > 0);
                print_str(", rising_edges: "); print_raw(rising_edge_diff);

                print_str(", nsec: "); print_raw(Periph::scale_timer_counts_to_ns(cumulative_timer_counts));
                // uint32_t time_since_last_change = cumulative_timer_counts - last_change_at_timer_counts;
                // print_str(", nsec_diff: "); print_raw(Periph::scale_timer_counts_to_ns(time_since_last_change));
                print_str(", log: "); print_raw(i+1);
                print_str(", event: "); print_raw(event_number);

                print_str("\n");
            }

            last_entry = entry;
        }
        print_str("</buffered_events>"); print_str("\n");
        print_str("logs used: "); print_raw(last_change_at_log_index+1); print_str("/"); print_raw(entries_count); print_str("\n");

        uint32_t unstable_ns;
        if (stream_unstable_ms > 0) {
            // if we have any streaming data, we need to consider that it started at the last record's
            // which may be different than the last change (if our last records were from timer rollovers).
            const uint32_t cumulative_ns = Periph::scale_timer_counts_to_ns(cumulative_timer_counts);
            print_str("stream_at_ns: "); print_raw(cumulative_ns); print_str("\n");
            unstable_ns = cumulative_ns + (stream_unstable_ms * 1000000);
        } else {
             unstable_ns = Periph::scale_timer_counts_to_ns(last_change_at_timer_counts);
        }

        return unstable_ns;
    }

        
    static void print_raw_logs(LogEntry entries[], const uint16_t entries_count) {
        print_str("<raw_logs>\n");

        for (uint16_t i = 0; i < entries_count; i++) {
            const LogEntry* entry = &entries[i];

            print_str("Log "); print_raw(i);
            print_str(", pin: "); print_raw((entry->flags & INPUT_PIN_MASK) > 0);
            print_str(", rising_edge_count: "); print_raw(entry->rising_edge_count);
            print_str(", timer counts: "); print_raw(entry->timer_count);

            print_str(", flags: ");
            if (entry->flags & STATE_FLAG_SETUP_SAMPLE) {
                print_str("SETUP ");
            }
            if (entry->flags & STATE_FLAG_TIMER_ROLLOVER_NOTED) {
                print_str("TIMER_ROLLOVER_NOTED");
            }
            if (entry->flags & STATE_FLAG_UNUSED) {
                print_str("UNUSED");
            }

            print_str("\n");
        }
        print_str("</raw_logs>\n");
    }

    static uint32_t print_test_info(Section& section, StatsAndConfig& stats_config) {
        print_str("sw version: " VERSION_STR "\n");
        uint32_t duration_ns = ResultsPrinter::print_result_smarter(DataRecorder::g_entries, COUNT_OF(DataRecorder::g_entries), DataRecorder::g_stream_unstable_ms);
        print_str("section type: \""); Screen::print_section(section); print_str("\"\n");
        print_str("section count: "); print_raw(section.section_test_count); print_str("\n");
        print_str("test id: "); print_raw(stats_config.total_count); print_str("\n");
        print_str("duration: "); Screen::print_duration(duration_ns);
        return duration_ns;
    }

    static void print_test_start(Section& section, StatsAndConfig& stats_config) {
        print_str("#################### Test #"); print_raw(stats_config.total_count); print_str(" ####################\n");
        print_str("Section count: "); print_raw(section.section_test_count); //print_str("\n");
        print_str(", type: \""); Screen::print_section(section); print_str("\"\n");
    }
};