#pragma once
#include "SectionType.h"
#include "defines.h"
#include <stdint.h>
#include "Section.hpp"
#include "Periph.hpp"

class Screen {
public:

static void print_splash_screen(void) {
    // https://patorjk.com/software/taag/#p=display&h=1&v=1&f=Big%20Money-nw&t=Big%0ABouncy%0AButton%0ABenchmark
    print_str_anim("  $$$$$$$\\ \n");
    print_str_anim("  $$  __$$\\ \n");
    print_str_anim("  $$ |  $$ | $$$$$$\\  $$\\   $$\\ $$$$$$$\\   $$$$$$$\\ $$\\   $$\\ \n");
    print_str_anim("  $$$$$$$\\ |$$  __$$\\ $$ |  $$ |$$  __$$\\ $$  _____|$$ |  $$ | \n");
    print_str_anim("  $$  __$$\\ $$ /  $$ |$$ |  $$ |$$ |  $$ |$$ /      $$ |  $$ | \n");
    print_str_anim("  $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |      $$ |  $$ | \n");
    print_str_anim("  $$$$$$$  |\\$$$$$$  |\\$$$$$$  |$$ |  $$ |\\$$$$$$$\\ \\$$$$$$$ | \n");
    print_str_anim("  \\_______/  \\______/  \\______/ \\__|  \\__| \\_______| \\____$$ | \n");
    print_str_anim("                                                    $$\\   $$ | \n");
    print_str_anim("  $$$$$$$\\              $$\\     $$\\                 \\$$$$$$  | \n");
    print_str_anim("  $$  __$$\\             $$ |    $$ |                 \\______/ \n");
    print_str_anim("  $$ |  $$ |$$\\   $$\\ $$$$$$\\ $$$$$$\\    $$$$$$\\  $$$$$$$\\ \n");
    print_str_anim("  $$$$$$$\\ |$$ |  $$ |\\_$$  _|\\_$$  _|  $$  __$$\\ $$  __$$\\ \n");
    print_str_anim("  $$  __$$\\ $$ |  $$ |  $$ |    $$ |    $$ /  $$ |$$ |  $$ | \n");
    print_str_anim("  $$ |  $$ |$$ |  $$ |  $$ |$$\\ $$ |$$\\ $$ |  $$ |$$ |  $$ | \n");
    print_str_anim("  $$$$$$$  |\\$$$$$$  |  \\$$$$  |\\$$$$  |\\$$$$$$  |$$ |  $$ | \n");
    print_str_anim("  \\_______/  \\______/    \\____/  \\____/  \\______/ \\__|  \\__| \n");
    print_str_anim("  $$$$$$$\\                                $$\\                                         $$\\ \n");
    print_str_anim("  $$  __$$\\                               $$ |                                        $$ | \n");
    print_str_anim("  $$ |  $$ | $$$$$$\\  $$$$$$$\\   $$$$$$$\\ $$$$$$$\\  $$$$$$\\$$$$\\   $$$$$$\\   $$$$$$\\  $$ |  $$\\ \n");
    print_str_anim("  $$$$$$$\\ |$$  __$$\\ $$  __$$\\ $$  _____|$$  __$$\\ $$  _$$  _$$\\  \\____$$\\ $$  __$$\\ $$ | $$  |\n");
    print_str_anim("  $$  __$$\\ $$$$$$$$ |$$ |  $$ |$$ /      $$ |  $$ |$$ / $$ / $$ | $$$$$$$ |$$ |  \\__|$$$$$$  / \n");
    print_str_anim("  $$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |      $$  _$$< \n");
    print_str_anim("  $$$$$$$  |\\$$$$$$$\\ $$ |  $$ |\\$$$$$$$\\ $$ |  $$ |$$ | $$ | $$ |\\$$$$$$$ |$$ |      $$ | \\$$\\ \n");
    print_str_anim("  \\_______/  \\_______|\\__|  \\__| \\_______|\\__|  \\__|\\__| \\__| \\__| \\_______|\\__|      \\__|  \\__|\n");
    // print_str_anim(" \n");
    print_str_anim("  <test_session_start/>\n");
    print_str_anim("  Bouncy Button Benchmark. Version " VERSION_STR ".\n");
    print_str_anim("  Project URL: https://github.com/adamfk/bouncy-button\n");

    print_str_anim("  Arduino board: ");
    #if defined(ARDUINO_AVR_UNO)
        print_str_anim("Uno");
    #elif defined(ARDUINO_AVR_NANO)
        print_str_anim("Nano");
    #else
        print_str_anim("???");
    #endif
    print_str_anim(", IDE: "); print_raw_anim(ARDUINO); print_str_anim(", GCC: "); print_str_anim(__VERSION__); print_str_anim("\n");

    print_str_anim("  MCU: "); 
    print_str_anim(STRINGIFY(__AVR_DEVICE_NAME__));
    print_str_anim(", MCU ID: ");
    Periph::print_board_id();
    print_str_anim(", F_CPU: "); print_raw_anim(F_CPU); print_str_anim("\n");
    print_str_anim("\n");
}

static void print_press_large(void) {
    // https://patorjk.com/software/taag/#p=display&f=Big&t=PRESS!
    print_str_anim(" _____  _____  ______  _____ _____ _ \n");
    print_str_anim("|  __ \\|  __ \\|  ____|/ ____/ ____| |\n");
    print_str_anim("| |__) | |__) | |__  | (___| (___ | |\n");
    print_str_anim("|  ___/|  _  /|  __|  \\___ \\\\___ \\| |\n");
    print_str_anim("| |    | | \\ \\| |____ ____) |___) |_|\n");
    print_str_anim("|_|    |_|  \\_\\______|_____/_____/(_)\n");
    print_str_anim("Press the button (it is currently released == logic high)\n");    
}

static void print_release_large(void) {
    print_str_anim("          _ \n");
    print_str_anim("         | | \n");
    print_str_anim(" _ __ ___| | ___  __ _ ___  ___ \n");
    print_str_anim("| '__/ _ \\ |/ _ \\/ _` / __|/ _ \\\n");
    print_str_anim("| | |  __/ |  __/ (_| \\__ \\  __/\n");
    print_str_anim("|_|  \\___|_|\\___|\\__,_|___/\\___|\n");
    print_str_anim("Release the button (it is currently pressed == logic low)\n");
}

static void print_new_record_title(void) {
    print_str_anim(" $$\\   $$\\ $$$$$$$$\\ $$\\      $$\\       $$$$$$$\\  $$$$$$$$\\  $$$$$$\\   $$$$$$\\  $$$$$$$\\  $$$$$$$\\  $$\\ \n");
    print_str_anim(" $$$\\  $$ |$$  _____|$$ | $\\  $$ |      $$  __$$\\ $$  _____|$$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\ $$ |\n");
    print_str_anim(" $$$$\\ $$ |$$ |      $$ |$$$\\ $$ |      $$ |  $$ |$$ |      $$ /  \\__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |\n");
    print_str_anim(" $$ $$\\$$ |$$$$$\\    $$ $$ $$\\$$ |      $$$$$$$  |$$$$$\\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |\n");
    print_str_anim(" $$ \\$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\\__|\n");
    print_str_anim(" $$ |\\$$$ |$$ |      $$$  / \\$$$ |      $$ |  $$ |$$ |      $$ |  $$\\ $$ |  $$ |$$ |  $$ |$$ |  $$ | \n");
    print_str_anim(" $$ | \\$$ |$$$$$$$$\\ $$  /   \\$$ |      $$ |  $$ |$$$$$$$$\\ \\$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\\ \n");
    print_str_anim(" \\__|  \\__|\\________|\\__/     \\__|      \\__|  \\__|\\________| \\______/  \\______/ \\__|  \\__|\\_______/ \\__|\n");
    print_str_anim(" New session record for max duration! Bounce them buttons.\n");
}

static void print_not_stable_large(void) {
    print_str_anim("  _   _  ____ _______       _        _     _        _ \n");
    print_str_anim(" | \\ | |/ __ \\__   __|     | |      | |   | |      | |\n");
    print_str_anim(" |  \\| | |  | | | |     ___| |_ __ _| |__ | | ___  | |\n");
    print_str_anim(" | . ` | |  | | | |    / __| __/ _` | '_ \\| |/ _ \\ | |\n");
    print_str_anim(" | |\\  | |__| | | |    \\__ \\ || (_| | |_) | |  __/ |_|\n");
    print_str_anim(" |_| \\_|\\____/  |_|    |___/\\__\\__,_|_.__/|_|\\___| (_)\n");
    print_str_anim(" Test did not end stable. Check your wiring? Demon button?\n");
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

    anim_delay();

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

    anim_delay();

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

    // anim_delay(); // too much delay

    return success;
}

static void print_section(Section section) {
    if (section.section_type == SectionType_CUSTOM) {
        print_raw_anim(section.custom_id);
    } else {
        print_std_section_type_short(section.section_type);
    }
}

static void print_duration(uint32_t duration_ns) {
    uint32_t millis = duration_ns / 1000000;
    uint32_t micros = (duration_ns - (millis * 1000000)) / 1000;
    uint32_t nanos = duration_ns - (millis * 1000000) - (micros * 1000);

    if (millis > 0) {
        print_raw_anim(millis); print_str_anim(" ms, "); print_raw_anim(micros); print_str_anim(" us, "); print_raw_anim(nanos); print_str_anim(" ns\n");
    } else if (micros > 0) {
        print_raw_anim(micros); print_str_anim(" us, "); print_raw_anim(nanos); print_str_anim(" ns\n");
    } else {
        print_raw_anim(nanos); print_str_anim(" ns\n");
    }
}
};
