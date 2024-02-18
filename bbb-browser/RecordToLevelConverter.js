"use strict";

class ChangeRegion {
    /**
     * @param {number} nsecStart
     * @param {number?} nsecEnd
     */
    constructor(nsecStart, nsecEnd) {
        this.nsecStart = nsecStart;
        this.nsecEnd = nsecEnd;
    }

    get nsecDuration() {
        return this.nsecEnd - this.nsecStart;
    }
}

class FocusTimeSpan {
    /**
     * @param {number} startNs
     * @param {number} endNs
     */
    constructor(startNs, endNs) {
        this.startNs = startNs;
        this.endNs = endNs;
    }
}

class RecordToLevelConverter {
    static NSEC_PER_INSTRUCTION = 62.5; // 16MHz AVR
    static NSEC_TO_SAMPLE = this.NSEC_PER_INSTRUCTION * 20; // approximate timing
    static NSEC_MIN_PULSE_WIDTH = 20; // from datasheet
    static NSEC_TO_LOG = this.NSEC_PER_INSTRUCTION * 40; // approximate timing

    static NSEC_TO_SAMPLE_STREAMING = 1e6; // 1ms

    static MAX_LEVELS = 2000;

    static determineChangeRegionForStreaming(nsecLogA, nsecLogB) {
        let nsecEnd = nsecLogB;
        let nsecStart = nsecLogB - this.NSEC_TO_SAMPLE_STREAMING;
        return new ChangeRegion(nsecStart, nsecEnd);
    }

    // See google doc for more details
    /**
     * @param {boolean} isStreamA
     * @param {boolean} isStreamB
     * @param {number} nsecLogA
     * @param {number} nsecLogB
     */
    static determineChangeRegion(isStreamA, isStreamB, nsecLogA, nsecLogB) {
        const nsecBetweenEventLogs = nsecLogB - nsecLogA;
        const nextEventIsBackToBackLog = nsecBetweenEventLogs <= this.NSEC_TO_LOG + this.NSEC_TO_SAMPLE / 2;
        let nsecStart = undefined;
        let nsecEnd = nsecLogB;

        if (isStreamB) {
            const transitioningToStreaming = !isStreamA;
            if (transitioningToStreaming) {
                // if we transitioned to streaming very soon after the last change event, use that as the start time.
                if (nsecBetweenEventLogs < this.NSEC_TO_SAMPLE_STREAMING + this.NSEC_TO_LOG * 10) {
                    nsecStart = nsecLogA;
                } else {
                    // The last record on the arduino would have been a timeout record, but we don't currently have access to that.
                    // The arduino records it, but doesn't print it. So we just back up by the time to sample to get a bit closer.
                    nsecStart = nsecLogB - this.NSEC_TO_SAMPLE_STREAMING - this.NSEC_TO_SAMPLE;
                }
            } else {
                nsecStart = nsecLogB - this.NSEC_TO_SAMPLE_STREAMING;
            }
            
            return new ChangeRegion(nsecStart, nsecEnd);
        }

        const wasFirstLog = nsecLogA == 0;

        if (wasFirstLog) {
            // first event was logged. change could have happened before first sample.
            nsecStart = nsecLogB - this.NSEC_TO_SAMPLE;
        } else if (nextEventIsBackToBackLog) {
            // two events were logged as fast as possible (back to back) about 40 instructions apart.
            // change could have happened immediately after first sample.
            nsecStart = nsecLogA;
        }
        else {
            // two events were logged with a delay between them.
            // change could have happened between last non-logging sample and logging B.
            nsecStart = nsecLogB - this.NSEC_TO_SAMPLE;
        }

        return new ChangeRegion(nsecStart, nsecEnd);
    }

