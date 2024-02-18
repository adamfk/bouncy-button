"use strict";
class LogEntry {
    /**
     * @param {boolean} isStream
     * @param {number} pinState
     * @param {number} risingEdges
     * @param {number} nsec
     * @param {number?} log
     * @param {number?} event
     */
    constructor(isStream, pinState, risingEdges, nsec, log, event) {
        
        /** @type {boolean} */
        this.isStream = isStream;

        if (pinState !== 0 && pinState !== 1) throw new Error("pinState must be 0 or 1");

        /** @type {0|1} */
        this.pinState = pinState;

        /** @type {number} The number of new rising edges detected between last sample and this sample */
        this.risingEdges = risingEdges;
        
        /** @type {number} */
        this.nsec = nsec;

        /** @type {number?} */
        this.logId = log;
        /** @type {number?} */
        this.eventId = event;
    }
}
