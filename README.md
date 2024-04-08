Turn a regular Arduino Uno into a powerful button bounce analysis tool (detects 62 nanosecond pulses).

I initially started exploring switch bounce with an oscilloscope, but it was just too burdensome to collect enough data for experiments and there was no easy way to analyze and share the data. After a few days of using my oscilloscope, I decided to try and see what a humble Arduino could do because they are already so prevalent, easy to use and low cost. Great for students and hobbyists.

I'm very happy with the results! We can now:
1. Collect and analyze switch bounce data easily.
2. Interactively inspect bounce waveforms and statistics.
3. Share high fidelity bounce data with others.
4. Run experiments efficiently without spending too much time.

Special thanks to [Jack Ganssle](https://www.ganssle.com/debouncing.htm) (no affiliation) for showing how interesting buttons and switches can be.

---

You can check out the analysis tool online (on a desktop): [https://adamfk.github.io/bouncy-button/bbb-browser/gui.html](https://adamfk.github.io/bouncy-button/bbb-browser/gui.html)

<!-- [![image](https://github.com/adamfk/bouncy-button/assets/274012/146a55c6-3897-4910-81a9-e4a0240c7b05)](https://adamfk.github.io/bouncy-button/bbb-browser/gui.html) -->

![quick-graph-then-zom](https://github.com/adamfk/bouncy-button/assets/274012/32b80c43-9965-4b8a-8767-32367a44eef9)

<br>

## Open Source Database
If you just want to see the open source collection of button bounce data, you can find it at the companion [bouncy-button-data](https://github.com/adamfk/bouncy-button-data/) repo.

[![image](https://github.com/adamfk/bouncy-button-data/assets/274012/d512514e-0d1c-4d48-a1b9-e2c4b0d69cb3)](https://github.com/adamfk/bouncy-button-data/)

<br>

## Main Reasons To Use
1. Makes it really easy to collect and analyze switch bounce data.
<br> -> Even better than fancy oscilloscopes (in many ways).
3. Great for experiments and curiosity about buttons/switches.
4. Great for debounce algorithm authors and users interested in performance tuning.

<br>

## 20 ms Bounce Or Less, Right?
We all know that a healthy button/switch will bounce less than 20ms, right? I used to think that. I learned that 20ms number in high school and never really thought about it again. 20ms always worked... until one day it didn't. At first I thought there was something wrong with my project, the wiring, or the button. I checked everything and swapped out the button with the spare I had (same model, never used) and it also would occasionally bounce well over 20ms.

Most switches available for purchase don't have a bounce specification, but you can generally assume a `50ms debounce period` (works for about 95% of new switches).

Beautiful old rustic switches definitely need to be measured though.

<br>

## Introduction Video
The below 12 minute video gives a brief demo, explains why it is better than oscilloscopes, and why you might want to use it.
[https://www.youtube.com/watch?v=jE4PtGqRFt0](https://www.youtube.com/watch?v=jE4PtGqRFt0)

[![image](https://github.com/adamfk/bouncy-button/assets/274012/b35e4142-4b1b-4baf-9d9a-2228b48307bd)](https://www.youtube.com/watch?v=jE4PtGqRFt0)


<br>

## Simple To Use
All you need is a button, some wires and an Arduino Uno/Nano. See [./how-to.md](./how-to.md).

![image](https://github.com/adamfk/bouncy-button/assets/274012/e2feec5d-9622-4019-88d0-63a3557cb8a8)


<br>


## Organization
This project is divided into two parts:

- [Bouncy-Button-Benchmark](./bb-benchmark/README.md): the Arduino sketch that records & sends bounce data to a computer serial port.
- [Bouncy-Button-Benchmark-Browser](./bbb-browser/README.md): a web page that graphs and analyzes the button bounce data.

<br>

## Source Code
[https://github.com/adamfk/bouncy-button/](https://github.com/adamfk/bouncy-button/)

<br>

## MORE
* [About](./about.md)
* [FAQ](./faq.md)


