"use strict";
class SwVersion {
    /**
     * @param {number} major
     * @param {number} minor
     * @param {number} patch
     * @param {string?} label
     */
    constructor(major, minor, patch, label) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.label = label;
    }
}

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
        this._swVersionStr = "";

        /** @type {SwVersion?} */
        this.swVersion = null;

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

    getSwVersionString() {
        return this._swVersionStr;
    }

    /**
     * @param {string} swVersionStr
     */
    setSwVersionString(swVersionStr) {
        this._swVersionStr = swVersionStr;
        // parse sw version. <major>.<minor>.<patch>-<label>
        const parts = swVersionStr.split(".");
        const major = requireIntParse(parts[0]);
        const minor = requireIntParse(parts[1]);
        const patchLabel = parts[2].split("-");
        const patch = requireIntParse(patchLabel[0]);
        const label = patchLabel[1]; // could be undefined

        this.swVersion = new SwVersion(major, minor, patch, label);
    }
}
