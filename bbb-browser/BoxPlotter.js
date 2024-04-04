class BoxPlotter {

    /**
     * @param {string} divId
     * @param {string} name
     * @param {Test[]} tests
     */
    plotBounceDurations(divId, name, tests) {
        let pressDurations = [];
        let releaseDurations = [];
        tests.forEach(test => {
            if (test.isPress()) {
                pressDurations.push(test.getDurationNs()/1000);
            } else {
                releaseDurations.push(test.getDurationNs()/1000);
            }
        });

        let data = [
            {
                x: releaseDurations,
                type: 'box',
                name: 'Release',
                marker: {
                    color: '#EEEEEE'
                },
                boxmean: 'sd'
            },
            {
                x: pressDurations,
                type: 'box',
                name: 'Press',
                marker: {
                    color: '#a10000'
                },
                boxmean: 'sd'
            },
        ];

        let layout = this.getLayout(name);
        Plotly.newPlot(divId, data, layout, Grapher.getPlotlyDefaultOptions());
    }

    /**
     * @param {string} divId
     * @param {string} name
     * @param {Test[]} tests
     */
    plotLongestPulseDurations(divId, name, tests) {
        let pressDurations = [];
        let releaseDurations = [];
        tests.forEach(test => {
            if (test.isPress()) {
                pressDurations.push(test.longestPulseNs/1000);
            } else {
                releaseDurations.push(test.longestPulseNs/1000);
            }
        });

        let data = [
            {
                x: releaseDurations,
                type: 'box',
                name: 'Release',
                marker: {
                    color: '#EEEEEE'
                },
                boxmean: 'sd'
            },
            {
                x: pressDurations,
                type: 'box',
                name: 'Press',
                marker: {
                    color: '#a10000'
                },
                boxmean: 'sd'
            },
        ];

        let layout = this.getLayout(name);
        Plotly.newPlot(divId, data, layout, Grapher.getPlotlyDefaultOptions());
    }

    /**
     * @param {string} divId
     * @param {string} name
     * @param {Test[]} tests
     */
    plotTransitions(divId, name, tests) {
        let pressDurations = [];
        let releaseDurations = [];
        tests.forEach(test => {
            if (test.isPress()) {
                pressDurations.push(test.transitionsLoadedCount);
            } else {
                releaseDurations.push(test.transitionsLoadedCount);
            }
        });

        let data = [
            {
                x: releaseDurations,
                type: 'box',
                name: 'Release',
                marker: {
                    color: '#EEEEEE'
                },
                boxmean: 'sd'
            },
            {
                x: pressDurations,
                type: 'box',
                name: 'Press',
                marker: {
                    color: '#a10000'
                },
                boxmean: 'sd'
            },
        ];

        let layout = this.getLayout(name);
        layout.xaxis.title = 'Transition Count';
        Plotly.newPlot(divId, data, layout, Grapher.getPlotlyDefaultOptions());
    }

    /**
     * @param {string} divId
     * @param {string} name
     * @param {Test[]} tests
     */
    plotPulseWidth(divId, name, tests) {
        let pressData = [];
        let releaseData = [];
        tests.forEach(test => {
            const data = test.isPress() ? pressData : releaseData;

            test.levelRecords.forEach((levelRecord, index) => {
                if (index === 0 && !test.preTruncatedLevels)
                    return;

                if (Number.isFinite(levelRecord.nsecDuration) === false)
                    return;

                data.push(levelRecord.nsecDuration / 1000);
            });
        });

        let data = [
            {
                x: releaseData,
                type: 'box',
                name: 'Release',
                marker: {
                    color: '#EEEEEE',
                },
                boxmean: 'sd',
            },
            {
                x: pressData,
                type: 'box',
                name: 'Press',
                marker: {
                    color: '#a10000'
                },
                boxmean: 'sd'
            },
        ];

        let layout = this.getLayout(name);
        Plotly.newPlot(divId, data, layout, Grapher.getPlotlyDefaultOptions());
    }

    /**
     * @param {string} title
     */
    getLayout(title) {
        return {
            showlegend: false,
            title: title,
            yaxis: {
                // dark mode from https://jsfiddle.net/3hfq7ast/
                "gridcolor": "#283442",
                "linecolor": "#506784",
                "zerolinecolor": "#283442",
                "zerolinewidth": 2,
            },
            xaxis: {
                title: 'Duration [μs]',
                // dark mode from https://jsfiddle.net/3hfq7ast/
                "gridcolor": "#283442",
                "linecolor": "#506784",
                "zerolinecolor": "#283442",
                "zerolinewidth": 2,
                // range: [0, undefined], // has no effect
            },
            // margin: { t: 0 },
            legend: {
                orientation: 'h',
                x: 0.0,
                y: 1.02,
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
    }
}
