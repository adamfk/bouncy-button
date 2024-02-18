"use strict";
class TraceLineAndMarkers {
    line = new PlotlyTrace();
    markers = new PlotlyTrace();
    durationMarkers = new PlotlyTrace();

    constructor() {
        this.line.hoverinfo = 'skip';

        this.markers.opacity = 0;
        this.markers.mode = 'markers';
        this.markers.fill = null;
        this.markers.hovertemplate = "%{text}"; // https://plotly.com/javascript/hover-text-and-formatting/
        this.markers.showlegend = false;

        this.durationMarkers.mode = 'markers';
        this.durationMarkers.fill = null;
        this.durationMarkers.marker.opacity = 0;
        this.durationMarkers.hovertemplate = "%{text}"; // https://plotly.com/javascript/hover-text-and-formatting/

        // this.annotations.visible = "legendonly";
        this.durationMarkers.textposition = "bottom";
        this.durationMarkers.showlegend = false;
    }

    setColor(color) {
        this.line.setColor(color);
        this.markers.setColor(color);
        this.durationMarkers.setColor(color);
    }
}
