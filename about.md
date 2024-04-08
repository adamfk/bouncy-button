## 20 ms Bounce Or Less, Right?
We all know that a healthy button/switch will bounce less than `20ms`, right? I used to think that. I learned that `20ms` number in high school and never really thought about it again. `20ms` always worked... until one day it didn't. At first I thought there was something wrong with my project, the wiring, or the button. I checked everything and swapped out the button with the spare I had (same model, never used) and it also would occasionally bounce well over `20ms`.

I did some basic research and came across Jack Ganssle's excellent [guide to debouncing](https://www.ganssle.com/debouncing.htm). I blame Jack for sparking my curiosity in button bounce behavior. I did more research and started thinking about designing a button debouncer that would handle my unruly buttons and also add the custom features I needed (tap counting, long press, ...).

While I really enjoyed Jack's article, it didn't have enough data to satisfy my curiosity. The few pictures in the article were great, but also very small and pixelated.

![image](https://github.com/adamfk/bouncy-button-data/assets/274012/d8a011a3-f1db-4505-862a-631219438dcd)

I wanted to see the good bounces, the bad bounces and the truly awful bounces! What percentage were good/bad/awful?

If I was going to design a debouncer that detected button stability, I would also need to know the longest pulse seen during testing.

I got out my digital oscilloscope and started testing the problematic button. I was using a PicoScope 2204A (10 MHz bandwidth, 100 MS/s, 8k samples). My PicoScope is one of the cheaper models (around $250 CAD) and delivers incredible value, but I found its 8k sample depth very limiting for this task. I could either capture high resolution data for a very short time or very low resolution data for a longer time. I was concerned that the low resolution captures would miss short pulses (confimed).

Using my PicoScope, I also didn't have an easy way to compare bounces or create a good summary. I could use the persistence feature, but it ended up being a bit of a mess of colors.

![image](https://github.com/adamfk/bouncy-button/assets/274012/f8af9fde-45ce-42ae-b2f9-026f88806c64)

I thought back to Jack's article where he states: *"Many of the switches exhibited quite wild and unexpected behavior. Bounces of under 100 nsec were common [...]. No reasonable micro could reliably capture these sorts of transitions, so I abandoned that plan"*.

I wondered if I could make use of an AVR/Arduino's edge counting peripheral. I hoped that if I could use cheap and common hardware (like an Arduino UNO) to capture button bounce data, maybe a few other people would help me build up an [open source database of button bounce behavior](https://github.com/adamfk/bouncy-button-data).

Many hours later, we have a very capable tool for recording and analyzing button bounce data.

<br>


## Performance
 
| Feature                                 | Value                          |
|-----------------------------------------|--------------------------------|
| Sample period                           | 1.25 - 2.5 microseconds        |
| Minimum detectable bounce               | 62.5 nanoseconds               |
| Maximum recorded/streamed data duration | 2 seconds                      |

See also [./faq.md#performance-accuracy-stuff](./faq.md#performance-accuracy-stuff)

<br>


## How Accurate Is The Data Really?
Pretty good! However, the Arduino Uno/Nano use a resonator clock which limits our absolute accuracy to around 1%.

See the [bottom of this button test session](https://github.com/adamfk/bouncy-button-data/issues/2) for interactive graphs that compare our button recordings against an oscilloscope.

![image](https://github.com/adamfk/bouncy-button-data/assets/274012/330320e9-8d55-476a-805a-062b67e47283)

<br>
