"use strict";
class TestSession {
    sessionTitle = "Un-named Session";
    sessionDescription = "";

    /**
     * @param {Map<string, Section>} sections
     * @param {Test[]} tests
     */
    constructor(sections, tests) {
        /** @type {Map<string, Section>} */
        this.sections = sections;
        /** @type {Test[]} */
        this.tests = tests;
    }
}
