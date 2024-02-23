"use strict";
class TextToRecordParser {

    /**
     * 
     * @param {string} testInner
     * @returns {LogEntry[] | null}
     */
    static parseBufferedEvents(testInner) {
        const eventsRegex = /<buffered_events>([\s\S]*?)<\/buffered_events>/g;
        const eventsInnerMatch = eventsRegex.exec(testInner);
        if (eventsInnerMatch === null) {
            return []; // can be null when test is cancelled due to user input
        }
        const eventsInner = eventsInnerMatch[1];

        const entryRegex = /^\s*pin: (\d+), rising_edges: (\d+), nsec: (\d+), (?:nsec_diff: \d+, )?log: (\d+), event: (\d+)\s*$/gm;
        const matches = eventsInner.matchAll(entryRegex);

        const events = [];

        for (const match of matches) {
            const [, pin, risingEdges, nsec, log, event] = match.map(Number);
            const isStream = false;
            events.push(new LogEntry(isStream, pin, risingEdges, nsec, log, event));
        }

        return events;
    }

    /**
     * @param {Test} test
     * @param {string} testInner 
     */
    static parseStreamEvents(test, testInner) {
        const events = test.events;
        const eventsRegex = /<stream>([\s\S]*?)<\/stream>/g;
        const outerMatch = eventsRegex.exec(testInner);
        if (outerMatch === null) {
            return;
        }
        const eventsInner = outerMatch[1].trim();

        if (eventsInner.length === 0) {
            return;
        }

        const entryRegex = /^\s*([0-9a-f]+)(L|H)([0-9a-f]+)\s*$/gm;
        const matches = eventsInner.matchAll(entryRegex);

        let startingNs = test.streamStartNs;
        if (startingNs == null) {
            startingNs = this.handleMissingStreamAtNs(test);
            test.streamStartNs = startingNs;
        }

        let hasMatch = false;
        for (const match of matches) {
            hasMatch = true;
            const [, msCountHex, pinChar, risingEdgesHex] = match;
            const msCount = parseInt(msCountHex, 16);
            const pin = pinChar === 'L' ? 0 : 1;
            const risingEdges = parseInt(risingEdgesHex, 16);
            const isStream = true;
            const nsec = msCount * 1000000 + startingNs;
            events.push(new LogEntry(isStream, pin, risingEdges, nsec, undefined, undefined));
        }

        if (!hasMatch) {
            throw new Error('No matches found in stream events');
        }
    }

    /**
     * 
     * @param {Test} test
     * @param {string} input 
     */
    static parseInfo(test, input) {
        // test.fcpu = /F_CPU\s*:\s*(\d+)/i.exec(input)[1];
        // test.sectionId = /section type\s*:\s*"(.+)"/i.exec(input)[1];
        test.testId = parseInt(/test id\s*:\s*(\d+)/i.exec(input)[1]);

        // parse `logs used: 13/350`
        const logsUsedMatch = /logs used\s*:\s*(\d+)\/(\d+)/i.exec(input);
        test.logsUsed = parseInt(logsUsedMatch[1]);
        test.logsTotal = parseInt(logsUsedMatch[2]);

        // parse software version as string `sw version: 0.2.3`
        const swVersionMatch = /sw version\s*:\s*(.+)/i.exec(input);
        let swVersionStr = swVersionMatch[1].trim();
        swVersionStr = DOMPurify.sanitize(swVersionStr);
        test.setSwVersionString(swVersionStr);

        // parse stream start time
        const streamStartMatch = /stream_at_ns\s*:\s*(\d+)/i.exec(input);
        if (streamStartMatch != null) {
            test.streamStartNs = parseInt(streamStartMatch[1]);
        }
    }

    /**
     * @param {string} input
     */
    static parseSectionStart(input) {
        // input is of this form:    
        // <section_start>
        //   <id>Fast22</id>
        //   <description>
        //     With some description here
        //   </description>
        //   <initially_disabled/>
        //   <invalid/>
        // </section_start>
        const idMatch = /<id>\s*([\s\S]*?)\s*<\/id>/g.exec(input);
        const descriptionMatch = /<description>\s*([\s\S]*?)\s*<\/description>/g.exec(input);
        const initiallyDisabledMatch = /<initially_disabled\/>/g.exec(input);
        const invalidMatch = /<invalid\/>/g.exec(input);

        let id = null;
        if (idMatch == null) {
            return;
        }
        id = idMatch[1];

        let description = null;
        if (descriptionMatch != null) {
            description = descriptionMatch[1];
        }

        id = DOMPurify.sanitize(id);
        description = DOMPurify.sanitize(description);

        let section = new Section(id, description);

        if (initiallyDisabledMatch != null) {
            section.initiallyDisabled = true;
        }

        if (invalidMatch != null) {
            section.invalid = true;
            section.initiallyDisabled = true;
        }

        return section;
    }

