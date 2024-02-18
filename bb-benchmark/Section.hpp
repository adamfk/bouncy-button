#pragma once
#include "SectionType.h"
#include <stdint.h>
#include <stdbool.h>
#include <assert.h>
#include <stddef.h>

class Section {
public:
    uint16_t section_test_count = 1;
    char custom_id[9];
    SectionType section_type = SectionType_CUSTOM;
} __attribute__((packed));

static_assert(SectionType_CUSTOM == 0, "Must be zero to provide null termination for custom_id");
static_assert(offsetof(Section, section_type) == offsetof(Section, custom_id) + sizeof(Section::custom_id), "section_type must come directly after custom_id to provide null termination for custom_id");
