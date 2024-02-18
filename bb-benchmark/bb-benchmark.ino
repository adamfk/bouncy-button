/*
Big Bouncy Button Benchmark

$$$$$$$\  $$\                                                                                 
$$  __$$\ \__|                                                                                
$$ |  $$ |$$\  $$$$$$\                                                                        
$$$$$$$\ |$$ |$$  __$$\                                                                       
$$  __$$\ $$ |$$ /  $$ |                                                                      
$$ |  $$ |$$ |$$ |  $$ |                                                                      
$$$$$$$  |$$ |\$$$$$$$ |                                                                      
\_______/ \__| \____$$ |                                                                      
              $$\   $$ |                                                                      
$$$$$$$\      \$$$$$$  |                                                                      
$$  __$$\      \______/                                                                       
$$ |  $$ | $$$$$$\  $$\   $$\ $$$$$$$\   $$$$$$$\ $$\   $$\                                   
$$$$$$$\ |$$  __$$\ $$ |  $$ |$$  __$$\ $$  _____|$$ |  $$ |                                  
$$  __$$\ $$ /  $$ |$$ |  $$ |$$ |  $$ |$$ /      $$ |  $$ |                                  
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |      $$ |  $$ |                                  
$$$$$$$  |\$$$$$$  |\$$$$$$  |$$ |  $$ |\$$$$$$$\ \$$$$$$$ |                                  
\_______/  \______/  \______/ \__|  \__| \_______| \____$$ |                                  
                                                  $$\   $$ |                                  
$$$$$$$\              $$\     $$\                 \$$$$$$  |                                  
$$  __$$\             $$ |    $$ |                 \______/                                   
$$ |  $$ |$$\   $$\ $$$$$$\ $$$$$$\    $$$$$$\  $$$$$$$\                                      
$$$$$$$\ |$$ |  $$ |\_$$  _|\_$$  _|  $$  __$$\ $$  __$$\                                     
$$  __$$\ $$ |  $$ |  $$ |    $$ |    $$ /  $$ |$$ |  $$ |                                    
$$ |  $$ |$$ |  $$ |  $$ |$$\ $$ |$$\ $$ |  $$ |$$ |  $$ |                                    
$$$$$$$  |\$$$$$$  |  \$$$$  |\$$$$  |\$$$$$$  |$$ |  $$ |                                    
\_______/  \______/    \____/  \____/  \______/ \__|  \__|                                    
$$$$$$$\                                $$\                                         $$\       
$$  __$$\                               $$ |                                        $$ |      
$$ |  $$ | $$$$$$\  $$$$$$$\   $$$$$$$\ $$$$$$$\  $$$$$$\$$$$\   $$$$$$\   $$$$$$\  $$ |  $$\ 
$$$$$$$\ |$$  __$$\ $$  __$$\ $$  _____|$$  __$$\ $$  _$$  _$$\  \____$$\ $$  __$$\ $$ | $$  |
$$  __$$\ $$$$$$$$ |$$ |  $$ |$$ /      $$ |  $$ |$$ / $$ / $$ | $$$$$$$ |$$ |  \__|$$$$$$  / 
$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |      $$  _$$<  
$$$$$$$  |\$$$$$$$\ $$ |  $$ |\$$$$$$$\ $$ |  $$ |$$ | $$ | $$ |\$$$$$$$ |$$ |      $$ | \$$\ 
\_______/  \_______|\__|  \__| \_______|\__|  \__|\__| \__| \__| \_______|\__|      \__|  \__|
                                                                                              

Requirements:
- Arduino Uno or Nano running at 16 MHz. Not yet tested on a nano.

Usage:
Connect one lead of the switch to Arduino digital pin 4 and the other lead to ground.
- Pin 4 has an internal pullup resistor so we don't need to add one.

Terminology:
- a "sample" is when we read the pin and rising edge counter. We do this as fast as possible.
- a "log" is when we write the sample to the log buffer. We do this as fast as possible.

Advanced Usage:
- Pin 11 can be used to output pulses for self testing.
- Pin 7 can be used for debugging. It can be used to toggle when we sample or log (when enabled).
  This allows you to see how fast we are sampling and logging on an oscilloscope.
*/

#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <ctype.h>
#include "DataRecorder.hpp"
#include "ResultsPrinter.hpp"
#include "SectionType.h"
#include "Screen.hpp"
#include "CmdHandler.hpp"
#include "Section.hpp"
#include "Stats.h"

/////////////////////////////////////////////////////////////////////////////////////
// Defines
/////////////////////////////////////////////////////////////////////////////////////
#include "defines.h"


