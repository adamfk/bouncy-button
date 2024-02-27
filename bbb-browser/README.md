# Bouncy-Button-Benchmark-Browser

## Use Online
https://adamfk.github.io/bouncy-button/bbb-browser/

<br>

## Use Offline
Download this directory and open the `index.html` file in your web browser. That's it!

<br>

## Load Some Data
It comes preloaded with some example data so you can try it out right away.

![load-data](https://github.com/adamfk/bouncy-button/assets/274012/c0b850e6-874c-4bc6-8c7b-cba1cef32986)

<br>

## Pan And Zoom
There are controls in the top right of every graph that allow you to pan and zoom.

![zoom](https://github.com/adamfk/bouncy-button/assets/274012/c35d3c0d-3198-4199-ac08-76620c849f69)

<br>

## Tight Export Mode
You'll want to use this mode when sharing a summary of your data. It's also useful to press F11 to view the browser window in full screen first.

NOTE! Tight Export mode hides the statistics graphs and table data further down on the page.

![tight](https://github.com/adamfk/bouncy-button/assets/274012/12887477-8ab0-42ba-add3-85241d675f9f)

<br>

## Section Types
You can choose which section types to include in the graph/analysis.

![section-types](https://github.com/adamfk/bouncy-button/assets/274012/4d720844-e662-4e58-8e0f-a9d51b0ca3fb)

Sometimes a section will be crossed out. That's because it was marked invalid in the test data. Usually happens with Slow sections as they often just end up being multiple presses and not bounces.

<br>

## Event Types
Sometimes you only want to look at either presses or releases.

![event-types](https://github.com/adamfk/bouncy-button/assets/274012/96560f58-1c39-459e-8b18-596acef9c631)

<br>

## Sort And Group
Very useful to sort by duration.

![sort-and-group](https://github.com/adamfk/bouncy-button/assets/274012/aec34d85-73df-4aa5-8289-30e05b3dcf62)

<br>

## Time Focus
Mostly useful when loading huge data sets (like when you record a 8 MHz signal for self calibration).

![time-focus](https://github.com/adamfk/bouncy-button/assets/274012/104e4fbc-7a53-40dc-abc4-46c4bc4999c5)

<br>

## Test ID Filter
Allows you to include or exclude certain tests. Very useful when you want to exclude extreme tests or glitches. In the case of a glitch, you could also just delete that test from text file.

Examples:
- `1-10` - Include tests 1 through 10. Exclude all others.
- `1-10, 20-30` - Include tests 1 through 10 and 20 through 30. Exclude all others.
- `e 1` - Exclude test 1. Include all others.
- `e 1, 2, 3` - Exclude tests 1, 2, and 3. Include all others.
- `e 1-10` - Exclude tests 1 through 10. Include all others.
- `1-100, e 5, 10-20` - Include tests 1 through 100. Exclude tests 5, 10 through 20.

You can also `e`, `ex`, or `exclude` to exclude tests, and `i`, `in`, or `include` to include tests. The default mode is `include`.

![exclude](https://github.com/adamfk/bouncy-button/assets/274012/f8357cde-435b-4d52-a419-10de12a65bf6)

<br>

## Stats Graphs
Only visible when `Tight Export` mode is not enabled.

![stats](https://github.com/adamfk/bouncy-button/assets/274012/d9d63261-81fd-4dd0-81be-b868e5260321)

<br>

## Table Data
Shows some stats for each individual test. It also allows you to copy raw signal levels to your clipboard for custom analysis or graphing in excel or Plotly.

That's how I made these graphs comparing Arduino data to an oscilloscope's data. Note that the Arduino just records high or low. The voltages are shifted away from 0 and 5 volts to help prevent clashing with oscilloscope traces.
- Test 132 https://plotly.com/~afk/21/
- Test 139 https://plotly.com/~afk/23/
- Test 131 https://plotly.com/~afk/27/
- Test 125 https://plotly.com/~afk/25/
- Data from https://github.com/adamfk/bouncy-button-data/issues/2

![table-data](https://github.com/adamfk/bouncy-button/assets/274012/a0c02972-72b7-43b7-8cb4-38bc97420540)


