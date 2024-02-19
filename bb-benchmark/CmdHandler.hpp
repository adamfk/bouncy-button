#pragma once
#include "defines.h"
#include <ctype.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include "Screen.hpp"
#include "Section.hpp"
#include "Stats.h"
#include "Periph.hpp"
#include "ResultsPrinter.hpp"

#define flash_strcmp(a, b) strcmp_P(a, PSTR(b))

enum CommandResult {
    CommandResult_SUCCESS,
    CommandResult_SUCCESS_STAY_IN_MENU,
    CommandResult_RECOGNIZED_BUT_NOT_HANDLED,
    CommandResult_BAD_COMMAND_ARG,
    CommandResult_BAD_COMMAND,
};

class CmdHandler {
public:

    Section & section;
    StatsAndConfig & stats_config;
    uint8_t skip_wait_for_stable : 1;

    CmdHandler(Section & section, StatsAndConfig & stats_config) : section(section), stats_config(stats_config) {

    }

    static void prompt_for_command(void)
    {
        print_str("\nPossible commands: \n");
        print_str("  ss  - Start Section test type.\n");
        print_str("  dl  - Delete Last. Add log that last test should be deleted.\n");
        print_str("  gg  - Glitch Guard. Useful with 'dtg'. Marks data to here as good.\n");
        print_str("  dtg - Delete To last Glitch Guard 'gg'. Useful if wires glitch and a bunch of bogus data is recorded.\n");
        print_str("  nt  - Note something in output.\n");
        print_str("  gen - Generate a signal for self calibration on pin 11.\n");
        print_str("  sws - Skip waiting for next stable. Useful when generating a self calibration signal.\n");
        print_str("  erl - Enable Raw Logs.\n");
        print_str("  drl - Disable Raw Logs.\n");
        print_str("  ex  - Exit this menu and record more sweet, sweet, data...\n");
        print_str("  stl - Session Title. Useful for keeping track of what button this is for.\n");
        print_str("  sds - Session Description. Useful for keeping track of what button this is for.\n");
        print_str("  eip - Enable Internal Pullup resistor (default).\n");
        print_str("  dip - Disable Internal Pullup resistor.\n");
        print_str("\n");
    }

