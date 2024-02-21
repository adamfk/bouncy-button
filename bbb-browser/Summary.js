class SummaryEntry {
    /** @type {number[]} */
    data = [];
    /** @type {number} */
    max = 0;
    /** @type {number} */
    median = 0;

    calculate() {
        this.data.sort((a, b) => a - b);
        this.max = jStat.max(this.data);
        this.median = jStat.median(this.data);
    }
}


class SectionSummary {
    id = "";

    /** @type {number} */
    count = 0;
    /**
     * @type {number[]}
     */
    pressBounceNsData = [];
    /**
     * @type {number[]}
     */
    releaseBounceNsData = [];
}


class SummaryStatLine {
    title = "";
    combined = new SummaryEntry();
    press = new SummaryEntry();
    release = new SummaryEntry();

    calculate() {
        this.combined.calculate();
        this.press.calculate();
        this.release.calculate();
    }
}


class Summary {
    /**
     * @type {Map<string, SectionSummary>}
     */
    sectionSummaries = new Map();
    bounceDurationNs = new SummaryStatLine();
    longestPulseNs = new SummaryStatLine();
    transitionsCount = new SummaryStatLine();

    /**
     * @param {TestSession} session
     */
    constructor(session){
        this.session = session;
    }

    /**
     * @param {SummaryStatLine} statLine
     * @param {number} value
     * @param {boolean} isPress
     */
    #add(statLine, value, isPress) {
        statLine.combined.data.push(value);
        if (isPress) {
            statLine.press.data.push(value);
        } else {
            statLine.release.data.push(value);
        }
    }

    /**
     * @param {Test[]} selectedTests
     */
    create(selectedTests) {
        this.session.sections.forEach(element => {
            let s = new SectionSummary();
            s.id = element.id;
            this.sectionSummaries.set(s.id, s);
        });

        for (const test of selectedTests) {
            const sectionSummary = this.sectionSummaries.get(test.section.id);
            if (test.isPress())
                sectionSummary.pressBounceNsData.push(test.getDurationNs());
            else
                sectionSummary.releaseBounceNsData.push(test.getDurationNs());

            this.#add(this.bounceDurationNs, test.getDurationNs(), test.isPress());
            this.#add(this.longestPulseNs, test.longestPulseNs, test.isPress());
            this.#add(this.transitionsCount, test.transitionsLoadedCount, test.isPress());
        }

        this.bounceDurationNs.calculate();
        this.longestPulseNs.calculate();
        this.transitionsCount.calculate();

        console.log(this);
    }
}


class SummaryTableMaker {
    html = "";
    /** @type {Intl.NumberFormat} */
    formatter;

    /**
     * @param {TestSession} session
     */
    constructor(session, sectionColorMap){
        this.session = session;
        this.sectionColorMap = sectionColorMap;

        const myLocale = Intl.DateTimeFormat().resolvedOptions().locale;
        this.formatter = new Intl.NumberFormat(myLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: true});
    }

    /**
     * @param {number} nsec
     */
    formatNsToUs(nsec) {
        let usec = nsec / 1000;
        let str = this.formatter.format(usec);
        return str;
    }

    /**
     * @param {any} value
     */
    dummyFormat(value) {
        return value;
    }

    /**
     * @param {string} title
     * @param {SummaryStatLine} summaryStatLine
     * @param {boolean} asTime
     */
    addTable1Line(title, summaryStatLine, asTime) {
        let formatter;
        if (asTime) {
            formatter = (arg) => this.formatNsToUs(arg);
        } else {
            formatter = (arg) => this.dummyFormat(arg);
        }

        this.html += "<tr>\n";
        this.html += `<td class='left'>${title}</td>\n`;
        this.html += `<td class='duration'>${formatter(summaryStatLine.combined.max)}</td>`;
        this.html += `<td class='duration'>${formatter(summaryStatLine.combined.median)}</td>`;
        this.html += `<td class='duration press'>${formatter(summaryStatLine.press.max)}</td>`;
        this.html += `<td class='duration release'>${formatter(summaryStatLine.release.max)}</td>`;
        this.html += `<td class='duration press'>${formatter(summaryStatLine.press.median)}</td>`;
        this.html += `<td class='duration release'>${formatter(summaryStatLine.release.median)}</td>`;
        this.html += "</tr>\n";
    }

    /**
     * @param {Summary} summary
     */
    addTable1(summary) {
        this.html = "<table>";
        this.html += "<tr>\n" +
            "<th class='left'>Category</th>\n" +
            "<th class='duration'>Max</th>\n" +
            "<th class='duration'>Median</th>\n" +
            "<th title='Press Max' class='duration press'>PR Max</th>\n" +
            "<th title='Release Max' class='duration release'>RL Max</th>\n" +
            "<th title='Press Median' class='duration press'>PR Med</th>\n" +
            "<th title='Release Median' class='duration release'>RL Med</th>\n" +
            "</tr>\n";

        this.addTable1Line("Bounce Duration [us]", summary.bounceDurationNs, true);
        this.addTable1Line("Longest Pulse [us]", summary.longestPulseNs, true);
        this.addTable1Line("Transitions", summary.transitionsCount, false);

        this.html += "</table>";
    }

        /**
     * @param {Summary} summary
     */
        addTable2(summary) {
            {
                this.html += "<table id='table-summary-2'>";
                this.html += "<tr>\n" +
                    "<th class='left'>Section:</th>\n";

                summary.sectionSummaries.forEach(sectionSummary => {
                    let title = this.session.sections.get(sectionSummary.id).title;
                    const sectionStyle = this.sectionColorMap.get(sectionSummary.id);
                    this.html += `<th class='duration'><span style="padding:3px 6px; border-radius: 5px; background-color:${sectionStyle.bgColor}; color:${sectionStyle.fontColor};">${title}</span></th>\n`;
                });
                this.html += "</tr>\n";
            }

            {
                this.html += "<tr>\n";
                this.html += "<td class='left'>Test Count</td>\n";
                summary.sectionSummaries.forEach(sectionSummary => {
                    let value = sectionSummary.pressBounceNsData.length + sectionSummary.releaseBounceNsData.length;
                    this.html += `<td class='duration'>${value}</td>\n`;
                });
                this.html += "</tr>\n";
            }

            {
                this.html += "<tr>\n";
                this.html += "<td title='Press max bounce duration' class='left'>PR Max Bounce [us]</td>\n";
                summary.sectionSummaries.forEach(sectionSummary => {
                    let value = jStat.max(sectionSummary.pressBounceNsData);
                    this.html += `<td class='duration'>${this.formatNsToUs(value)}</td>\n`;
                });
                this.html += "</tr>\n";
            }

            {
                this.html += "<tr>\n";
                this.html += "<td title='Release max bounce duration' class='left'>RL Max Bounce [us]</td>\n";
                summary.sectionSummaries.forEach(sectionSummary => {
                    let value = jStat.max(sectionSummary.releaseBounceNsData);
                    this.html += `<td class='duration'>${this.formatNsToUs(value)}</td>\n`;
                });
                this.html += "</tr>\n";
            }

            this.html += "</table>";
        }
}
