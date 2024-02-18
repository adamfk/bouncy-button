#pragma once

enum SectionType {
    SectionType_CUSTOM = 0,
    
    SectionType_NORMAL,
    
    SectionType_FAST,
    SectionType_P_FAST_RL_NORM, // p(FAST),rl(norm): Fast press, normal release
    SectionType_P_NORM_RL_FAST,

    SectionType_SLOW,
    SectionType_P_SLOW_RL_NORM,
    SectionType_P_NORM_RL_SLOW,
    
    SectionType_SMK_WP, // Smack WP: smack housing while button held pressed.
    SectionType_SMK_WR,
} __attribute__((packed));
enum {
    SectionType__STANDARD_MAX = SectionType_SMK_WR,
};