        CommandResult wait_handle_user_command(void)
    {
        CommandResult result = CommandResult_BAD_COMMAND;
        
        wait_for_any_serial_input();

        // because we disabled interrupts while sampling, we only receive the first two and last characters of whatever was sent.
        int a = Serial.read();
        int b = Serial.read();
        int c = Serial.read();

        a = tolower(a);
        b = tolower(b);
        c = tolower(c);

        const bool no_3rd_char = c == -1 || c == '\n' || c == '\r' || c == '\0';

        // 1 or 2 char commands
        if (no_3rd_char) {
            if (a == 's' && b == 's') {
                result = CommandResult_BAD_COMMAND_ARG; // setup as default
                if (ask_for_section_type()) {
                    result = CommandResult_SUCCESS;
                }
            } else if (a == 'g' && b == 'g') {
                print_str("\n\n<glitch_guard/>\n\n\n");
                result = CommandResult_SUCCESS;
            } else if (a == 'e' && b == 'x') {
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'l') {
                result = CommandResult_SUCCESS;
                print_str("\n\n<delete_last_test/>\n\n\n");
                if (stats_config.new_record_just_recorded)
                {
                    stats_config.max_duration_ns = stats_config.old_max_duration_ns;
                    stats_config.new_record_just_recorded = false;
                    print_str("Restoring old max duration ");
                    Screen::print_duration(stats_config.max_duration_ns);
                }
            } else if (a == '?') {
                result = CommandResult_RECOGNIZED_BUT_NOT_HANDLED;
            } else if (a == 'n' && b == 't') {
                result = CommandResult_SUCCESS;
                print_str("Please type your note and press enter.\n");
                print_str("MAX of 63 characters (truncation happens after that).\n");
                print_str("\n<note>\n");
                echo_serial_input();
                print_str("\n</note>\n");
            }
        } else {
            // up to 3 char commands
            if (a == 'd' && b == 't' && c == 'g') {
                print_str("\n\n<delete_to_last_glitch_guard/>\n\n\n");
                result = CommandResult_SUCCESS;
            } else if (a == 'g' && b == 'e' && c == 'n') {
                result = handle_gen_signal();
            } else if (a == 's' && b == 'w' && c == 's') {
                print_str("Skipping waiting for stable for next test.\n");
                this->skip_wait_for_stable = true;
                result = CommandResult_SUCCESS;
            } else if (a == 'e' && b == 'r' && c == 'l') {
                print_str("Enabling raw logs.\n");
                stats_config.print_raw_logs = true;
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'r' && c == 'l') {
                print_str("Disabling raw logs.\n");
                stats_config.print_raw_logs = false;
                result = CommandResult_SUCCESS;
            } else if (a == 's' && b == 't' && c == 'l') {
                result = CommandResult_SUCCESS;
                skip_over_whitespace();
                print_str("Please type session title and press enter.\n");
                print_str("MAX of 63 characters (truncation happens after that).\n");
                print_str("\n<session_title>\n");
                echo_serial_input();
                print_str("\n</session_title>\n");
            } else if (a == 's' && b == 'd' && c == 's') {
                result = CommandResult_SUCCESS;
                skip_over_whitespace();
                print_str("Please type session description and press enter.\n");
                print_str("MAX of 63 characters (truncation happens after that).\n");
                print_str("\n<session_description>\n");
                echo_serial_input();
                print_str("\n</session_description>\n");
            } else if (a == 'e' && b == 'i' && c == 'p') {
                print_str("Enabling internal pullup resistor.\n");
                Periph::enable_pullup(stats_config);
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'i' && c == 'p') {
                print_str("Disabling internal pullup resistor.\n");
                Periph::disable_pullup(stats_config);
                result = CommandResult_SUCCESS;
            }
        }

        if (result == CommandResult_BAD_COMMAND) {
            print_str("Bad command dude: \n");
            print_str("  [0] = "); print_raw(a); print_str(" (dec) '"); print_raw((char)a); print_str("'\n");

            if (b != -1) {
                print_str("  [1] = "); print_raw(b); print_str(" (dec) '"); print_raw((char)b); print_str("'\n");
            }
            if (c != -1) {
                print_str("  [2] = "); print_raw(c); print_str(" (dec) '"); print_raw((char)c); print_str("'\n");
            }
        } else if (result == CommandResult_BAD_COMMAND_ARG) {
            print_str("Bad command arg. I'm going to ignore that.\n");
        } else if (result == CommandResult_RECOGNIZED_BUT_NOT_HANDLED) {
            // print_str("Command ignored.\n");
        }

        print_str("\n");
        clear_any_serial_input();

        return result;
    }

    void handle_any_user_command(void)
    {
        if (Serial.available() == 0)
            return;

        CommandResult result = wait_handle_user_command();
        while (result != CommandResult_SUCCESS) {
            prompt_for_command();
            result = wait_handle_user_command();
        }
    }

    static void wait_for_any_serial_input(void)
    {
        while (Serial.available() == 0) {
        }
        delay(100); // wait for the rest of the characters to arrive
    }

    static void clear_any_serial_input(void)
    {
        while (Serial.available() != 0) {
            // read enough to clear out RX buffer
            for (uint8_t i = 0; i < 100; i++) {
                Serial.read();
            }
            
            delay(100); // wait for the rest of the characters to arrive
        }
    }

    static void skip_until_whitespace(void)
    {
        while (Serial.available() != 0 && !isspace(Serial.peek())) {
            Serial.read();
        }
    }

    static int skip_over_whitespace(void)
    {
        bool found_some_whitespace = false;
        while (Serial.available() != 0 && isspace(Serial.peek())) {
            Serial.read();
            found_some_whitespace = true;
        }
        return found_some_whitespace;
    }

