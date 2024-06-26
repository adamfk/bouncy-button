"use strict";

const waterfallChartDiv = document.getElementById('waterfall-chart');
const displayWaterfallDiv = document.getElementById('display-waterfall');

/** @type {TestSession} */
let g_parseResults = null;
let g_exportUnits = 'us';

const g_errorLogger = new ErrorLogger();

const sectionColors = ["#1775e8", "#54d2d2", "#ffcb00", "#6ad02f", "#e81780", "#ffffff"];
const fontColors = ["#ffffff", "#000000", "#000000", "#000000", "#ffffff", "#000000"];

class SectionStyle {
    /**
     * @param {string} fontColor
     * @param {string} bgColor
     */
    constructor(fontColor, bgColor) {
        this.fontColor = fontColor;
        this.bgColor = bgColor;
    }
}

/** @type {Map<string, SectionStyle>} based on id */
const g_sectionStyles = new Map();

////////////////////////////////////////////////////////////////////


// TODO copy to clipboard button https://community.plotly.com/t/copy-image-to-clipboard/10355/10


/**
 * @param {Test} test 
 * @returns 
 */
function testMatchesFilters(test) {
    const showReleases = document.getElementById('show-releases').checked;
    const showPresses = document.getElementById('show-presses').checked;

    if (!showReleases && test.isRelease()) {
        return false;
    }

    if (!showPresses && test.isPress()) {
        return false;
    }

    const sectionCheckboxId = "show-" + test.section.id;
    const sectionCheckbox = document.getElementById(sectionCheckboxId);
    if (!sectionCheckbox.checked) {
        return false;
    }

    return true;
}

/** @param {Test[]} array */
function sortTests(array)
{
    const sortType = document.getElementById('sort-by').value;
    if (sortType == 'test-order') {
        // array.sort((a, b) => a.testId - b.testId); // not needed, already sorted
    } else if (sortType == 'duration') {
        array.sort((a, b) => a.getDurationNs() - b.getDurationNs());
    } else if (sortType == 'transition-count') {
        array.sort((a, b) => a.transitionsLoadedCount - b.transitionsLoadedCount);
    } else {
        g_errorLogger.logError("Unknown sort type: " + sortType);
    }
}

/** @param {Test[]} tests */
function groupTestsBySectionType(tests) {
    /** @type {Map<string, Test[]>} */
    let sectionIdTestMap = new Map();

    // sections map to array
    g_parseResults.sections.forEach(section => {
        sectionIdTestMap.set(section.id, []);
    });

    tests.forEach(test => {
        sectionIdTestMap.get(test.section.id).push(test);
    });

    // sort each section type
    sectionIdTestMap.forEach(sectionTests => {
        sortTests(sectionTests);
    });

    // combine tests
    let combinedTests = [];
    sectionIdTestMap.forEach(tests => {
        combinedTests = combinedTests.concat(tests);
    });

    return combinedTests;
}

/** @param {Test[]} tests */
function groupTestsByPressRelease(tests) {
    let pressTests = [];
    let releaseTests = [];

    tests.forEach(test => {
        if (test.isPress()) {
            pressTests.push(test);
        } else {
            releaseTests.push(test);
        }
    });

    sortTests(pressTests);
    sortTests(releaseTests);

    return releaseTests.concat(pressTests); // press tests show up first this way
}



/**
 * @param {string} units
 */
function getUnitsMultiplierToNs(units) {
    switch (units) {
        case 'ns':
        case 'nsec':
            return 1;
        case 'us':
        case 'usec':
            return 1000;
        case 'ms':
        case 'msec':
            return 1000000;
        case 's':
        case 'sec':
            return 1000000000;
        default:
            return 1;
    }
}

/**
 * @param {string} inputString
 */
function parseFocusTimeSpan(inputString) {
    let focusTimeSpan = new FocusTimeSpan(0, Number.MAX_SAFE_INTEGER);
    // example: 900-915
    // example: 900.15us - 915 us
    // example: 900us -
    const re = /\s*([\d.]+)\s*(\w+)?\s*(?:-\s*([\d.]+)?\s*(\w+)?\s*)?/;

    const matches = inputString.match(re);
    if (matches == null) {
        return focusTimeSpan;
    }

    focusTimeSpan.startNs = parseFloat(matches[1]); // might return NaN
    focusTimeSpan.startNs *= getUnitsMultiplierToNs(matches[2]);

    if (matches[3] != null) {
        focusTimeSpan.endNs = parseFloat(matches[3]); // might return NaN
        focusTimeSpan.endNs *= getUnitsMultiplierToNs(matches[4]);

        if (focusTimeSpan.startNs > focusTimeSpan.endNs) {
            let temp = focusTimeSpan.startNs;
            focusTimeSpan.startNs = focusTimeSpan.endNs;
            focusTimeSpan.endNs = temp;
        }
    }

    if (!Number.isFinite(focusTimeSpan.startNs)) {
        focusTimeSpan.startNs = 0;
    }

    if (!Number.isFinite(focusTimeSpan.endNs)) {
        focusTimeSpan.endNs = Number.MAX_SAFE_INTEGER;
    }

    return focusTimeSpan;
}

