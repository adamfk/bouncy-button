"use strict";
class PlotlyTrace {
    x = [];
    y = [];
    text = [];
    mode = "lines";
    type = "scatter";
    fill = "toself";
    // fillcolor = "rgba(200,0,0,0.7)";
    marker = {
        color: 'rgb(192,0,0)',
    };
    line = {
        // color: 'rgb(192,0,0, 0)',
        // width: 1.5,     //https://plotly.com/javascript/line-charts/#line-and-scatter-styling
        width: 1,
        // width: 2,
    };
    name = undefined;

    setColor(color) {
        this.marker.color = color;
        // this.line.color = color; // not needed
    }
}
