"use strict";
class Test {
    /**
     *
     * @param {string} name
     * @param {LogEntry[]} events
     */
    constructor(name, events) {
        this.name = name;   // TODOLOW remove this
        this.events = events;
        /** @type {LevelRecord[]} */
        this.levelRecords = [];
        this.fcpu = "";
        /** @type {Section} */
        this.section = null;
        /** @type {string} */
        this.parsedSectionIdIgnored = null;  // TODOLOW remove this
        this.testId = -1;
        /** @type {number?} */
        this.streamStartNs = null;

        this.logsUsed = 0;
        this.logsTotal = 0;
        this.swVersion = "";

        /** @type {number} */
        this.transitionsLoadedCount = 0;

        /** @type {number} */
        this.longestPulseNs = 0;

        // we sometimes limit focus to a specific time span.
        // required for graphing 8 MHz self calibration tests as they have a HUGE number of events.
        // we sometimes limit to max number of levels as well.
        this.preTruncatedLevels = false;
        this.truncatedLevels = false;
    }

    // if test started high (released), it means this test is a press test
    isPress() {
        return this.events[0].pinState == 1;
    }

    isRelease() {
        return !this.isPress();
    }

    getDurationNs() {
        return this.events[this.events.length - 1].nsec;
    }
}