/**
 * @param {string} str
 */
function requireIntParse(str) {
    let result = parseInt(str);
    if (Number.isNaN(result)) {
        throw new Error("Failed to parse int: " + str);
    }
    return result;
}

/**
 * @param {Test[]} tests
 * @param {string} str
 */
function mapTestIdsByFilter(tests, str) {
    let firstMode = null;
    const firstId = tests[0].testId;
    const lastId = tests[tests.length - 1].testId;

    /** @type {Map<number, ('default'|'inc'|'exc')>} */
    let map = new Map();

    tests.forEach(test => {
        map.set(test.testId, 'default');
    });
    
    const re = /\s*(?:(?<include>i|in|inc)|(?<exclude>e|ex|exc)|(?:(?<rangeStart>[0-9]+)\s*(?:\s|-)\s*(?<rangeEnd>[0-9]+)?)|(?<single>[0-9]+))/gi;
    let matches = str.matchAll(re);

    /** @type {('default'|'inc'|'exc')} */
    let mode = 'inc';

    for (const match of matches) {
        const {include, exclude, rangeStart, rangeEnd, single} = match.groups;
        if (include !== undefined) {
            mode = 'inc';
        } else if (exclude !== undefined) {
            mode = 'exc';
        } else if (rangeStart !== undefined) {
            let start = requireIntParse(rangeStart);
            start = Math.max(start, 0);

            let end = lastId;
            if (rangeEnd !== undefined) {
                end = requireIntParse(rangeEnd);
            }

            if (start > end) {
                let temp = start;
                start = end;
                end = temp;
            }

            start = clamp(start);
            end = clamp(end);

            for (let i = start; i <= end; i++) {
                tryMap(i);
            }

            trackModeUsage();
        } else if (single !== undefined) {
            let index = requireIntParse(single);
            tryMap(index);
            trackModeUsage();
        }
    }

    /** @type {('default'|'inc'|'exc')} */
    let defaultMode = 'inc';
    if (firstMode == 'inc') {
        // if the first mode was include, then default to exclude
        defaultMode = 'exc';
    }

    tests.forEach(test => {
        if (map.get(test.testId) == 'default') {
            map.set(test.testId, defaultMode);
        }
    });

    return map;

    /**
     * @param {number} id
     */
    function clamp(id) {
        return Math.max(firstId, Math.min(id, lastId));
    }

    /**
     * @param {number} id
     */
    function tryMap(id) {
        if (map.has(id)) {
            map.set(id, mode);
        }
    }

    function trackModeUsage() {
        if (firstMode == null) {
            firstMode = mode;
        }
    }
}