    // NOT null terminated! Doesn't consume ending whitespace.
    static void read_word_into_buffer(char * buffer, const uint8_t buffer_size)
    {
        // clear buffer
        for (uint8_t i = 0; i < buffer_size; i++) {
            buffer[i] = 0;
        }

        // skip over any leading whitespace
        (void)skip_over_whitespace();

        uint8_t i = 0;
        int c = Serial.peek();
        while (i < buffer_size && c != -1 && c != '\0' && !isspace(c)) {
            buffer[i] = c;
            i++;
            Serial.read();
            c = Serial.peek();
        }
    }

    static void echo_serial_input(void)
    {
        wait_for_any_serial_input();
        while (Serial.available() != 0) {
            while (Serial.available() != 0) {
                Serial.write(Serial.read());
            }
            delay(200); // wait for the rest of the characters to arrive in case they sent something longer than our buffer could handle
        }
    }


    bool ask_for_section_type(void)
    {
        bool handled = true;

        print_str("Standard section types: \n");
        print_str("  Argument | Description\n");
        print_str("  -------------------------------------------------------------------\n");
        print_str("    n      |  "); Screen::print_std_section_type_with_meta(SectionType_NORMAL); print_str("\n");
        print_str("  \n");
        print_str("    f      |  "); Screen::print_std_section_type_with_meta(SectionType_FAST); print_str("\n");
        print_str("    f,n    |  "); Screen::print_std_section_type_with_meta(SectionType_P_FAST_RL_NORM); print_str("\n");
        print_str("    n,f    |  "); Screen::print_std_section_type_with_meta(SectionType_P_NORM_RL_FAST); print_str("\n");
        print_str("  \n");
        print_str("    s      |  "); Screen::print_std_section_type_with_meta(SectionType_SLOW); print_str("\n");
        print_str("    s,n    |  "); Screen::print_std_section_type_with_meta(SectionType_P_SLOW_RL_NORM); print_str("\n");
        print_str("    n,s    |  ");
        print_str("  \n");
        print_str("    smk_wp |  "); Screen::print_std_section_type_with_meta(SectionType_SMK_WP); print_str("\n");
        print_str("    smk_wr |  "); Screen::print_std_section_type_with_meta(SectionType_SMK_WR); print_str("\n");
        print_str("\n");
        print_str("You can also create a custom section type: \n");
        print_str("  c <id of 1-9 chars> [optional description]\n");
        print_str("  Max of 63 chars total for line. You can embed title and meta data in the description.\n");

        wait_for_any_serial_input();
        skip_over_whitespace();
        read_word_into_buffer(section.custom_id, sizeof(section.custom_id));
        section.section_type = SectionType_CUSTOM; // this provides null termination for the custom_id string

        if (flash_strcmp(section.custom_id, "n") == 0) {
            section.section_type = SectionType_NORMAL;
        } else if (flash_strcmp(section.custom_id, "f") == 0) {
            section.section_type = SectionType_FAST;
        } else if (flash_strcmp(section.custom_id, "f,n") == 0) {
            section.section_type = SectionType_P_FAST_RL_NORM;
        } else if (flash_strcmp(section.custom_id, "n,f") == 0) {
            section.section_type = SectionType_P_NORM_RL_FAST;
        } else if (flash_strcmp(section.custom_id, "s") == 0) {
            section.section_type = SectionType_SLOW;
        } else if (flash_strcmp(section.custom_id, "s,n") == 0) {
            section.section_type = SectionType_P_SLOW_RL_NORM;
        } else if (flash_strcmp(section.custom_id, "n,s") == 0) {
            section.section_type = SectionType_P_NORM_RL_SLOW;
        } else if (flash_strcmp(section.custom_id, "smk_wp") == 0) {
            section.section_type = SectionType_SMK_WP;
        } else if (flash_strcmp(section.custom_id, "smk_wr") == 0) {
            section.section_type = SectionType_SMK_WR;
        }

        if (section.section_type != SectionType_CUSTOM) {
            print_str("\n\n########################################################################\n\n");
            print_str("<section_start>\n");
            print_str("  <id>_"); Screen::print_std_section_type_id(section.section_type); print_str("</id>\n");
            print_str("  <description>"); 
            Screen::print_std_section_type_with_meta(section.section_type); 
            print_str("</description>\n");
            print_str("</section_start>\n");
        } else if (flash_strcmp(section.custom_id, "c") == 0) {
            skip_over_whitespace();
            read_word_into_buffer(section.custom_id, sizeof(section.custom_id));

            print_str("\n\n########################################################################\n\n");
            section.section_type = SectionType_CUSTOM;
            print_str("<section_start>\n");
            print_str("  <id>"); print_raw(section.custom_id); print_str("</id>\n"); 

            skip_until_whitespace();

            if (skip_over_whitespace() && Serial.available() > 0) {
                print_str("  <description>\n    ");
                echo_serial_input();
                print_str("  </description>\n");
            }

            print_str("</section_start>\n");
        } else {
            handled = false;
            return handled;     // <--------------- NOTE RETURN!!!!! ----------------
        }
        handled = true;

        section.section_test_count = 1;


        return handled;
    }

