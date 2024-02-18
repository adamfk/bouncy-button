#pragma once
#include "SectionType.h"
#include "defines.h"
#include <stdint.h>
#include "Section.hpp"

class Screen {
public:

static void print_splash_screen(void) {
    print_str("  $$$$$$$\\  $$\\                                                                                 \n");
    print_str("  $$  __$$\\ \\__|                                                                                \n");
    print_str("  $$ |  $$ |$$\\  $$$$$$\\                                                                        \n");
    print_str("  $$$$$$$\\ |$$ |$$  __$$\\                                                                       \n");
    print_str("  $$  __$$\\ $$ |$$ /  $$ |                                                                      \n");
    print_str("  $$ |  $$ |$$ |$$ |  $$ |                                                                      \n");
    print_str("  $$$$$$$  |$$ |\\$$$$$$$ |                                                                      \n");
    print_str("  \\_______/ \\__| \\____$$ |                                                                      \n");
    print_str("                $$\\   $$ |                                                                      \n");
    print_str("  $$$$$$$\\      \\$$$$$$  |                                                                      \n");
    print_str("  $$  __$$\\      \\______/                                                                       \n");
    print_str("  $$ |  $$ | $$$$$$\\  $$\\   $$\\ $$$$$$$\\   $$$$$$$\\ $$\\   $$\\                                   \n");
    print_str("  $$$$$$$\\ |$$  __$$\\ $$ |  $$ |$$  __$$\\ $$  _____|$$ |  $$ |                                  \n");
    print_str("  $$  __$$\\ $$ /  $$ |$$ |  $$ |$$ |  $$ |$$ /      $$ |  $$ |                                  \n");
    print_str("  $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |      $$ |  $$ |                                  \n");
    print_str("  $$$$$$$  |\\$$$$$$  |\\$$$$$$  |$$ |  $$ |\\$$$$$$$\\ \\$$$$$$$ |                                  \n");
    print_str("  \\_______/  \\______/  \\______/ \\__|  \\__| \\_______| \\____$$ |                                  \n");
    print_str("                                                    $$\\   $$ |                                  \n");
    print_str("  $$$$$$$\\              $$\\     $$\\                 \\$$$$$$  |                                  \n");
    print_str("  $$  __$$\\             $$ |    $$ |                 \\______/                                   \n");
    print_str("  $$ |  $$ |$$\\   $$\\ $$$$$$\\ $$$$$$\\    $$$$$$\\  $$$$$$$\\                                      \n");
    print_str("  $$$$$$$\\ |$$ |  $$ |\\_$$  _|\\_$$  _|  $$  __$$\\ $$  __$$\\                                     \n");
    print_str("  $$  __$$\\ $$ |  $$ |  $$ |    $$ |    $$ /  $$ |$$ |  $$ |                                    \n");
    print_str("  $$ |  $$ |$$ |  $$ |  $$ |$$\\ $$ |$$\\ $$ |  $$ |$$ |  $$ |                                    \n");
    print_str("  $$$$$$$  |\\$$$$$$  |  \\$$$$  |\\$$$$  |\\$$$$$$  |$$ |  $$ |                                    \n");
    print_str("  \\_______/  \\______/    \\____/  \\____/  \\______/ \\__|  \\__|                                    \n");
    print_str("  $$$$$$$\\                                $$\\                                         $$\\       \n");
    print_str("  $$  __$$\\                               $$ |                                        $$ |      \n");
    print_str("  $$ |  $$ | $$$$$$\\  $$$$$$$\\   $$$$$$$\\ $$$$$$$\\  $$$$$$\\$$$$\\   $$$$$$\\   $$$$$$\\  $$ |  $$\\ \n");
    print_str("  $$$$$$$\\ |$$  __$$\\ $$  __$$\\ $$  _____|$$  __$$\\ $$  _$$  _$$\\  \\____$$\\ $$  __$$\\ $$ | $$  |\n");
    print_str("  $$  __$$\\ $$$$$$$$ |$$ |  $$ |$$ /      $$ |  $$ |$$ / $$ / $$ | $$$$$$$ |$$ |  \\__|$$$$$$  / \n");
    print_str("  $$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |      $$  _$$<  \n");
    print_str("  $$$$$$$  |\\$$$$$$$\\ $$ |  $$ |\\$$$$$$$\\ $$ |  $$ |$$ | $$ | $$ |\\$$$$$$$ |$$ |      $$ | \\$$\\ \n");
    print_str("  \\_______/  \\_______|\\__|  \\__| \\_______|\\__|  \\__|\\__| \\__| \\__| \\_______|\\__|      \\__|  \\__|\n");
    // print_str("  \n");
    print_str("  Big Bouncy Button Benchmark. Version " VERSION_STR "\n");
    print_str("  Arduino board: "); 
    #if defined(ARDUINO_AVR_UNO)
        print_str("Uno");
    #elif defined(ARDUINO_AVR_NANO)
        print_str("Nano");
    #else
        print_str("???");
    #endif
    print_str("\n");
    print_str("  F_CPU: "); print_raw(F_CPU); print_str("\n");
    print_str("\n\n\n");
}

static void print_press_large(void) {
    // https://patorjk.com/software/taag/#p=display&f=Big&t=PRESS!
    print_str(" _____  _____  ______  _____ _____ _ \n");
    print_str("|  __ \\|  __ \\|  ____|/ ____/ ____| |\n");
    print_str("| |__) | |__) | |__  | (___| (___ | |\n");
    print_str("|  ___/|  _  /|  __|  \\___ \\\\___ \\| |\n");
    print_str("| |    | | \\ \\| |____ ____) |___) |_|\n");
    print_str("|_|    |_|  \\_\\______|_____/_____/(_)\n");
    print_str("Press the button (it is currently released == logic high)\n");    
}

static void print_release_large(void) {
    print_str("          _                     \n");
    print_str("         | |                    \n");
    print_str(" _ __ ___| | ___  __ _ ___  ___ \n");
    print_str("| '__/ _ \\ |/ _ \\/ _` / __|/ _ \\\n");
    print_str("| | |  __/ |  __/ (_| \\__ \\  __/\n");
    print_str("|_|  \\___|_|\\___|\\__,_|___/\\___|\n");
    print_str("Release the button (it is currently pressed == logic low)\n");
}

static void print_new_record_title(void) {
    print_str(" $$\\   $$\\ $$$$$$$$\\ $$\\      $$\\       $$$$$$$\\  $$$$$$$$\\  $$$$$$\\   $$$$$$\\  $$$$$$$\\  $$$$$$$\\  $$\\ \n");
    print_str(" $$$\\  $$ |$$  _____|$$ | $\\  $$ |      $$  __$$\\ $$  _____|$$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ |\n");
    print_str(" $$$$\\ $$ |$$ |      $$ |$$$\\ $$ |      $$ |  $$ |$$ |      $$ /  \\__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |\n");
    print_str(" $$ $$\\$$ |$$$$$\\    $$ $$ $$\\$$ |      $$$$$$$  |$$$$$\\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |\n");
    print_str(" $$ \\$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\\__|\n");
    print_str(" $$ |\\$$$ |$$ |      $$$  / \\$$$ |      $$ |  $$ |$$ |      $$ |  $$\\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    \n");
    print_str(" $$ | \\$$ |$$$$$$$$\\ $$  /   \\$$ |      $$ |  $$ |$$$$$$$$\\ \\$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\\ \n");
    print_str(" \\__|  \\__|\\________|\\__/     \\__|      \\__|  \\__|\\________| \\______/  \\______/ \\__|  \\__|\\_______/ \\__|\n");
    print_str(" New session record for max duration! Bounce them buttons.\n");
}

static void print_not_stable_large(void) {
    print_str("  _   _  ____ _______       _        _     _        _ \n");
    print_str(" | \\ | |/ __ \\__   __|     | |      | |   | |      | |\n");
    print_str(" |  \\| | |  | | | |     ___| |_ __ _| |__ | | ___  | |\n");
    print_str(" | . ` | |  | | | |    / __| __/ _` | '_ \\| |/ _ \\ | |\n");
    print_str(" | |\\  | |__| | | |    \\__ \\ || (_| | |_) | |  __/ |_|\n");
    print_str(" |_| \\_|\\____/  |_|    |___/\\__\\__,_|_.__/|_|\\___| (_)\n");
    print_str(" Test did not end stable. Check your wiring? Demon button?\n");
}

static bool print_std_section_type_id(SectionType type) {
    bool success = true;
    switch (type) {
        case SectionType_NORMAL: print_str("n"); break;

        case SectionType_FAST: print_str("f"); break;
        case SectionType_P_FAST_RL_NORM: print_str("f,n"); break;
        case SectionType_P_NORM_RL_FAST: print_str("n,f"); break;

        case SectionType_SLOW: print_str("s"); break;
        case SectionType_P_SLOW_RL_NORM: print_str("s,n"); break;
        case SectionType_P_NORM_RL_SLOW: print_str("n,s"); break;

        case SectionType_SMK_WP: print_str("smk_wp"); break;
        case SectionType_SMK_WR: print_str("smk_wr"); break;
        default: print_str("???"); break;
    }

    return success;
}

static bool print_std_section_type_short(SectionType type) {
    bool success = true;
    switch (type) {
        case SectionType_NORMAL: print_str("Normal"); break;

        case SectionType_FAST: print_str("Fast"); break;
        case SectionType_P_FAST_RL_NORM: print_str("FAST/norm"); break;
        case SectionType_P_NORM_RL_FAST: print_str("norm/FAST"); break;

        case SectionType_SLOW: print_str("Slow"); break;
        case SectionType_P_SLOW_RL_NORM: print_str("SLOW/norm"); break;
        case SectionType_P_NORM_RL_SLOW: print_str("norm/SLOW"); break;

        case SectionType_SMK_WP: print_str("Smack WP"); break;
        case SectionType_SMK_WR: print_str("Smack WR"); break;
        default: print_str("???"); break;
    }

    return success;
}

static bool print_std_section_type_with_meta(SectionType type) {
    bool success = true;
    switch (type) {
        case SectionType_NORMAL: print_str("Normal: normal press & release. p(norm), rl(norm)"); break;

        case SectionType_FAST: print_str("Fast: Fast press & release. p(FAST),rl(FAST)"); break;
        case SectionType_P_FAST_RL_NORM: print_str("FAST/norm: Fast press, normal release. p(FAST) rl(norm)"); break;
        case SectionType_P_NORM_RL_FAST: print_str("norm/FAST: Normal press, fast release. p(norm),rl(FAST)"); break;

        case SectionType_SLOW: print_str("Slow: Slow press & release. p(SLOW),rl(SLOW)"); break;
        case SectionType_P_SLOW_RL_NORM: print_str("SLOW/norm: Slow press, normal release. p(SLOW),rl(norm)"); break;
        case SectionType_P_NORM_RL_SLOW: print_str("norm/SLOW: Normal press, slow release. p(norm),rl(SLOW)"); break;

        case SectionType_SMK_WP: print_str("Smack WP: Smack housing while button held pressed."); break;
        case SectionType_SMK_WR: print_str("Smack WR: Smack housing while button released."); break;
        default: print_str("???"); break;
    }

    return success;
}

static void print_section(Section section) {
    if (section.section_type == SectionType_CUSTOM) {
        print_raw(section.custom_id);
    } else {
        print_std_section_type_short(section.section_type);
    }
}

static void print_duration(uint32_t duration_ns) {
    uint32_t millis = duration_ns / 1000000;
    uint32_t micros = (duration_ns - (millis * 1000000)) / 1000;
    uint32_t nanos = duration_ns - (millis * 1000000) - (micros * 1000);

    if (millis > 0) {
        print_raw(millis); print_str(" ms, "); print_raw(micros); print_str(" us, "); print_raw(nanos); print_str(" ns\n");
    } else if (micros > 0) {
        print_raw(micros); print_str(" us, "); print_raw(nanos); print_str(" ns\n");
    } else {
        print_raw(nanos); print_str(" ns\n");
    }
}
};