const tableDataInnerDiv = document.getElementById('table-data-inner');
const displayTableDataDiv = document.getElementById('display-table-data');
function decodeAndGraph() {
    let focusTimeSpan = parseFocusTimeSpan(document.getElementById("focus-region-input").value);

    /** @type {string} */
    let testIdFilterStr =  document.getElementById('test-id-filter-input').value;
    let testIdFilterSet = mapTestIdsByFilter(g_parseResults.tests, testIdFilterStr);

    /** @type {Test[]} */
    let selectedTests = [];
    let count = 1;
    g_parseResults.tests.forEach(test => {
        if (testIdFilterSet.get(test.testId) == 'exc') {
            return;
        }
        if (testMatchesFilters(test)) {
            RecordToLevelConverter.convertEventsToLevels(test, focusTimeSpan);
            selectedTests.push(test);
            count++;
        }
    });

    if (document.getElementById('group-by').value == 'section-type') {
        selectedTests = groupTestsBySectionType(selectedTests);
    } else if (document.getElementById('group-by').value == 'press-release') {
        selectedTests = groupTestsByPressRelease(selectedTests);
    } else {
        sortTests(selectedTests);
    }

    // limit displayed tests
    {
        /** @type {string} */
        let shownLimitStr =  document.getElementById('shown-limit').value;
        let shownLimit = parseInt(shownLimitStr);
        if (Number.isFinite(shownLimit)) {
            if (shownLimit > 0)
            {
                selectedTests = selectedTests.slice(0, shownLimit);
            }
            else if (shownLimit < 0)
            {
                // negative means from the end
                selectedTests = selectedTests.slice(shownLimit);
            }
        }
    }

    // decide if we should display the waterfall chart
    if (document.getElementById("show-waterfall").checked) {
        if (isTightMode()) {
            waterfallChartDiv.style.height = '75vh';
        } else {
            waterfallChartDiv.style.height = '90vh';
        }

        displayWaterfallDiv.style.display = 'block';
        let combinedChart = new PressReleaseTraces(g_parseResults.sections, sectionColors);
        const maxFoundNs = Grapher.addWaterFallLevels(combinedChart, selectedTests, focusTimeSpan);
        Grapher.plotChart(waterfallChartDiv, combinedChart, maxFoundNs);
    } else {
        waterfallChartDiv.innerHTML = '';
        displayWaterfallDiv.style.display = 'none';
    }

    displayTableDataDiv.style.display = 'block'; // show it

    // run data table maker always as it calculates some stats
    const dataTableMaker = new DataTableMaker(g_sectionStyles);
    selectedTests.reverse().forEach(test => {
        dataTableMaker.addTest(test);
    });
    dataTableMaker.finalize();

    tableDataInnerDiv.innerHTML = dataTableMaker.html;

    {
        showStatsText(selectedTests);

        const plotter = new BoxPlotter();
        plotter.plotBounceDurations("stats-press-release-durations", "Bounce Durations (time to stable)", selectedTests);
        plotter.plotLongestPulseDurations("stats-press-release-longest-pulse-durations", "Longest Pulse Durations", selectedTests);
        plotter.plotTransitions("stats-press-release-transitions", "Transitions Per Activation", selectedTests);
        plotter.plotPulseWidth("stats-press-release-pulse-width", "Pulse Width", selectedTests);

        document.getElementById('display-stats-graphs').style.display = 'block';
    }

    if (document.getElementById('show-summary').checked) {
        const summary = new Summary(g_parseResults);
        summary.create(selectedTests);
        const summaryTableMaker = new SummaryTableMaker(g_parseResults, g_sectionStyles);
        summaryTableMaker.addTable1(summary);
        summaryTableMaker.addTable2(summary);
        document.getElementById('display-summary').style.display = 'block';
        document.getElementById('display-summary-inner').innerHTML = summaryTableMaker.html;
    } else {
        document.getElementById('display-summary').style.display = 'none';
    }

    {
        // get shortest pulse for all tests
        let shortestPulseNs = Number.MAX_SAFE_INTEGER;
        selectedTests.forEach(test => {
            if (test.shortestPulseNs < shortestPulseNs) {
                shortestPulseNs = test.shortestPulseNs;
            }
        });

        const span = document.getElementById("session-stats-shortest-pulse");
        if (shortestPulseNs == Number.MAX_SAFE_INTEGER) {
            span.innerText = "";
        } else {
            span.innerText = "Shortest Pulse: " + Grapher.formatMicroseconds(shortestPulseNs / 1000, 3, " ");
        }
    }
}


function clearUserData() {
    document.getElementById('user-data-text-input').value = '';
}

function parseUserData() {
    document.getElementById('div-input').style.display = 'none';
    document.getElementById('div-display').style.display = 'block';
    document.getElementById('display-stats-graphs').style.display = 'none';
    document.getElementById('display-summary').style.display = 'none';
    displayWaterfallDiv.style.display = 'none';

    const inputString = document.getElementById('user-data-text-input').value;
    g_parseResults = TextToRecordParser.parse(inputString);

    // set Window title
    document.title = "B⁴ - " + g_parseResults.sessionTitle;
    document.getElementById("span-title").innerText = g_parseResults.sessionTitle + " - ";

    updateLoadedDataInfo();

    showSectionCheckboxes(g_parseResults.sections);
}


