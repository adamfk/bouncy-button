class DataTableMaker {
    html = "";
    /** @type {Intl.NumberFormat} */
    formatter;

    /**
     * @param {Map<string, SectionStyle>} sectionColorMap
     */
    constructor(sectionColorMap) {
        const myLocale = Intl.DateTimeFormat().resolvedOptions().locale;
        this.formatter = new Intl.NumberFormat(myLocale, { minimumFractionDigits: 4, maximumFractionDigits: 4, useGrouping: true});

        this.sectionColorMap = sectionColorMap;
        this.html = "<table>";
        this.html += "<tr>\n" +
            "<th>Section Id</th>\n" +
            "<th>Test Id</th>\n" +
            "<th>Type</th>\n" +
            "<th class='duration'>Bounce Duration [µs]</th>\n" +
            "<th title='Transitions count'>Transitions</th>\n" +
            "<th class='duration' title='Longest uninterrupted pulse for this test'  >Longest Pulse [µs]</th>\n" +
            "<th class='duration' title='Sum of high signal pulse durations'  >High Pulse Sum [µs]</th>\n" +
            "<th class='duration' title='Sum of low signal pulse durations'  >Low Pulse Sum [µs]</th>\n" +
            "<th>Duty</th>\n" +
            "<th>Actions</th>\n" +
            "</tr>\n";
    }

    finalize() {
        this.html += "</table>";
        return this.html;
    }

    formatNs(nsec) {
        // return Grapher.formatMicroseconds(nsec / 1000, 2, " ");

        let usec = nsec / 1000;
        // let str = (usec.toFixed(4)); // keep trailing zeros

        let str = this.formatter.format(usec);
        return str;
    }

    /**
     * @param {Test} test
     */
    addTest(test) {

        //find the longest pulse
        let longestPulseNs = 0;
        let highSumNs = 0;
        let lowSumNs = 0;
        test.levelRecords.forEach((levelRecord, index) => {
            if (index === 0 && !test.preTruncatedLevels)
                return;

            if (Number.isFinite(levelRecord.nsecDuration) === false)
                return;

            if (levelRecord.nsecDuration > longestPulseNs) {
                longestPulseNs = levelRecord.nsecDuration;
            }
            if (levelRecord.pinState === 1) {
                highSumNs += levelRecord.nsecDuration;
            } else {
                lowSumNs += levelRecord.nsecDuration;
            }
        });

        test.longestPulseNs = longestPulseNs;
        const sectionStyle = this.sectionColorMap.get(test.section.id);

        this.html += "<tr>";
        this.html += `<td><span style="padding:3px 6px; border-radius: 5px; background-color:${sectionStyle.bgColor}; color:${sectionStyle.fontColor};">${test.section.title}</span></td>`;
        this.html += `<td>${test.testId}</td>`;
        this.html += `<td>${test.isPress() ? "Press" : "Release"}</td>`;
        this.html += `<td class='duration'>${this.formatNs(test.getDurationNs())}</td>`;
        this.html += `<td>${test.transitionsLoadedCount}</td>`;
        this.html += `<td class='duration'>${this.formatNs(longestPulseNs)}</td>`;
        this.html += `<td class='duration'>${this.formatNs(highSumNs)}</td>`;
        this.html += `<td class='duration'>${this.formatNs(lowSumNs)}</td>`;
        let duty = (highSumNs / (highSumNs + lowSumNs) * 100).toFixed(2);
        if (duty === "NaN") {
            duty = "-";
        } else {
            duty += "%";
        }
        this.html += `<td>${duty}</td>`;
        this.html += `<td>`
                    + `<span title="click to copy time/pin state/duration to clipboard" style="cursor: pointer;" onclick="copyTestLevelsToClipboard(${test.testId})">📋</span>`
                    + `<span title="click to copy graphable signal levels to clipboard" style="cursor: pointer;" onclick="copyGraphTestLevelsToClipboard(${test.testId})">📈</span>`
                    + `</td>`;
        this.html += "</tr>\n";
    }
}
