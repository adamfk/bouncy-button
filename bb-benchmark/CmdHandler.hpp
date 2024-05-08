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

    CmdHandler(Section & section, StatsAndConfig & stats_config) : section(section), stats_config(stats_config) {

    }

    static void prompt_for_command(void)
    {
        print_str_anim("\nPossible commands: \n");
        print_str_anim("  ss  - Start Section test type.\n");
        print_str_anim("  dl  - Delete Last. Add log that last test should be deleted.\n");
        print_str_anim("  gg  - Glitch Guard. Useful with 'dtg'. Marks data to here as good.\n");
        print_str_anim("  dtg - Delete To last Glitch Guard 'gg'. Useful if wires glitch and a bunch of bogus data is recorded.\n");
        print_str_anim("  nt  - Note something in output.\n");
        print_str_anim("  gen - Generate a signal for self calibration on pin 11.\n");
        print_str_anim("  sws - Skip waiting for next stable. Useful when generating a self calibration signal.\n");
        print_str_anim("  erl - Enable Raw Logs.\n");
        print_str_anim("  drl - Disable Raw Logs.\n");
        print_str_anim("  ex  - Exit this menu and record more sweet, sweet, data...\n");
        print_str_anim("  stl - Session Title. Useful for keeping track of what button this is for.\n");
        print_str_anim("  sds - Session Description. Useful for keeping track of what button this is for.\n");
        print_str_anim("  eip - Enable Internal Pullup resistor (default).\n");
        print_str_anim("  dip - Disable Internal Pullup resistor.\n");
        print_str_anim("\n");
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
                print_str_anim("\n\n<glitch_guard/>\n\n\n");
                result = CommandResult_SUCCESS;
            } else if (a == 'e' && b == 'x') {
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'l') {
                result = CommandResult_SUCCESS;
                print_str_anim("\n\n<delete_last_test/>\n\n\n");
                if (stats_config.new_record_just_recorded)
                {
                    stats_config.max_duration_ns = stats_config.old_max_duration_ns;
                    stats_config.new_record_just_recorded = false;
                    print_str_anim("Restoring old max duration ");
                    Screen::print_duration(stats_config.max_duration_ns);
                }
            } else if (a == '?') {
                result = CommandResult_RECOGNIZED_BUT_NOT_HANDLED;
            } else if (a == 'n' && b == 't') {
                result = CommandResult_SUCCESS;
                print_str_anim("Please type your note and press enter.\n");
                print_str_anim("MAX of 63 characters (truncation happens after that).\n");
                print_str_anim("\n<note>\n");
                echo_serial_input();
                print_str_anim("\n</note>\n");
            }
        } else {
            // up to 3 char commands
            if (a == 'd' && b == 't' && c == 'g') {
                print_str_anim("\n\n<delete_to_last_glitch_guard/>\n\n\n");
                result = CommandResult_SUCCESS;
            } else if (a == 'g' && b == 'e' && c == 'n') {
                result = handle_gen_signal();
            } else if (a == 's' && b == 'w' && c == 's') {
                print_str_anim("Skipping waiting for stable for next test.\n");
                stats_config.skip_wait_for_stable = true;
                result = CommandResult_SUCCESS;
            } else if (a == 'e' && b == 'r' && c == 'l') {
                print_str_anim("Enabling raw logs.\n");
                stats_config.print_raw_logs = true;
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'r' && c == 'l') {
                print_str_anim("Disabling raw logs.\n");
                stats_config.print_raw_logs = false;
                result = CommandResult_SUCCESS;
            } else if (a == 's' && b == 't' && c == 'l') {
                result = CommandResult_SUCCESS;
                skip_over_whitespace();
                print_str_anim("Please type session title and press enter.\n");
                print_str_anim("MAX of 63 characters (truncation happens after that).\n");
                print_str_anim("\n<session_title>\n");
                echo_serial_input();
                print_str_anim("\n</session_title>\n");
            } else if (a == 's' && b == 'd' && c == 's') {
                result = CommandResult_SUCCESS;
                skip_over_whitespace();
                print_str_anim("Please type session description and press enter.\n");
                print_str_anim("MAX of 63 characters (truncation happens after that).\n");
                print_str_anim("\n<session_description>\n");
                echo_serial_input();
                print_str_anim("\n</session_description>\n");
            } else if (a == 'e' && b == 'i' && c == 'p') {
                print_str_anim("Enabling internal pullup resistor.\n");
                Periph::enable_pullup(stats_config);
                result = CommandResult_SUCCESS;
            } else if (a == 'd' && b == 'i' && c == 'p') {
                print_str_anim("Disabling internal pullup resistor.\n");
                Periph::disable_pullup(stats_config);
                result = CommandResult_SUCCESS;
            }
        }

        if (result == CommandResult_BAD_COMMAND) {
            print_str_anim("Bad command dude: \n");
            print_str_anim("  [0] = "); print_raw_anim(a); print_str_anim(" (dec) '"); print_raw_anim((char)a); print_str_anim("'\n");

            if (b != -1) {
                print_str_anim("  [1] = "); print_raw_anim(b); print_str_anim(" (dec) '"); print_raw_anim((char)b); print_str_anim("'\n");
            }
            if (c != -1) {
                print_str_anim("  [2] = "); print_raw_anim(c); print_str_anim(" (dec) '"); print_raw_anim((char)c); print_str_anim("'\n");
            }
        } else if (result == CommandResult_BAD_COMMAND_ARG) {
            print_str_anim("Bad command arg. I'm going to ignore that.\n");
        } else if (result == CommandResult_RECOGNIZED_BUT_NOT_HANDLED) {
            // print_str_anim("Command ignored.\n");
        }

        print_str_anim("\n");
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

        print_str_anim("Standard section types: \n");
        print_str_anim("  Argument | Description\n");
        print_str_anim("  -------------------------------------------------------------------\n");
        print_str_anim("    n      |  "); Screen::print_std_section_type_with_meta(SectionType_NORMAL); print_str("\n");
        print_str("\n");
        print_str_anim("    f      |  "); Screen::print_std_section_type_with_meta(SectionType_FAST); print_str("\n");
        print_str_anim("    f,n    |  "); Screen::print_std_section_type_with_meta(SectionType_P_FAST_RL_NORM); print_str("\n");
        print_str_anim("    n,f    |  "); Screen::print_std_section_type_with_meta(SectionType_P_NORM_RL_FAST); print_str("\n");
        print_str("\n");
        print_str_anim("    s      |  "); Screen::print_std_section_type_with_meta(SectionType_SLOW); print_str("\n");
        print_str_anim("    s,n    |  "); Screen::print_std_section_type_with_meta(SectionType_P_SLOW_RL_NORM); print_str("\n");
        print_str_anim("    n,s    |  ");
        print_str("\n");
        print_str_anim("    smk_wp |  "); Screen::print_std_section_type_with_meta(SectionType_SMK_WP); print_str("\n");
        print_str_anim("    smk_wr |  "); Screen::print_std_section_type_with_meta(SectionType_SMK_WR); print_str("\n");
        print_str("\n");
        print_str_anim("You can also create a custom section type: \n");
        print_str_anim("  c <id of 1-9 chars> [optional description]\n");
        print_str_anim("  Max of 63 chars total for line. You can embed title and meta data in the description.\n");

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
            print_str_anim("\n\n########################################################################\n\n");
            print_str_anim("<section_start>\n");
            print_str_anim("  <id>_"); Screen::print_std_section_type_id(section.section_type); print_str_anim("</id>\n");
            print_str_anim("  <description>"); 
            Screen::print_std_section_type_with_meta(section.section_type); 
            print_str_anim("</description>\n");
            print_str_anim("</section_start>\n");
        } else if (flash_strcmp(section.custom_id, "c") == 0) {
            skip_over_whitespace();
            read_word_into_buffer(section.custom_id, sizeof(section.custom_id));

            print_str_anim("\n\n########################################################################\n\n");
            section.section_type = SectionType_CUSTOM;
            print_str_anim("<section_start>\n");
            print_str_anim("  <id>"); print_raw_anim(section.custom_id); print_str_anim("</id>\n"); 

            skip_until_whitespace();

            if (skip_over_whitespace() && Serial.available() > 0) {
                print_str_anim("  <description>\n    ");
                echo_serial_input();
                print_str_anim("  </description>\n");
            }

            print_str_anim("</section_start>\n");
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

        print_str_anim("\nA calibration signal can be output on pin 11\n");
        print_str_anim("Possible commands: \n");
        print_str_anim("  0  - No signal.\n");
        print_str_anim("  f1 - Generate 62.5 nsec pulse per 16.00 usec period.\n");
        print_str_anim("  f2 - Generate 8 MHz output, 50% duty cycle, 62.5ns high/low, 125 ns period.\n");
        print_str_anim("  f3 - Generate 4 MHz output, 50% duty cycle, 125 ns high/low, 250 ns period.\n");
        print_str_anim("  f4 - Generate 2.66666 MHz output, 50% duty cycle, 187.5 ns high/low, 375 ns period.\n");
        print_str_anim("  a <0-255> - `Freq = 16 MHz / (2 * 1 * (1 + <0-255>))`. Ranges from 8 MHz to 31.25 kHz.\n");
        print_str_anim("  s <0-255> - `Freq = 16 MHz / (2 * 1024 * (1 + <0-255>))`. Ranges from 7.8 KHz to 30.5 Hz.\n");
        print_str_anim("  p <0-7> - Set prescaler. 0->0, 1->1, 2->8, 3->32, 4->64, 5->128, 6->256, 7->1024\n");
        print_str_anim("\n");
        print_str_anim("Keep in mind that Arduino UNOs/nanos have 1% clock accuracy\n\n");

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
                print_str_anim("Generating signal f"); print_raw_anim((char)a); print_str_anim("\n\n");
            }

        } else if (a == 's' || a == 'a') {
            skip_over_whitespace();
            uint8_t value;
            result = read_u8(&value);
            if (result != CommandResult_SUCCESS) {
                return result;
            }
            
            // cast result to int before printing to avoid extra memory allocation
            float hz;
            
            if (a == 's')
                hz = Periph::generate_slow_custom(value);
            else if (a == 'a')
                hz = Periph::generate_fast_custom(value);
            else {
                hz = 0;
                result = CommandResult_BAD_COMMAND;
            }

            print_str_anim("Generating signal '"); print_raw_anim((char)a); print_str_anim("'\n");
            print_str_anim("  Frequency: "); print_raw_anim((uint32_t)hz); print_str_anim(" Hz\n");
            print_str_anim("  Period: "); print_raw_anim((uint32_t)(1000000 / hz)); print_str_anim(" usec\n");
            print_str_anim("  Period: "); print_raw_anim((uint32_t)(1000000000 / hz)); print_str_anim(" nsec\n");
            print_str_anim("\n");
        } else if (a == 'p') {
            skip_over_whitespace();
            uint8_t value;
            result = read_u8(&value);
            if (result != CommandResult_SUCCESS) {
                return result;
            }
            
            if (!Periph::set_prescaler(value)) {
                result = CommandResult_BAD_COMMAND;
            } else {
                print_str_anim("Prescaler set with arg "); print_raw_anim(value); print_str_anim("\n");
                result = CommandResult_SUCCESS;
            }
            print_str_anim("\n");
        } else {
            result = CommandResult_BAD_COMMAND_ARG;
        }

        return result;
    }

    static CommandResult read_u8(uint8_t* value_ptr)
    {
        char buffer[4];
        read_word_into_buffer(buffer, sizeof(buffer));
        int value = atoi(buffer);
        if (value < 0 || value > 255) {
            print_str_anim("Invalid value. Must be 0-255.\n");
            return CommandResult_BAD_COMMAND_ARG;
        }
        *value_ptr = (uint8_t)value;
        return CommandResult_SUCCESS;
    }

};