function updateLoadedDataInfo() {
    document.getElementById("loaded-data-test-count").innerText = "" + g_parseResults.tests.length;

    if (g_parseResults.sessionDescription.length > 0) {
        document.getElementById("session-description-outer").style.display = 'block';
        document.getElementById("session-description-content").innerText = g_parseResults.sessionDescription;
    } else {
        document.getElementById("session-description-outer").style.display = 'none';
    }

    let totalEventCount = 0;
    let totalEdgeCount = 0;
    g_parseResults.tests.forEach(test => {
        totalEventCount += test.events.length;
        totalEdgeCount += test.events.length;
        test.events.forEach(event => {
            totalEdgeCount += event.risingEdges * 2 - 1; // rough estimate
        });
    });
    document.getElementById("loaded-data-total-event-count").innerText = "" + totalEventCount;
    document.getElementById("loaded-data-total-edge-count").innerText = "" + totalEdgeCount;

    updateLoadedDataWarnings(totalEdgeCount);
}

/**
 * @param {number} totalEdgeCount
 */
function updateLoadedDataWarnings(totalEdgeCount) {
    let warningText = "";
    if (totalEdgeCount > 100000) {
        warningText = "TONS of edges! Waterfall auto disabled. Graph may auto limit. Use `Time Focus` to select area of interest.";
        document.getElementById("show-waterfall").checked = false;
    } else if (totalEdgeCount > 30000) {
        warningText = "Lots of edges. Waterfall graphing will likely take a few seconds. You may want to select a time/test/section subset.";
    } else if (totalEdgeCount == 0) {
        warningText = "No edges found. Bad input data?";
    }
    document.getElementById("loaded-data-warnings").innerText = warningText;
    const warningsOuter = document.getElementById("loaded-data-warnings-outer");
    if (warningText.length > 0) {
        warningsOuter.style.display = 'inline-block';
    } else {
        warningsOuter.style.display = 'none';
    }
}

function unloadData() {
    document.getElementById('div-input').style.display = 'block';
    document.getElementById('div-display').style.display = 'none';

    document.getElementById("stats-press-release-durations").innerHTML = '';
    document.getElementById("stats-press-release-longest-pulse-durations").innerHTML = '';
    document.getElementById("stats-press-release-transitions").innerHTML = '';
    document.getElementById("stats-press-release-pulse-width").innerHTML = '';
    document.getElementById("session-stats-shortest-pulse").innerHTML = '';

    waterfallChartDiv.innerHTML = '';
    tableDataInnerDiv.innerHTML = '';
    displayTableDataDiv.style.display = 'none';
}

/**
 * @param {Map<string, Section>} sections
 */
function showSectionCheckboxes(sections) {
    const sectionControls = document.getElementById('section-controls');

    // clear old
    sectionControls.innerHTML = '';

    g_sectionStyles.clear();

    let i = 0;
    let newHtml = '';
    sections.forEach(section => {
        const bgColor = sectionColors[i];
        const fontColor = fontColors[i];
        const checked = section.initiallyDisabled ? '' : 'checked';
        const textDecoration = section.initiallyDisabled ? 'line-through' : 'none';
        let description = section.description;
        if (section.invalid) {
            description = "Considered invalid. " + description;
        }

        g_sectionStyles.set(section.id, new SectionStyle(fontColor, bgColor));


        newHtml += `<div class="filter-option" title="${description} (id:${section.id})" style="background-color:${bgColor}; color:${fontColor}">
        <label for="show-${section.id}" style="text-decoration:${textDecoration}">${section.title}</label>
        <input type="checkbox" id="show-${section.id}" name="show-${section.id}" value="show-${section.id}" ${checked}>
        </div>`;
        i++;
        i %= sectionColors.length;
    });

    sectionControls.innerHTML = newHtml;
}

/**
 * @param {number} testId
 */
function copyTestLevelsToClipboard(testId) {
    let test = findTestById(testId);
    let {units, divisor} = getExportUnitsAndDivisor();
    let text = `time [${units}]\tpin state (estimated)\tduration [${units}]\n`;

    test.levelRecords.forEach(levelRecord => {
        text += levelRecord.nsecStart/divisor + '\t' + levelRecord.pinState + '\t' + levelRecord.nsecDuration/divisor + '\n';
    });
    navigator.clipboard.writeText(text);
}

function getExportUnitsAndDivisor() {
    let units, divisor;
    if (g_exportUnits == 'us') {
        units = "us";
        divisor = 1000;
    } else if (g_exportUnits == 'ms') {
        units = "ms";
        divisor = 1000000;
    } else if (g_exportUnits == 's') {
        units = "s";
        divisor = 1000000000;
    } else {
        units = "ns";
        divisor = 1;
    }
    return { units, divisor };
}