/////////////////////////////////////////////////////////////////////////////////////
// Vars
/////////////////////////////////////////////////////////////////////////////////////

static Section section;
static StatsAndConfig stats_config;


/////////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////////

void setup() {
    Serial.begin(115200);
    pinMode(INPUT_PIN_NUMBER, INPUT_PULLUP);  // Arduino digital pin 4 is used to count timer0 rising_edges
    
    Timers::setup();

    if (DEBUG_TOGGLE_PIN_AT_SAMPLES || DEBUG_TOGGLE_PIN_AT_LOGS || DEBUG_TOGGLE_CUSTOM) {
        pinMode(7, OUTPUT); // PORTD bit 7 is Arduino digital pin 7
    }

    // animate scrolling up to clear the screen
    for (uint8_t i = 0; i < 50; i++) {
        print_str("\n");
        delay(10);
    }
    
    // https://patorjk.com/software/taag/#p=display&h=1&v=1&f=Big%20Money-nw&t=Big%0ABouncy%0AButton%0ABenchmark

    Screen::print_splash_screen();

    section.section_type = SectionType_NORMAL;
    print_str("Assuming regular testing one transition at a time.\n");
    print_str("Type '?'<enter> for menu options.\n");
    print_str("<test_session_start/>\n");
}

static void handle_commands_and_wait_for_stable() {
    CmdHandler cmd_handler(section, stats_config);
    cmd_handler.handle_any_user_command();

    ResultsPrinter::print_test_start(section, stats_config);

    RecordDataResult result = RecordDataResult_USER_INPUT;

    // Note: when generating a self test signal, we don't want to stay stuck waiting for stable input.
    // Allow user to interact with menu and skip waiting for stable input.
    while (result == RecordDataResult_USER_INPUT) {
        cmd_handler.handle_any_user_command();

        if (cmd_handler.skip_wait_for_stable) {
            print_str("Skipping wait for stable input.\n");
            result = RecordDataResult_SUCCESS;
        } else {
            print_str("Waiting for stable input...");
            result = DataRecorder::wait_for_stable_pin();
            if (result == RecordDataResult_SUCCESS) {
                print_str(" good.\n");
            } else {
                print_str(" interrupted for user input.\n");
            }
        }
    }
}

void loop() {
    print_str("\n");
    print_str("\n");

    handle_commands_and_wait_for_stable();

    // print state of switch
    if (INPUT_PIN_REGISTER & INPUT_PIN_MASK) {
        Screen::print_press_large();
    } else {
        Screen::print_release_large();
    }

    print_str("<test>\n"); // have to start outputting here for streaming mode to be easy to parse

    RecordDataResult result = DataRecorder::record_data();

    if (result == RecordDataResult_USER_INPUT) {
        print_str("User input detected. Test delayed.\n");
        print_str("</test>\n");
    } else {
        if (result == RecordDataResult_NOT_STABLE) {
            print_str("<button_not_stable/>\n");
        }

        uint32_t duration_ns = ResultsPrinter::print_test_info(section, stats_config);
        if (stats_config.print_raw_logs) {
            ResultsPrinter::print_raw_logs(DataRecorder::g_entries, COUNT_OF(DataRecorder::g_entries));
        }

        print_str("</test>\n");
        stats_config.total_count++;
        section.section_test_count++;
        stats_config.new_record_just_recorded = false;

        if (duration_ns > stats_config.max_duration_ns) {
            stats_config.new_record_just_recorded = true;
            stats_config.old_max_duration_ns = stats_config.max_duration_ns;
            stats_config.max_duration_ns = duration_ns;

            print_str("\n\n");
            Screen::print_new_record_title();
            print_str(" "); Screen::print_duration(stats_config.max_duration_ns);
        }

        if (result == RecordDataResult_NOT_STABLE) {
            Screen::print_not_stable_large();
            print_str("\n");
        }
    }
}


/*
GOALS & DESIGN NOTES:
- We need to sample button at 10 kHz (100us, 1600 clocks), but 100 kHz (10us, 160 clocks) would be nicer :)
- Try to sample at least every 10us (160 clocks)

Rough timings:
- call micros() = 3.20 us (about 51 Arduino Uno clocks)
    - that's because it does a fair amount of operations, not just reading a register. This can be reduced by about 1 us by avoiding the multiplication.
- call digitalRead() = 2.37 us (about 38 Arduino Uno clocks)
- `PORTD & 0b10000` = 0.27 us (about 5 Arduino Uno clocks)

Why poll? It is significantly faster than using interrupts. Arduino interrupts take about 5 microseconds (80 clocks)
(https://forum.arduino.cc/t/interrupt-response-time/109372/7)

*/
