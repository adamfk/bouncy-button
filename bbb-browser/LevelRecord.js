"use strict";
class LevelRecord {
    /**
     * @param {number} pinState
     * @param {number} nsecStart
     */
    constructor(pinState, nsecStart) {
        this.pinState = pinState;
        this.nsecStart = nsecStart;
        this.nsecEnd = undefined; // to be set later
    }

    get nsecDuration() {
        return this.nsecEnd - this.nsecStart;
    }

    get usecDuration() {
        return this.nsecDuration / 1000;
    }
}
