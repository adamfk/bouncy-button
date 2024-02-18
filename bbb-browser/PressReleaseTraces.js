"use strict";
class PressReleaseTraces {
    press = new LevelTraces('press test');

    release = new LevelTraces('release test');

    /** @type {Map<string, PlotlyTrace>} */
    sectionMarkers = new Map();

    // shows where streaming mode took over
    streamMarker = new PlotlyTrace();

    // shows where truncation happened
    truncationMarker = new PlotlyTrace();

    /**
     * @param {Map<string, Section>} sectionMap
     * @param {string[]} sectionColors
     */
    constructor(sectionMap, sectionColors) {
        this.release.high.setColor('rgb(240,46,46)');
        this.release.high.line.fillcolor = 'rgba(240,46,46,0.8)';
        this.release.low.setColor('#444');

        this.streamMarker.setColor('rgb(200,200,200)');
        this.streamMarker.name = 'Streaming';

        this.truncationMarker.setColor('rgb(255,105,180)');
        this.truncationMarker.name = 'Truncation';

        let i = 0;
        sectionMap.forEach((section, id) => {
            let trace = new PlotlyTrace();
            trace.setColor(sectionColors[i]);
            // trace.line.fillcolor = colors[i];
            this.sectionMarkers.set(id, trace);
            let name = section.title;
            trace.name = `Section: "${name}"`;
            trace.showlegend = false;
            i++;
            if (i >= sectionColors.length) {
                i = 0;
            }
        });
    }

    getPlotlyTraces() {
        return [...this.press.getPlotlyTraces(), ...this.release.getPlotlyTraces(), ...this.sectionMarkers.values(), this.streamMarker, this.truncationMarker];
    }
}