/**
 * This intentionally is offset from 0-5v so that you can view alongside oscilloscope data.
 * @param {number} pinState
 */
function pinStateToOffsetVoltage(pinState) {
    if (pinState == 0) {
        return 0.2;
    }
    return 4.8;
}

/**
 * @param {number} testId
 */
function copyGraphTestLevelsToClipboard(testId) {
    let test = findTestById(testId);
    let {units, divisor} = getExportUnitsAndDivisor();
    let text = `time [${units}]\tpin state (estimated)\n`;

    /** @type {LevelRecord?} */
    let lastLevel = null;
    test.levelRecords.forEach(level => {
        if (lastLevel !== null) {
            text += lastLevel.nsecEnd/divisor + '\t' + pinStateToOffsetVoltage(lastLevel.pinState) + '\n';
        }
        text += level.nsecStart/divisor + '\t' + pinStateToOffsetVoltage(level.pinState) + '\n';
        lastLevel = level;
    });
    navigator.clipboard.writeText(text);
}

/**
 * @param {number} testId
 */
function findTestById(testId) {
    /** @type {Test} */
    let test = null;
    g_parseResults.tests.forEach(t => {
        if (t.testId == testId) {
            test = t;
        }
    });

    if (test === null) {
        throw new Error("Test not found: " + testId);
    }

    return test;
}

// click on header to scroll to section
document.querySelectorAll('h2, .click-to-scroll').forEach(item => {
    item.addEventListener('click', event => {
        item.scrollIntoView(true);
    });
});

function isTightMode() {
    return document.getElementById('show-tight').checked;
}

document.getElementById('show-tight').addEventListener('change', event => {
    let display = isTightMode() ? 'none' : 'block';

    document.querySelectorAll('h2').forEach(item => {
        item.style.display = display;
    });

    document.getElementById("session-description-outer").style.display = display;
    document.getElementById("display-table-data-outer").style.display = display;
    document.getElementById("display-stats-graphs-for-tight").style.display = display;
});

setInterval(() => {
    if (g_errorLogger.hasErrors()) {
        document.body.style.border = '5px solid red';
    } else {
        document.body.style.border = 'none';
    }
}, 500);


/** @type {HTMLTextAreaElement} */
const dataInputTextArea = document.getElementById('user-data-text-input');

/**
 * 
 * @param {InputEvent} ev 
 */
function dropHandler(ev) {
    console.log(ev);

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        [...ev.dataTransfer.items].forEach((item) => {
            if (item.kind === "file") {
                const file = item.getAsFile();
                loadFileData(file);
            }
        });
    } else {
        [...ev.dataTransfer.files].forEach((file) => {
            loadFileData(file);
        });
    }
}

function importFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        let files = Array.from(input.files);
        if (files.length != 1) {
            alert("Please select exactly one file.");
            return;
        }

        let file = files[0];
        loadFileData(file);
    };
    input.click();
}

/**
 * @param {File} file
 */
function loadFileData(file) {
    dataInputTextArea.value = "File: " + file.name + "\n";
    file.text().then(text => {
        dataInputTextArea.value += text;
    });
}

/**
 * @param {Test[]} selectedTests
 */
function showStatsText(selectedTests) {
    var testsWithBounceOver20ms = 0;
    var testsWithBounceOver10ms = 0;
    var testsWithBounceOver5ms = 0;

    selectedTests.forEach(test => {
        if (test.getDurationNs() > 20*1000*1000) {
            testsWithBounceOver20ms++;
        }
        if (test.getDurationNs() > 10*1000*1000) {
            testsWithBounceOver10ms++;
        }
        if (test.getDurationNs() > 5*1000*1000) {
            testsWithBounceOver5ms++;
        }
    });

    var text = `Tests with bounce over 20ms: ${testsWithBounceOver20ms}/${selectedTests.length} (${(testsWithBounceOver20ms/selectedTests.length*100).toFixed(2)}%)<br>`;
    text += `Tests with bounce over 10ms: ${testsWithBounceOver10ms}/${selectedTests.length} (${(testsWithBounceOver10ms/selectedTests.length*100).toFixed(2)}%)<br>`;
    text += `Tests with bounce over 5ms: ${testsWithBounceOver5ms}/${selectedTests.length} (${(testsWithBounceOver5ms/selectedTests.length*100).toFixed(2)}%)<br>`;
    document.getElementById("stats-text").innerHTML = text;
}
