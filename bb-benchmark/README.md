# Bouncy-Button-Benchmark
This folder contains the Arduino sketch. Open it with the Arduino IDE (old one is best because of better terminal) and upload it to your Arduino Uno/Nano.

<br>

## Arduino IDE
The old/legacy Arduino IDE is recommended because it has a better terminal that allows you to easily select all the reported data and copy. The new terminal makes it difficult to highlight and copy hundreds of lines of serial text. You can download the legacy Arduino IDE from the [Arduino website](https://www.arduino.cc/en/Main/OldSoftwareReleases).

You can also choose to use any serial program that works for you. One that logs directly to a file could be handy.

<br>

## Usage
The serial terminal will tell you what to do next. For example, it will tell you when to press the button:
    
```
#################### Test #1 ####################
Section count: 1, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
```

Once you press the button, the program will record and print out a bunch of data to the serial port.

```
<test>
sw version: 0.3.2
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 5937, log: 3, event: 3
...
pin: 0, rising_edges: 1, nsec: 15961937, log: 77, event: 74
pin: 0, rising_edges: 1, nsec: 22864250, log: 80, event: 75
</buffered_events>
logs used: 80/350
section type: "Normal"
section count: 3
test id: 3
duration: 22 ms, 864 us, 250 ns
</test>
```

It also keeps track of your longest bounce:
```
$$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
$$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
$$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
$$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
$$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
$$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ | 
$$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
\__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
New session record for max duration! Bounce them buttons.
22 ms, 864 us, 250 ns
```

<br>


## Saving The Data
Once you are done testing, copy the data from the serial terminal and paste it into a regular text file. You can then use the [Bouncy-Button-Benchmark-Browser](../bbb-browser/README.md) to graph and analyze the data.

If you are using the old Arduino IDE, you can select all the data by clicking on the terminal and pressing `Ctrl+A`. Then you can copy it by pressing `Ctrl+C`.


<br>


## Section Test Types
These are optional, but can be helpful if you want to categorize your data. Each section shows up in the browser as a different color.

In the below image, you can see that `Slow` presses and then `Fast` presses bounce more than `Normal` presses.

![image](https://github.com/adamfk/bouncy-button/assets/274012/03b401a3-8e64-4283-a423-7a76e8a3c8e8)

You can start a section test type by typing `ss` and pressing enter. You will then be prompted to enter the section type.


<br>


## Sharing Your Data
If you'd like to share your data with the world, you can simply open an issue on the [bouncy-button-data repo](https://github.com/adamfk/bouncy-button-data/issues/new/choose).

I chose to use issues because it's a simple way to keep track of the data and it's easy to search and filter. It also allows anyone to easily add their data without needing to go through a pull request.


<br>


## Commands
You can send commands to the Arduino program over the serial port. You can get a full listing of commands by typing `?` and pressing enter.

As of version `0.3.1`, here are the commands:

```
Possible commands: 
  ss  - Start Section test type.
  dl  - Delete Last. Add log that last test should be deleted.
  gg  - Glitch Guard. Useful with 'dtg'. Marks data to here as good.
  dtg - Delete To last Glitch Guard 'gg'. Useful if wires glitch and a bunch of bogus data is recorded.
  nt  - Note something in output.
  gen - Generate a signal for self calibration on pin 11.
  sws - Skip waiting for next stable. Useful when generating a self calibration signal.
  erl - Enable Raw Logs.
  drl - Disable Raw Logs.
  ex  - Exit this menu and record more sweet, sweet, data...
  stl - Session Title. Useful for keeping track of what button this is for.
  sds - Session Description. Useful for keeping track of what button this is for.
  eip - Enable Internal Pullup resistor (default).
  dip - Disable Internal Pullup resistor.
```

> NOTE:`gg`, `dtg`, `nt` are not yet supported in the browser. They are currently just for your own notes.

<br>


## How Accurate Is The Data Really?
Pretty good actually! That said, the Arduino Uno and Nano use a resonator clock source accurate to around 1% so that limits our absolute accuracy.

See the bottom of this button test session for interactive graphs that allow you to see how our button recordings stack up against an oscilloscope: https://github.com/adamfk/bouncy-button-data/issues/2

![image](https://github.com/adamfk/bouncy-button-data/assets/274012/330320e9-8d55-476a-805a-062b67e47283)

