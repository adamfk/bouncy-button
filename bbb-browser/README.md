# Bouncy-Button-Benchmark-Browser

## Download
Download this directory and open the `index.html` file in your web browser. That's it!

## Load Some Data
It comes preloaded with some example data so you can try it out right away.

![load-data](https://github.com/adamfk/bouncy-button/assets/274012/c0b850e6-874c-4bc6-8c7b-cba1cef32986)

## Zoom
There are controls in the top right of every graph that allow you to pan and zoom.

![zoom](https://github.com/adamfk/bouncy-button/assets/274012/c35d3c0d-3198-4199-ac08-76620c849f69)


## Tight Mode
You'll want to use this mode when sharing a summary of your data. It's also useful to press F11 to view the browser window in full screen first.

## Section Types
You can choose which section types to include in the graph/analysis.

![section-types](https://github.com/adamfk/bouncy-button/assets/274012/4d720844-e662-4e58-8e0f-a9d51b0ca3fb)

Sometimes a section will be crossed out. That's because it was marked invalid in the test data. Usually happens with Slow sections as they often just end up being multiple presses and not bounces.

## Event Types
Sometimes you only want to look at either presses or releases.

![event-types](https://github.com/adamfk/bouncy-button/assets/274012/96560f58-1c39-459e-8b18-596acef9c631)

## Sort And Group
Very useful to sort by duration.

![sort-and-group](https://github.com/adamfk/bouncy-button/assets/274012/aec34d85-73df-4aa5-8289-30e05b3dcf62)

## Time Focus
Mostly useful when loading huge data sets (like when you record a 8 MHz signal for self calibration).

![time-focus](https://github.com/adamfk/bouncy-button/assets/274012/104e4fbc-7a53-40dc-abc4-46c4bc4999c5)

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





