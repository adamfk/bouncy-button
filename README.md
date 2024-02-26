| You like big buttons and you cannot lie. You other coders can't deny.

![image](https://github.com/adamfk/bouncy-button/assets/274012/146a55c6-3897-4910-81a9-e4a0240c7b05)

You might find this project useful if you want to characterize the bounce of a button/switch. If you are more interested in checking out the open source collection of button bounce data, you can find it at the [bouncy-button-data](https://github.com/adamfk/bouncy-button-data/) repo.

Even though it runs on a cheap Arduino Uno/Nano, it has some pretty decent performance:
 
| Feature                                 | Value                          |
|-----------------------------------------|--------------------------------|
| Resolution                              | Approximately 2.5 microseconds |
| Minimum bounce detection time           | 62.5 nanoseconds               |
| Maximum recorded/streamed data duration | 2 seconds                      |

## How Accurate Is The Data Really?
Pretty good! However, the Arduino Uno and Nano use a resonator clock which limits our absolute accuracy to around 1%.

See the [bottom of this button test session](https://github.com/adamfk/bouncy-button-data/issues/2) for interactive graphs that compare our button recordings against an oscilloscope.

![image](https://github.com/adamfk/bouncy-button-data/assets/274012/330320e9-8d55-476a-805a-062b67e47283)

## Organization
This project is divided into two parts:

- [Bouncy-Button-Benchmark](./bb-benchmark/README.md): the Arduino sketch that records & sends bounce data to a computer serial port.
- [Bouncy-Button-Benchmark-Browser](./bbb-browser/README.md): a web page that graphs and analyzes the button bounce data.

The browser allows you to summarize and inspect the data easily.

![quick-graph-then-zom](https://github.com/adamfk/bouncy-button/assets/274012/32b80c43-9965-4b8a-8767-32367a44eef9)



