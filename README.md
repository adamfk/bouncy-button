| You like big buttons and you cannot lie. You other coders can't deny.

![image](https://github.com/adamfk/bouncy-button/assets/274012/146a55c6-3897-4910-81a9-e4a0240c7b05)

You might find this project useful if you want to characterize the bounce of a button/switch. If you are more interested in checking out the open source collection of button bounce data, you can find it at the [bouncy-button-data](https://github.com/adamfk/bouncy-button-data/) repo.

Even though it runs on a cheap Arduino Uno/Nano, it has some pretty decent performance:
 
| Feature                                 | Value                          |
|-----------------------------------------|--------------------------------|
| Resolution                              | Approximately 2.5 microseconds |
| Minimum bounce detection time           | 62.5 nanoseconds               |
| Maximum recorded/streamed data duration | 2 seconds                      |

This project is divided into two parts:

- [Bouncy-Button-Benchmark](./bb-benchmark/README.md): the Arduino sketch that records & sends bounce data to a computer serial port.
- [Bouncy-Button-Benchmark-Browser](./bbb-browser/README.md): a web page that graphs and analyzes the button bounce data.
