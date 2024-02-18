"use strict";
class LevelTraces {
    high = new TraceLineAndMarkers();
    low = new TraceLineAndMarkers();

    constructor(typeText) {
        this.high.setColor('rgb(192,0,0)');
        // this.high.setColor('rgb(200,0,0)');
        this.high.line.fillcolor = 'rgba(200,0,0,0.6)';
        this.low.setColor('#333');

        let text;
        text = `High (${typeText})`;
        this.high.line.name = text;
        this.high.markers.name = text;
        this.high.durationMarkers.name = text;

        text = `Low (${typeText})`;
        this.low.line.name = text;
        this.low.markers.name = text;
        this.low.durationMarkers.name = text;
    }

    getPlotlyTraces() {
        return [this.high.line, this.high.markers, this.low.line, this.low.markers, this.high.durationMarkers, this.low.durationMarkers];
    }
}