    /**
     * See google doc for more details
     * @param {Test} test
     * @param {FocusTimeSpan} [focusTimeSpan]
     */
    static convertEventsToLevels(test, focusTimeSpan) {
        const events = test.events;
        const levels = [];
        let lastCheckedEventIndex = 0;

        test.preTruncatedLevels = false;
        test.truncatedLevels = false;

        if (focusTimeSpan.startNs > 0) {
            test.preTruncatedLevels = true;
        }

        if (focusTimeSpan.endNs < test.getDurationNs()) {
            test.truncatedLevels = true;
        }

        for (let i = 0; i < events.length - 1; i++) {
            const event = events[i];
            const nextEvent = events[i + 1];

            if (nextEvent.nsec < focusTimeSpan.startNs)
                continue;

            if (event.nsec > focusTimeSpan.endNs)
                break;

            if (levels.length > this.MAX_LEVELS) {
                test.truncatedLevels = true;
                break;
            }

            let previousLevel = levels[levels.length - 1];
            if (previousLevel !== undefined && previousLevel.pinState == event.pinState) {
                
            }
            else {
                let thisLevel = new LevelRecord(event.pinState, event.nsec);
                levels.push(thisLevel);
            }

            lastCheckedEventIndex = i;

            let changeRegion = this.determineChangeRegion(event.isStream, nextEvent.isStream, event.nsec, nextEvent.nsec);

            // handle different cases
            // L->L
            if (event.pinState == 0 && nextEvent.pinState == 0) {
                if (nextEvent.risingEdges == 0) {
                    throw new Error('expected rising edge as L->L is not an event without it');
                }
                // low to low with rising edge(s) in between
                let changeSectionCount = nextEvent.risingEdges * 2;
                let changeSectionDuration = changeRegion.nsecDuration / changeSectionCount;
                this.logToggles(focusTimeSpan, levels, changeRegion.nsecStart, event.pinState, changeSectionDuration, changeSectionCount - 1); // -1 because we already recorded the first level
            }
            // L->H
            else if (event.pinState == 0 && nextEvent.pinState == 1) {
                if (nextEvent.risingEdges < 1) {
                    throw new Error('expected rising edge count >= 1 for L->H');
                }
                let changeSectionCount = Math.max(2, nextEvent.risingEdges * 2 - 1); // minimum of 2 sections. -1 because next log is a high level
                let changeSectionDuration = changeRegion.nsecDuration / changeSectionCount;
                this.logToggles(focusTimeSpan, levels, changeRegion.nsecStart, event.pinState, changeSectionDuration, changeSectionCount - 1); // -1 because we already recorded the first low level
            }
            // H->H
            else if (event.pinState == 1 && nextEvent.pinState == 1) {
                if (nextEvent.risingEdges == 0) {
                    throw new Error('expected rising edge as H->H is not an event without it');
                }
                let changeSectionCount = nextEvent.risingEdges * 2;
                let changeSectionDuration = changeRegion.nsecDuration / changeSectionCount;
                this.logToggles(focusTimeSpan, levels, changeRegion.nsecStart, event.pinState, changeSectionDuration, changeSectionCount - 1); // -1 because we already recorded the first level
            }
            // H->L
            else if (event.pinState == 1 && nextEvent.pinState == 0) {
                // Math.max() handles the case where there is no rising edge
                let changeSectionCount = Math.max(2, nextEvent.risingEdges * 2 + 1); // +1 for starting high level. minimum of 2 sections. Handles the case where there is no rising edge.
                let changeSectionDuration = changeRegion.nsecDuration / changeSectionCount;
                this.logToggles(focusTimeSpan, levels, changeRegion.nsecStart, event.pinState, changeSectionDuration, changeSectionCount - 1); // -1 because we already recorded the first high level
            }
            else {
                throw new Error('unknown event pair');
            }
        }

        if (!test.truncatedLevels) {
            // Add last level if needed. Sometimes it has already been logged as part of toggles.
            const lastEvent = events[events.length - 1];
            if (lastEvent.pinState != levels[levels.length - 1].pinState) {
                levels.push(new LevelRecord(lastEvent.pinState, lastEvent.nsec));
            }
        }

        // now loop over levels and set nsecEnd
        for (let i = 0; i < levels.length - 1; i++) {
            levels[i].nsecEnd = levels[i + 1].nsecStart;
        }

        // trim to focusTimeSpan
        {
            if (focusTimeSpan.startNs > 0) {
                // remove everything before focusTimeSpan
                let startTrim = 0;
                while (startTrim < levels.length && levels[startTrim].nsecEnd <= focusTimeSpan.startNs) {
                    startTrim++;
                }
                if (startTrim > 0)
                {
                    levels.splice(0, startTrim);
                }
            }

            if (levels.length > 0 && Number.isFinite(focusTimeSpan.endNs)) {
                // remove everything after focusTimeSpan
                let endTrim = levels.length - 1;
                while (endTrim > 0 && levels[endTrim].nsecStart >= focusTimeSpan.endNs) {
                    endTrim--;
                }

                levels.splice(endTrim + 1, levels.length - endTrim - 1);
            }
        }

        test.transitionsLoadedCount = levels.length - 1;
        test.levelRecords = levels;
    }

    /**
     * @param {FocusTimeSpan} focusTimeSpan
     * @param {LevelRecord[]} levelsArray
     * @param {number} nsecStart
     * @param {number} stateStart
     * @param {number} levelDuration
     * @param {number} count
     */
    static logToggles(focusTimeSpan, levelsArray, nsecStart, stateStart, levelDuration, count) {
        let nsec = nsecStart;
        let state = stateStart;
        for (let i = 0; i < count; i++) {
            nsec += levelDuration;
            state = 1 - state;
            if (nsec < focusTimeSpan.startNs)
                continue;
            if (nsec > focusTimeSpan.endNs)
                return;
            if (levelsArray.length > this.MAX_LEVELS)
                return;

            levelsArray.push(new LevelRecord(state, nsec));
        }
    }
}