    /**
     * @param {Test} test
     */
    static fixTiming(test) {
        if (test.getSwVersionString() !== '0.2.3' && test.getSwVersionString() !== '0.2.4')
            return;

        // Version 0.2.3/4 reported timer counts as 62ns instead of 62.5ns.
        // This caused us to be off by almost 1%.
        test.events.forEach(evt => {
            evt.nsec *= 62.5 / 62;
        });
    }

    /**
     * We believe this was properly fixed in 0.3.x.
     * @param {Test} test
     */
    static handleMissingStreamAtNs(test) {
        console.warn('handleMissingStreamAtNs()');

        // We believe we fixed this in version 0.3.x
        if (test.swVersion.major == 0 && test.swVersion.minor >= 3)
            g_errorLogger.logError('handleMissingStreamAtNs should have been fixed already in 0.3.x and later.');

        // determine how many events in buffer were timeouts
        let trailingTimeouts = test.logsTotal - test.logsUsed;
        if (trailingTimeouts < 0) {
            throw new Error('trailingTimeouts < 0');
        }

        const streamStartingDelayUsec = 2; // about 2 microsecond delay between the last buffered event and starting streaming ms clock. This is a guess for now.
        const msPerTimeout = 4.096;
        const NS_PER_MS = 1000000;
        const maxHighSpeedRecordingNs = msPerTimeout * 255 * NS_PER_MS; // this isn't true if we are logging super fast and missing rollover events, but it's fine for this workaround. It was fixed properly in 0.2.4.

        let startingNs = test.events[test.events.length - 1].nsec + streamStartingDelayUsec * 1000;
        let msToAddToStreamingStart = msPerTimeout * trailingTimeouts;

        startingNs += msToAddToStreamingStart * NS_PER_MS;

        if (startingNs > maxHighSpeedRecordingNs) {
            startingNs = maxHighSpeedRecordingNs;
        }

        return startingNs;
    }

    /**
     * 
     * @param {string} input 
     * @returns {TestSession}
     */
    static parse(input) {
        const testsRegex = /<session_description>(?<sessionDescription>[\s\S]*?)<\/session_description>|<session_title>(?<sessionTitle>[\s\S]*?)<\/session_title>|<test>(?<testInner>[\s\S]*?)<\/test>|<(?<deleteLast>delete_last_test)\/>|<(?<sessionStart>test_session_start)\/>|<section_start>(?<sectionTypeStart>[\s\S]*?)<\/section_start>/g;
        const matches = input.matchAll(testsRegex);

        /** @type {TestSession} */
        let objResult;
        /** @type {Map<string, Section>} */
        let sectionMap;
        /** @type {Section} */
        let section;
        /** @type {Test[]} */
        let tests;

        function reset() {
            tests = [];
            sectionMap = new Map();
            section = new Section('_n', 'Normal: default button presses. p(norm),rl(norm)');
            sectionMap.set(section.id, section);
            objResult = new TestSession(sectionMap, tests);
        }

        reset();

        for (const match of matches) {
            const {sessionDescription, sessionTitle, testInner, deleteLast, sessionStart, sectionTypeStart} = match.groups;
            if (sessionStart !== undefined) {
                reset();
            } else if (deleteLast !== undefined) {
                tests.pop();
            } else if (sectionTypeStart !== undefined) {
                section = this.parseSectionStart(sectionTypeStart);
                sectionMap.set(section.id, section);
            } else if (sessionTitle !== undefined) {
                objResult.sessionTitle = sessionTitle.trim();
            } else if (sessionDescription !== undefined) {
                objResult.sessionDescription = sessionDescription.trim();
            } else {
                const events = this.parseBufferedEvents(testInner);
                if (events.length == 0) {
                    continue;
                }
                const test = new Test('test', events);
                this.parseInfo(test, testInner);
                this.fixTiming(test);
                this.parseStreamEvents(test, testInner);
                test.section = section;
                tests.push(test);
            }
        }

        // sanitize user input
        objResult.sessionTitle = DOMPurify.sanitize(objResult.sessionTitle);
        objResult.sessionDescription = DOMPurify.sanitize(objResult.sessionDescription);

        return objResult;
    }
}
