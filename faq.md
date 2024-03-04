# Test Data Stuff

## How do I mark a test section as invalid?
This is common for slow press tests. Often slow press tests result in multiple presses and shouldn't be shown with the regular bounce data.

All you have to do is find where the section was last started in your text file:

```xml
<section_start>
  <id>_s</id>
  <description>Slow: Slow press and release. p(SLOW),rl(SLOW)</description>
</section_start>
```

and modify it to include a `<invalid/>` tag as shown below

```diff
 <section_start>
   <id>_s</id>
   <description>Slow: Slow press and release. p(SLOW),rl(SLOW)</description>
+  <invalid/>
 </section_start>
```

The result should look like this:
```xml
<section_start>
  <id>_s</id>
  <description>Slow: Slow press and release. p(SLOW),rl(SLOW)</description>
  <invalid/>
</section_start>
```

## How do I title my test session?
You can do this from the Arduino serial monitor/terminal with the `stl` command. If you forget the commands, just type `?<enter>` and it will remind you.

Or you can just add it directly to your text file later. Here's what you need to add:
```xml
<session_title>
Your session title goes here...
</session_title>
```

## How do I add a description to my test session?
You can do this from the Arduino serial monitor/terminal with the `sds` command. If you forget the commands, just type `?<enter>` and it will remind you.

Or you can just add it directly to your text file later. Here's what you need to add:
```xml
<session_description>
Your description goes here.
It can span multiple lines...
</session_description>
```

<br>

# Performance Accuracy Stuff

## Minimum detectable pulse?
TLDR - a _single_ 62.5ns pulse will likely look like a 625ns pulse in the browser. Back to back 62.5ns pulses are visualized correctly though.

![image](https://github.com/adamfk/bouncy-button/assets/274012/5a3a8a7d-ede2-474c-a8ad-ba9dacc98d33)

I'll do a deep drive on this in the future. It's actually really interesting.

Currently, the Arduino sketch samples the rising edge count peripheral and also the digital input to detect when the signal goes low. This happens every 20 clock cycles or 1.25 microseconds. If there was a change, it takes another 20 cycles to log it to memory. If we are constantly logging (super noisy bounce), we are sampling the rising edge count and pin every 2.5 microseconds.

Section 16.3  of the datasheet covers external clocks and says: "Each half period of the external clock (AKA button signal) applied must be longer than one system clock cycle to ensure correct sampling." The Arduino Uno/Nano use a 16 MHz clock (62.5 nanosecond period).

I wasn't 100% sure my understanding of the datasheet was correct, so I built in a "self test" feature. You can use the `gen` command to output a signal on pin 11 that can be connected directly to pin 4 (with no switch connected). Here's the output from the menu:

    A calibration signal can be output on pin 11
    Possible commands: 
      0  - No signal.
      f1 - Generate 62.5 nsec pulse per 16.00 usec period.
      f2 - Generate 8 MHz output, 50% duty cycle, 62.5ns high/low, 125 ns period.
      f3 - Generate 4 MHz output, 50% duty cycle, 125 ns high/low, 250 ns period.
      f4 - Generate 2.66666 MHz output, 50% duty cycle, 187.5 ns high/low, 375 ns period.
      s <0-255> - `Freq = 16 MHz / (2 * 1024 * (1 + <0-255>))`. Ranges from 7.8 KHz to 30.5 Hz.

Using f2, I output a 8 MHz signal to pin 4 and it correctly figures out 62.5 ns pulses. It's a bit off right at the signal start though. After 2.5 us or so, it's correct.

However, when I use f1, the visualization stretches the 62.5 nsec pulse into a 625 nsec pulse (half our sampling period). See image above.

I've measured with an oscilloscope to confirm the generated signals.

One thing to consider though is that the self test generated signal is in synch with the system clock and synchronization. I haven't yet tried using a different Arduino to generate the signal.

Datasheet section 28.5.4 lists the external clock "High time" and "Low time" as 25ns min. So maybe we could detect 25ns pulses if they happened at just the right time.