    static CommandResult handle_gen_signal(void)
    {
        CommandResult result = CommandResult_SUCCESS_STAY_IN_MENU;

        print_str("\nA calibration signal can be output on pin 11\n");
        print_str("Possible commands: \n");
        print_str("  0  - No signal.\n");
        print_str("  f1 - Generate 62.5 nsec pulse per 16.00 usec period.\n");
        print_str("  f2 - Generate 8 MHz output, 50% duty cycle, 62.5ns high/low, 125 ns period.\n");
        print_str("  f3 - Generate 4 MHz output, 50% duty cycle, 125 ns high/low, 250 ns period.\n");
        print_str("  f4 - Generate 2.66666 MHz output, 50% duty cycle, 187.5 ns high/low, 375 ns period.\n");
        print_str("  s <0-255> - `Freq = 16 MHz / (2 * 1024 * (1 + <0-255>))`. Ranges from 7.8 KHz to 30.5 Hz.\n");
        print_str("\n");
        print_str("Keep in mind that Arduino UNOs/nanos have 1% clock accuracy\n\n");

        skip_over_whitespace();
        wait_for_any_serial_input();

        int a = Serial.read();
        a = tolower(a);

        if (a == '0') {
            Periph::disable_signal_gen();
        } else if (a == 'f') {
            a = Serial.read();
            switch (a) {
                case '1': Periph::generate_62_5_ns_pulse(); break;
                case '2': Periph::generate_8MHz(); break;
                case '3': Periph::generate_4MHz(); break;
                case '4': Periph::generate_2_6MHz(); break;
                default: result = CommandResult_BAD_COMMAND_ARG; break;
            }
            if (result != CommandResult_BAD_COMMAND_ARG) {
                print_str("Generating signal f"); print_raw((char)a); print_str("\n\n");
            }

        } else if (a == 's') {
            skip_over_whitespace();

            char buffer[4];
            read_word_into_buffer(buffer, sizeof(buffer));
            int value = atoi(buffer);
            if (value < 0 || value > 255) {
                print_str("Invalid value. Must be 0-255.\n");
                result = CommandResult_BAD_COMMAND_ARG;
                return result;
            }
            
            // cast result to int before printing to avoid extra memory allocation
            float hz = Periph::generate_slow_custom(value);
            print_str("Generating signal"); print_raw(a); print_str("\n");
            print_str("  Frequency: "); print_raw((uint32_t)hz); print_str(" Hz\n");
            print_str("  Period: "); print_raw((uint32_t)(1000000 / hz)); print_str(" usec\n\n");
        } else {
            result = CommandResult_BAD_COMMAND_ARG;
        }

        return result;
    }

};

