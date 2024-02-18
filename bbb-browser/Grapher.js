class Grapher {

    //these are updated dynamically
    static startOffset = -10;
    static endOffset = 10;

    /**
     * @param {PressReleaseTraces} combinedChart
     * @param {Test[]} tests
     * @param {FocusTimeSpan} focusTimeSpan
     */
    static addWaterFallLevels(combinedChart, tests, focusTimeSpan) {
        // find max end time for all tests
        let nsecMaxEnd = 0;
        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            const levels = test.levelRecords;
            // nsecMaxEnd = Math.max(nsecMaxEnd, levels[levels.length - 1].nsecStart);
            nsecMaxEnd = Math.max(nsecMaxEnd, test.getDurationNs());
        }

        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            this.graphTest(combinedChart, test, (i + 1), nsecMaxEnd, focusTimeSpan);
        }

        return nsecMaxEnd;
    }


    /**
     * @param {PressReleaseTraces} combinedChart
     * @param {Test} test
     * @param {number} nsecMaxEnd
     * @param {number} testIndex
     * @param {FocusTimeSpan} focusTimeSpan
     */
    static graphTest(combinedChart, test, testIndex, nsecMaxEnd, focusTimeSpan) {
        const levels = test.levelRecords;
        const yBottom = testIndex - 0.5;
        const yTop = testIndex + 0.45;
        let lastX = 0;

        const chart = test.isPress() ? combinedChart.press : combinedChart.release;

        {
            let startEndExtensionRatio = 0.02;
            this.endOffset = (nsecMaxEnd / 1000) * startEndExtensionRatio;
            this.startOffset = this.endOffset * -1;
        }

        {
            let xStart = this.startOffset * 2;
            let xEnd = this.startOffset * 1.3;

            const sectionMarker = combinedChart.sectionMarkers.get(test.section.id);
            sectionMarker.x.push(xStart, xEnd, xEnd, xStart, xStart, null);
            sectionMarker.y.push(yBottom, yBottom, yTop, yTop, yBottom, null);
        }

        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];

            let levelLineAndMarkers;
            if (level.pinState == 0) {
                levelLineAndMarkers = chart.low;
            } else {
                levelLineAndMarkers = chart.high;
            }

            // x: [0,5,5,0,0, null, 
            // y: [0,0,1,1,0, null,
            let xStart = level.nsecStart / 1000;
            if (i == 0 && !test.preTruncatedLevels) {
                xStart = this.startOffset;
            }
            let xEnd = level.nsecEnd / 1000;
            if (level.nsecEnd === undefined && !test.truncatedLevels) {
                // xEnd = nsecMaxEnd / 1000 + 10;
                xEnd = xStart + this.endOffset;
            }

            if (Number.isFinite(xEnd))
                lastX = xEnd;

            let line = levelLineAndMarkers.line;

            // full borders:
            // line.x.push(xStart, xEnd, xEnd, xStart, xStart, null);
            // line.y.push(yBottom, yBottom, yTop, yTop, yBottom, null);

            if (level.pinState == 0) {
                line.x.push(xStart, xStart, xEnd, xEnd, null);
                line.y.push(yTop, yBottom, yBottom, yTop, null);
            } else {
                line.x.push(xEnd, xEnd, xStart, xStart, null);
                line.y.push(yBottom, yTop, yTop, yBottom, null);
            }

            // add markers
            const markers = levelLineAndMarkers.markers;
            markers.x.push(xStart, xEnd);
            const yMarker = level.pinState == 0 ? yBottom : yTop;
            markers.y.push(yMarker, yMarker);

            const levelText = level.pinState == 0 ? 'L' : 'H';
            let durationText = this.formatMicroseconds(level.usecDuration);

            let firstText = `@${this.formatMicroseconds(xStart)}<br>`;
            let endText = `@${this.formatMicroseconds(xEnd)}<br>`;
            const metaInfo = `Action: ${test.isPress() ? 'press' : 'release'}, test id: ${test.testId}, test section: ${test.section.title}, `;
            let text = `${levelText} for ${durationText} [${this.formatMicroseconds(xStart)}, ${this.formatMicroseconds(xEnd)}]`;

            if (i == 0 && !test.preTruncatedLevels) {
                text = `Test started ${levelText} until ${this.formatMicroseconds(level.nsecEnd / 1000)}`;
                text += `<br>${metaInfo}`;
                markers.text.push(firstText + text);
                markers.text.push(endText + text);
            } else if (level.nsecEnd === undefined && !test.truncatedLevels) {
                text = `Test ended ${levelText} at ${this.formatMicroseconds(level.nsecStart / 1000)}`;
                text += `<br>${metaInfo}`;
                markers.text.push(firstText + text);
                markers.text.push(endText + text);
            }
            else {
                text += `<br>${metaInfo}`;
                markers.text.push(firstText + text);
                markers.text.push(endText + `Was ${text}`);
            }

            // add annotations
            {
                const annotations = levelLineAndMarkers.durationMarkers;
                annotations.x.push((xEnd + xStart) / 2);
                annotations.y.push(testIndex); // center of test

                let text = this.formatMicroseconds(level.usecDuration, 4);
                if (i == 0 && !test.preTruncatedLevels) {
                    const transitionCount = test.transitionsLoadedCount;
                    if (test.truncatedLevels)
                        text = `Transitions loaded (some truncated): ${transitionCount}`;
                    else
                        text = `Transitions: ${transitionCount}`;

                    text += `<br>Test ID: ${test.testId}`;
                }

                annotations.text.push(text);
            }
            // Add extra annotations to make it easier to find the duration.
            // NOTE! Below code has been commented out because it was adding too many annotations causing a severe performance hit.
            // const extraAnnotationCount = level.usecDuration / 100 - 1;
            // for (let i = 0; i < extraAnnotationCount; i++) {
            //     annotations.x.push(xStart + (i + 1) * 100);
            //     annotations.y.push(testIndex); // center of test
            //     annotations.text.push(formatNumber(level.usecDuration, 3));
            // }
        } // for

        // add stream marker
        if (test.streamStartNs !== null) {
            combinedChart.streamMarker.x.push(test.streamStartNs / 1000, test.getDurationNs() / 1000, null);
            combinedChart.streamMarker.y.push(yBottom, yBottom, null);
        }

        if (test.preTruncatedLevels) {
            combinedChart.truncationMarker.x.push(0, focusTimeSpan.startNs / 1000, null);
            combinedChart.truncationMarker.y.push(yBottom, yTop, null);
        }

        if (test.truncatedLevels) {
            let x = lastX;
            if (x === 0) {
                // x can be zero if only a single level was selected to be graphed.
                x = focusTimeSpan.endNs / 1000;
            }

            combinedChart.truncationMarker.x.push(x, test.getDurationNs() / 1000, null);
            combinedChart.truncationMarker.y.push(yTop, yBottom, null);
        }
    }

    /**
     * 
     * @param {*} domElement 
     * @param {PressReleaseTraces} combinedChart 
     * @param {number} maxFoundNs 
     */
    static plotChart(domElement, combinedChart, maxFoundNs) {
        var layout = {
            
            xaxis: {
                title: 'Time (us)',
                range: [this.startOffset * 2 , maxFoundNs / 1000 + this.endOffset],

                // dark mode from https://jsfiddle.net/3hfq7ast/
                "gridcolor": "#283442",
                "linecolor": "#506784",
                "zerolinecolor": "#283442",
                "zerolinewidth": 2,
            },
            yaxis: {
                // title: 'Test #',
                // "title": {
                //     "standoff": 15
                // },
                visible: false,
                zeroline: false,
                showgrid: false,    // not needed
                range: [0.4, null],
                // dark mode from https://jsfiddle.net/3hfq7ast/
                "gridcolor": "#283442",
                "linecolor": "#506784",
                "zerolinecolor": "#283442",
                "zerolinewidth": 0
            },
            margin: { t: 0 },
            legend: {
                orientation: 'h',
                x: 0.0,
                y: 1.02
            },

            // dark mode from https://jsfiddle.net/3hfq7ast/
            annotationdefaults: {
                "arrowcolor": "#f2f5fa",
                "arrowhead": 0,
                "arrowwidth": 1
            },
            colorway: [
                "#636efa",
                "#EF553B",
                "#00cc96",
                "#ab63fa",
                "#FFA15A",
                "#19d3f3",
                "#FF6692",
                "#B6E880",
                "#FF97FF",
                "#FECB52"
            ],
            font: {
                "color": "#f2f5fa"
            },
            "paper_bgcolor": "rgb(17,17,17)",
            "plot_bgcolor": "rgb(17,17,17)",
            "updatemenudefaults": {
                "bgcolor": "#506784",
                "borderwidth": 0
            },

        };

        Plotly.newPlot(domElement, combinedChart.getPlotlyTraces(), layout, this.getPlotlyDefaultOptions()
        );
    }

    static getPlotlyDefaultOptions() {
        return {
            displaylogo: false,
            // responsive: true,
            modeBarButtonsToRemove: [
                'lasso2d',
                // 'select2d',   // useful for highlighting areas
            ]
        };
    }

    /**
     * 
     * @param {number|string} number
     */
    static formatMicroseconds(number, places = -1, separator = '') {
        
        if (typeof number === 'string') {
            return number;
        }

        if (number === undefined || number === null || isNaN(number)) {
            return '∞';
        }

        let units = "µs";

        if (number > 1000) {
            number /= 1000;
            units = "ms";

            if (places == -1) {
                places = 6;
            }
        }

        if (number > 1000) {
            number /= 1000;
            units = "s";

            if (places == -1) {
                places = 9;
            }
        }

        if (number < 1) {
            units = "ns";
            number *= 1000;
            places = 1;
        }

        if (places == -1) {
            places = 4;
        }

        return (+number.toFixed(places)) + separator + units; // + removes trailing zeros
    }
}
