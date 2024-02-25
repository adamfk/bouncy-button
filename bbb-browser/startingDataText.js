const startingDataText = `
>>> Drag and drop a file here, or copy paste the contents of the file here. <<<
>>> The below text is just an example you can load. <<<

Bouncy Button Benchmark. Version 0.2.3
Arduino board: Uno
F_CPU: 16000000

Assuming regular testing one transition at a time.
Type '?'<enter> for menu options.
<test_session_start/>


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
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 1
test id: 1
duration: 806 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 806 ns


#################### Test #2 ####################
Section count: 2, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 2
test id: 2
duration: 806 ns
</test>


#################### Test #3 ####################
Section count: 3, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 45461314, nsec_diff: 45460508, log: 14, event: 3
pin: 0, rising_edges: 1, nsec: 45527468, nsec_diff: 66154, log: 15, event: 4
pin: 1, rising_edges: 1, nsec: 45545200, nsec_diff: 17732, log: 16, event: 5
pin: 0, rising_edges: 0, nsec: 45547618, nsec_diff: 2418, log: 17, event: 6
pin: 1, rising_edges: 1, nsec: 45623072, nsec_diff: 75454, log: 18, event: 7
pin: 0, rising_edges: 0, nsec: 45625490, nsec_diff: 2418, log: 19, event: 8
pin: 1, rising_edges: 1, nsec: 45672672, nsec_diff: 47182, log: 20, event: 9
pin: 0, rising_edges: 0, nsec: 45680980, nsec_diff: 8308, log: 21, event: 10
pin: 1, rising_edges: 1, nsec: 45739942, nsec_diff: 58962, log: 22, event: 11
pin: 0, rising_edges: 0, nsec: 45767098, nsec_diff: 27156, log: 23, event: 12
pin: 1, rising_edges: 1, nsec: 45802500, nsec_diff: 35402, log: 24, event: 13
pin: 0, rising_edges: 0, nsec: 45814342, nsec_diff: 11842, log: 25, event: 14
pin: 1, rising_edges: 1, nsec: 45973434, nsec_diff: 159092, log: 26, event: 15
pin: 0, rising_edges: 0, nsec: 45987632, nsec_diff: 14198, log: 27, event: 16
pin: 0, rising_edges: 1, nsec: 46018446, nsec_diff: 30814, log: 28, event: 17
pin: 1, rising_edges: 1, nsec: 46031466, nsec_diff: 13020, log: 29, event: 18
pin: 0, rising_edges: 0, nsec: 46033884, nsec_diff: 2418, log: 30, event: 19
pin: 0, rising_edges: 1, nsec: 46144802, nsec_diff: 110918, log: 31, event: 20
pin: 1, rising_edges: 1, nsec: 46194340, nsec_diff: 49538, log: 32, event: 21
pin: 0, rising_edges: 0, nsec: 46196758, nsec_diff: 2418, log: 33, event: 22
pin: 1, rising_edges: 1, nsec: 46252186, nsec_diff: 55428, log: 34, event: 23
pin: 0, rising_edges: 0, nsec: 46258138, nsec_diff: 5952, log: 35, event: 24
pin: 1, rising_edges: 1, nsec: 46359508, nsec_diff: 101370, log: 36, event: 25
pin: 0, rising_edges: 0, nsec: 46370172, nsec_diff: 10664, log: 37, event: 26
pin: 1, rising_edges: 1, nsec: 46432668, nsec_diff: 62496, log: 38, event: 27
pin: 0, rising_edges: 0, nsec: 46443332, nsec_diff: 10664, log: 39, event: 28
pin: 1, rising_edges: 1, nsec: 46490514, nsec_diff: 47182, log: 40, event: 29
pin: 0, rising_edges: 0, nsec: 46492932, nsec_diff: 2418, log: 41, event: 30
pin: 1, rising_edges: 1, nsec: 46674406, nsec_diff: 181474, log: 42, event: 31
pin: 0, rising_edges: 0, nsec: 46707452, nsec_diff: 33046, log: 43, event: 32
pin: 1, rising_edges: 1, nsec: 46765236, nsec_diff: 57784, log: 44, event: 33
pin: 0, rising_edges: 0, nsec: 46792392, nsec_diff: 27156, log: 45, event: 34
pin: 1, rising_edges: 1, nsec: 46838396, nsec_diff: 46004, log: 46, event: 35
pin: 0, rising_edges: 0, nsec: 46845526, nsec_diff: 7130, log: 47, event: 36
pin: 1, rising_edges: 1, nsec: 46910378, nsec_diff: 64852, log: 48, event: 37
pin: 0, rising_edges: 0, nsec: 109746262, nsec_diff: 62835884, log: 65, event: 38
</buffered_events>
logs used: 65/350
section type: "Normal"
section count: 3
test id: 3
duration: 109 ms, 746 us, 262 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 109 ms, 746 us, 262 ns


#################### Test #4 ####################
Section count: 4, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 48236, nsec_diff: 46004, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 53010, nsec_diff: 4774, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 412362, nsec_diff: 359352, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 472502, nsec_diff: 60140, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 606856, nsec_diff: 134354, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 613986, nsec_diff: 7130, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 736560, nsec_diff: 122574, log: 10, event: 10
</buffered_events>
logs used: 10/350
section type: "Normal"
section count: 4
test id: 4
duration: 736 us, 560 ns
</test>


#################### Test #5 ####################
Section count: 5, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 125922, nsec_diff: 125116, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 230826, nsec_diff: 104904, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 491226, nsec_diff: 260400, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 494822, nsec_diff: 3596, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 5
test id: 5
duration: 494 us, 822 ns
</test>


#################### Test #6 ####################
Section count: 6, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 9004818, nsec_diff: 9004012, log: 5, event: 3
pin: 0, rising_edges: 1, nsec: 12164400, nsec_diff: 3159582, log: 6, event: 4
pin: 1, rising_edges: 1, nsec: 12683526, nsec_diff: 519126, log: 8, event: 5
pin: 1, rising_edges: 1, nsec: 12827428, nsec_diff: 143902, log: 9, event: 6
pin: 1, rising_edges: 1, nsec: 13468446, nsec_diff: 641018, log: 10, event: 7
pin: 0, rising_edges: 0, nsec: 13642852, nsec_diff: 174406, log: 11, event: 8
pin: 1, rising_edges: 1, nsec: 13645270, nsec_diff: 2418, log: 12, event: 9
</buffered_events>
logs used: 12/350
section type: "Normal"
section count: 6
test id: 6
duration: 13 ms, 645 us, 270 ns
</test>


#################### Test #7 ####################
Section count: 7, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 25792, nsec_diff: 24986, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 28210, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 78926, nsec_diff: 50716, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 81468, nsec_diff: 2542, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 83886, nsec_diff: 2418, log: 7, event: 7
</buffered_events>
logs used: 7/350
section type: "Normal"
section count: 7
test id: 7
duration: 83 us, 886 ns
</test>


#################### Test #8 ####################
Section count: 8, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 8
test id: 8
duration: 806 ns
</test>


#################### Test #9 ####################
Section count: 9, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 9
test id: 9
duration: 806 ns
</test>


#################### Test #10 ####################
Section count: 10, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 10
test id: 10
duration: 806 ns
</test>


#################### Test #11 ####################
Section count: 11, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 47113924, nsec_diff: 47113118, log: 14, event: 3
pin: 0, rising_edges: 0, nsec: 47116342, nsec_diff: 2418, log: 15, event: 4
pin: 1, rising_edges: 1, nsec: 47253052, nsec_diff: 136710, log: 16, event: 5
pin: 0, rising_edges: 0, nsec: 90562222, nsec_diff: 43309170, log: 28, event: 6
</buffered_events>
logs used: 28/350
section type: "Normal"
section count: 11
test id: 11
duration: 90 ms, 562 us, 222 ns
</test>


#################### Test #12 ####################
Section count: 12, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 2150780, nsec_diff: 2150098, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 12
test id: 12
duration: 2 ms, 150 us, 780 ns
</test>


#################### Test #13 ####################
Section count: 13, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 17783584, nsec_diff: 17782778, log: 7, event: 3
pin: 0, rising_edges: 0, nsec: 17887310, nsec_diff: 103726, log: 8, event: 4
pin: 1, rising_edges: 1, nsec: 18132396, nsec_diff: 245086, log: 9, event: 5
pin: 0, rising_edges: 0, nsec: 105560394, nsec_diff: 87427998, log: 31, event: 6
</buffered_events>
logs used: 31/350
section type: "Normal"
section count: 13
test id: 13
duration: 105 ms, 560 us, 394 ns
</test>


#################### Test #14 ####################
Section count: 14, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 70432, nsec_diff: 69750, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 14
test id: 14
duration: 70 us, 432 ns
</test>


#################### Test #15 ####################
Section count: 15, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 78926, nsec_diff: 78120, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 76797850, nsec_diff: 76718924, log: 22, event: 4
pin: 1, rising_edges: 1, nsec: 125009546, nsec_diff: 48211696, log: 35, event: 5
pin: 0, rising_edges: 0, nsec: 125017854, nsec_diff: 8308, log: 36, event: 6
</buffered_events>
logs used: 36/350
section type: "Normal"
section count: 15
test id: 15
duration: 125 ms, 17 us, 854 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 125 ms, 17 us, 854 ns


#################### Test #16 ####################
Section count: 16, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 42160, nsec_diff: 41478, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 16
test id: 16
duration: 42 us, 160 ns
</test>


#################### Test #17 ####################
Section count: 17, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 17
test id: 17
duration: 806 ns
</test>


#################### Test #18 ####################
Section count: 18, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 72788, nsec_diff: 72106, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 18
test id: 18
duration: 72 us, 788 ns
</test>


#################### Test #19 ####################
Section count: 19, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 73036, nsec_diff: 72230, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 19
test id: 19
duration: 73 us, 36 ns
</test>


#################### Test #20 ####################
Section count: 20, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 162440, nsec_diff: 161758, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 229648, nsec_diff: 67208, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 232066, nsec_diff: 2418, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 255688, nsec_diff: 23622, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 20
test id: 20
duration: 255 us, 688 ns
</test>


#################### Test #21 ####################
Section count: 21, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 382912, nsec_diff: 380680, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 546716, nsec_diff: 163804, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 669290, nsec_diff: 122574, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 1112404, nsec_diff: 443114, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 1340998, nsec_diff: 228594, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 1610822, nsec_diff: 269824, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 7727804, nsec_diff: 6116982, log: 11, event: 10
pin: 1, rising_edges: 1, nsec: 7856268, nsec_diff: 128464, log: 12, event: 11
pin: 0, rising_edges: 0, nsec: 7858686, nsec_diff: 2418, log: 13, event: 12
pin: 1, rising_edges: 1, nsec: 8038982, nsec_diff: 180296, log: 14, event: 13
pin: 0, rising_edges: 0, nsec: 8168190, nsec_diff: 129208, log: 16, event: 14
pin: 1, rising_edges: 1, nsec: 8311968, nsec_diff: 143778, log: 17, event: 15
pin: 0, rising_edges: 0, nsec: 8345014, nsec_diff: 33046, log: 18, event: 16
pin: 1, rising_edges: 1, nsec: 8577142, nsec_diff: 232128, log: 19, event: 17
pin: 0, rising_edges: 0, nsec: 8579560, nsec_diff: 2418, log: 20, event: 18
pin: 0, rising_edges: 1, nsec: 9144008, nsec_diff: 564448, log: 21, event: 19
pin: 1, rising_edges: 1, nsec: 55815190, nsec_diff: 46671182, log: 33, event: 20
pin: 0, rising_edges: 0, nsec: 55819964, nsec_diff: 4774, log: 34, event: 21
pin: 1, rising_edges: 1, nsec: 56017930, nsec_diff: 197966, log: 35, event: 22
pin: 0, rising_edges: 0, nsec: 132340612, nsec_diff: 76322682, log: 55, event: 23
</buffered_events>
logs used: 55/350
section type: "Normal"
section count: 21
test id: 21
duration: 132 ms, 340 us, 612 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 132 ms, 340 us, 612 ns


#################### Test #22 ####################
Section count: 22, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 91822, nsec_diff: 89590, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 22
test id: 22
duration: 91 us, 822 ns
</test>


#################### Test #23 ####################
Section count: 23, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 93992, nsec_diff: 93310, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 23
test id: 23
duration: 93 us, 992 ns
</test>


#################### Test #24 ####################
Section count: 24, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 4588, nsec_diff: 3782, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 67084, nsec_diff: 62496, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 91884, nsec_diff: 24800, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 399404, nsec_diff: 307520, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 24
test id: 24
duration: 399 us, 404 ns
</test>


#################### Test #25 ####################
Section count: 25, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 25
test id: 25
duration: 806 ns
</test>


#################### Test #26 ####################
Section count: 26, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 26
test id: 26
duration: 806 ns
</test>


#################### Test #27 ####################
Section count: 27, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 22134, nsec_diff: 21452, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 27
test id: 27
duration: 22 us, 134 ns
</test>


#################### Test #28 ####################
Section count: 28, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 198834, nsec_diff: 198152, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 28
test id: 28
duration: 198 us, 834 ns
</test>


#################### Test #29 ####################
Section count: 29, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 29
test id: 29
duration: 806 ns
</test>


#################### Test #30 ####################
Section count: 30, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 30
test id: 30
duration: 806 ns
</test>


#################### Test #31 ####################
Section count: 31, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 31
test id: 31
duration: 806 ns
</test>


#################### Test #32 ####################
Section count: 32, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 3410, nsec_diff: 2604, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 134230, nsec_diff: 130820, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 136648, nsec_diff: 2418, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 243908, nsec_diff: 107260, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 32
test id: 32
duration: 243 us, 908 ns
</test>


#################### Test #33 ####################
Section count: 33, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 33
test id: 33
duration: 806 ns
</test>


#################### Test #34 ####################
Section count: 34, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 34
test id: 34
duration: 806 ns
</test>


#################### Test #35 ####################
Section count: 35, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 9362, nsec_diff: 7130, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 35
test id: 35
duration: 9 us, 362 ns
</test>


#################### Test #36 ####################
Section count: 36, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 6820, nsec_diff: 6138, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13950, nsec_diff: 7130, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 101308, nsec_diff: 87358, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 107260, nsec_diff: 5952, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 36
test id: 36
duration: 107 us, 260 ns
</test>


#################### Test #37 ####################
Section count: 37, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 37
test id: 37
duration: 806 ns
</test>


#################### Test #38 ####################
Section count: 38, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 53940, nsec_diff: 53258, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 67084, nsec_diff: 13144, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 110732, nsec_diff: 43648, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 785788, nsec_diff: 675056, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 1407958, nsec_diff: 622170, log: 7, event: 7
</buffered_events>
logs used: 7/350
section type: "Normal"
section count: 38
test id: 38
duration: 1 ms, 407 us, 958 ns
</test>


#################### Test #39 ####################
Section count: 39, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 39
test id: 39
duration: 806 ns
</test>


#################### Test #40 ####################
Section count: 40, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 53940, nsec_diff: 53258, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 56358, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 83514, nsec_diff: 27156, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 346270, nsec_diff: 262756, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 379316, nsec_diff: 33046, log: 7, event: 7
</buffered_events>
logs used: 7/350
section type: "Normal"
section count: 40
test id: 40
duration: 379 us, 316 ns
</test>


#################### Test #41 ####################
Section count: 41, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 41
test id: 41
duration: 806 ns
</test>


#################### Test #42 ####################
Section count: 42, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 915058, nsec_diff: 914376, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 919956, nsec_diff: 4898, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 42
test id: 42
duration: 919 us, 956 ns
</test>


#################### Test #43 ####################
Section count: 43, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 46996, nsec_diff: 46190, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 412238, nsec_diff: 365242, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 453530, nsec_diff: 41292, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 540764, nsec_diff: 87234, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 632834, nsec_diff: 92070, log: 7, event: 7
</buffered_events>
logs used: 7/350
section type: "Normal"
section count: 43
test id: 43
duration: 632 us, 834 ns
</test>


#################### Test #44 ####################
Section count: 44, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 44
test id: 44
duration: 806 ns
</test>


#################### Test #45 ####################
Section count: 45, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 2356, nsec_diff: 1550, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 45
test id: 45
duration: 2 us, 356 ns
</test>


#################### Test #46 ####################
Section count: 46, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 76446, nsec_diff: 75764, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 289726, nsec_diff: 213280, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 292144, nsec_diff: 2418, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 398226, nsec_diff: 106082, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 403000, nsec_diff: 4774, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 651620, nsec_diff: 248620, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 893296, nsec_diff: 241676, log: 9, event: 9
</buffered_events>
logs used: 9/350
section type: "Normal"
section count: 46
test id: 46
duration: 893 us, 296 ns
</test>


#################### Test #47 ####################
Section count: 47, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 47
test id: 47
duration: 806 ns
</test>


#################### Test #48 ####################
Section count: 48, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 39804, nsec_diff: 39122, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 42222, nsec_diff: 2418, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 58900, nsec_diff: 16678, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 110794, nsec_diff: 51894, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Normal"
section count: 48
test id: 48
duration: 110 us, 794 ns
</test>


#################### Test #49 ####################
Section count: 49, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 49
test id: 49
duration: 806 ns
</test>


#################### Test #50 ####################
Section count: 50, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 50
test id: 50
duration: 806 ns
</test>


#################### Test #51 ####################
Section count: 51, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 51
test id: 51
duration: 806 ns
</test>


#################### Test #52 ####################
Section count: 52, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 52
test id: 52
duration: 806 ns
</test>


#################### Test #53 ####################
Section count: 53, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 53
test id: 53
duration: 806 ns
</test>


#################### Test #54 ####################
Section count: 54, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 415586, nsec_diff: 414904, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 54
test id: 54
duration: 415 us, 586 ns
</test>


#################### Test #55 ####################
Section count: 55, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 55
test id: 55
duration: 806 ns
</test>


#################### Test #56 ####################
Section count: 56, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 66898, nsec_diff: 66216, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 56
test id: 56
duration: 66 us, 898 ns
</test>


#################### Test #57 ####################
Section count: 57, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 57
test id: 57
duration: 806 ns
</test>


#################### Test #58 ####################
Section count: 58, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 130510, nsec_diff: 129828, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 58
test id: 58
duration: 130 us, 510 ns
</test>


#################### Test #59 ####################
Section count: 59, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 59
test id: 59
duration: 806 ns
</test>


#################### Test #60 ####################
Section count: 60, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 259098, nsec_diff: 256866, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 13307742, nsec_diff: 13048644, log: 8, event: 5
pin: 0, rising_edges: 1, nsec: 28035160, nsec_diff: 14727418, log: 12, event: 6
pin: 0, rising_edges: 1, nsec: 28187308, nsec_diff: 152148, log: 13, event: 7
pin: 0, rising_edges: 1, nsec: 28569910, nsec_diff: 382602, log: 15, event: 8
pin: 1, rising_edges: 1, nsec: 28691306, nsec_diff: 121396, log: 16, event: 9
pin: 0, rising_edges: 0, nsec: 28693724, nsec_diff: 2418, log: 17, event: 10
pin: 1, rising_edges: 1, nsec: 28712634, nsec_diff: 18910, log: 18, event: 11
pin: 0, rising_edges: 0, nsec: 28720942, nsec_diff: 8308, log: 19, event: 12
pin: 1, rising_edges: 1, nsec: 28801108, nsec_diff: 80166, log: 20, event: 13
</buffered_events>
logs used: 20/350
section type: "Normal"
section count: 60
test id: 60
duration: 28 ms, 801 us, 108 ns
</test>


#################### Test #61 ####################
Section count: 61, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 18072194, nsec_diff: 18071388, log: 7, event: 3
pin: 0, rising_edges: 0, nsec: 18074612, nsec_diff: 2418, log: 8, event: 4
pin: 1, rising_edges: 1, nsec: 18161846, nsec_diff: 87234, log: 9, event: 5
pin: 0, rising_edges: 0, nsec: 40646146, nsec_diff: 22484300, log: 16, event: 6
</buffered_events>
logs used: 16/350
section type: "Normal"
section count: 61
test id: 61
duration: 40 ms, 646 us, 146 ns
</test>


#################### Test #62 ####################
Section count: 62, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 62
test id: 62
duration: 806 ns
</test>


#################### Test #63 ####################
Section count: 63, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 63
test id: 63
duration: 806 ns
</test>


#################### Test #64 ####################
Section count: 64, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 64
test id: 64
duration: 806 ns
</test>


#################### Test #65 ####################
Section count: 65, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 19964, nsec_diff: 17732, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 65
test id: 65
duration: 19 us, 964 ns
</test>


#################### Test #66 ####################
Section count: 66, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 35216, nsec_diff: 34534, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 50716, nsec_diff: 15500, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 72106, nsec_diff: 21390, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 98084, nsec_diff: 25978, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 100502, nsec_diff: 2418, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 113646, nsec_diff: 13144, log: 8, event: 8
pin: 0, rising_edges: 1, nsec: 178622, nsec_diff: 64976, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 221092, nsec_diff: 42470, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 223510, nsec_diff: 2418, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 290842, nsec_diff: 67332, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 341682, nsec_diff: 50840, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 359538, nsec_diff: 17856, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 400954, nsec_diff: 41416, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 521296, nsec_diff: 120342, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 622666, nsec_diff: 101370, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 625084, nsec_diff: 2418, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 668732, nsec_diff: 43648, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 671150, nsec_diff: 2418, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 724346, nsec_diff: 53196, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 801102, nsec_diff: 76756, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 838984, nsec_diff: 37882, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 869674, nsec_diff: 30690, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 872092, nsec_diff: 2418, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 909850, nsec_diff: 37758, log: 26, event: 26
</buffered_events>
logs used: 26/350
section type: "Normal"
section count: 66
test id: 66
duration: 909 us, 850 ns
</test>


#################### Test #67 ####################
Section count: 67, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 67
test id: 67
duration: 806 ns
</test>


#################### Test #68 ####################
Section count: 68, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 95418, nsec_diff: 94612, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 68
test id: 68
duration: 95 us, 418 ns
</test>


#################### Test #69 ####################
Section count: 69, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 69
test id: 69
duration: 806 ns
</test>


#################### Test #70 ####################
Section count: 70, type: "Normal"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 70
test id: 70
duration: 806 ns
</test>


#################### Test #71 ####################
Section count: 71, type: "Normal"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
User input detected. Test delayed.
</test>


Standard section types: 
  Argument | Description
  -------------------------------------------------------------------
    n      |  Normal: normal press & release. p(norm), rl(norm)
  
    f      |  Fast: Fast press & release. p(FAST),rl(FAST)
    f,n    |  FAST/norm: Fast press, normal release. p(FAST) rl(norm)
    n,f    |  norm/FAST: Normal press, fast release. p(norm),rl(FAST)
  
    s      |  Slow: Slow press & release. p(SLOW),rl(SLOW)
    s,n    |  SLOW/norm: Slow press, normal release. p(SLOW),rl(norm)
    n,s    |    
    smk_wp |  Smack WP: Smack housing while button held pressed.
    smk_wr |  Smack WR: Smack housing while button released.

You can also create a custom section type: 
  c <id of 1-9 chars> [optional description]
  Max of 63 chars total for line. You can embed title and meta data in the description.


########################################################################

<section_start>
  <id>_s</id>
  <description>Slow: Slow press & release. p(SLOW),rl(SLOW)</description>
</section_start>

#################### Test #71 ####################
Section count: 1, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 24393652, nsec_diff: 24392846, log: 9, event: 3
pin: 0, rising_edges: 0, nsec: 24401960, nsec_diff: 8308, log: 10, event: 4
pin: 1, rising_edges: 1, nsec: 26171378, nsec_diff: 1769418, log: 11, event: 5
pin: 0, rising_edges: 0, nsec: 84053462, nsec_diff: 57882084, log: 26, event: 6
pin: 1, rising_edges: 1, nsec: 157933406, nsec_diff: 73879944, log: 45, event: 7
pin: 0, rising_edges: 0, nsec: 161041776, nsec_diff: 3108370, log: 47, event: 8
pin: 0, rising_edges: 1, nsec: 169463794, nsec_diff: 8422018, log: 50, event: 9
pin: 1, rising_edges: 1, nsec: 172057378, nsec_diff: 2593584, log: 52, event: 10
pin: 0, rising_edges: 0, nsec: 218836936, nsec_diff: 46779558, log: 64, event: 11
pin: 0, rising_edges: 1, nsec: 298768700, nsec_diff: 79931764, log: 85, event: 12
pin: 1, rising_edges: 1, nsec: 302876014, nsec_diff: 4107314, log: 87, event: 13
pin: 0, rising_edges: 0, nsec: 303002122, nsec_diff: 126108, log: 88, event: 14
pin: 1, rising_edges: 1, nsec: 303288438, nsec_diff: 286316, log: 89, event: 15
pin: 0, rising_edges: 0, nsec: 367568550, nsec_diff: 64280112, log: 106, event: 16
pin: 0, rising_edges: 1, nsec: 412878088, nsec_diff: 45309538, log: 118, event: 17
pin: 1, rising_edges: 1, nsec: 413634426, nsec_diff: 756338, log: 119, event: 18
pin: 0, rising_edges: 0, nsec: 413636844, nsec_diff: 2418, log: 120, event: 19
pin: 1, rising_edges: 1, nsec: 416734612, nsec_diff: 3097768, log: 122, event: 20
pin: 1, rising_edges: 1, nsec: 416774850, nsec_diff: 40238, log: 123, event: 21
pin: 1, rising_edges: 1, nsec: 416890480, nsec_diff: 115630, log: 124, event: 22
pin: 1, rising_edges: 1, nsec: 416893022, nsec_diff: 2542, log: 125, event: 23
pin: 0, rising_edges: 0, nsec: 417529204, nsec_diff: 636182, log: 126, event: 24
pin: 1, rising_edges: 1, nsec: 419198058, nsec_diff: 1668854, log: 128, event: 25
pin: 0, rising_edges: 0, nsec: 457926854, nsec_diff: 38728796, log: 138, event: 26
</buffered_events>
logs used: 138/350
section type: "Slow"
section count: 1
test id: 71
duration: 457 ms, 926 us, 854 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 457 ms, 926 us, 854 ns


#################### Test #72 ####################
Section count: 2, type: "Slow"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
<stream>
7dL1
85L1
</stream>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 3410, nsec_diff: 2604, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 125565252, nsec_diff: 125561842, log: 34, event: 4
pin: 1, rising_edges: 1, nsec: 125567794, nsec_diff: 2542, log: 35, event: 5
pin: 0, rising_edges: 0, nsec: 126546340, nsec_diff: 978546, log: 37, event: 6
pin: 1, rising_edges: 1, nsec: 139999038, nsec_diff: 13452698, log: 41, event: 7
pin: 0, rising_edges: 0, nsec: 142556104, nsec_diff: 2557066, log: 43, event: 8
pin: 1, rising_edges: 1, nsec: 168952542, nsec_diff: 26396438, log: 50, event: 9
pin: 0, rising_edges: 0, nsec: 168954960, nsec_diff: 2418, log: 51, event: 10
pin: 0, rising_edges: 1, nsec: 406965644, nsec_diff: 238010684, log: 111, event: 11
pin: 1, rising_edges: 1, nsec: 539549854, nsec_diff: 132584210, log: 144, event: 12
pin: 0, rising_edges: 0, nsec: 539555806, nsec_diff: 5952, log: 145, event: 13
pin: 0, rising_edges: 1, nsec: 836639470, nsec_diff: 297083664, log: 219, event: 14
pin: 1, rising_edges: 1, nsec: 849906788, nsec_diff: 13267318, log: 224, event: 15
pin: 0, rising_edges: 0, nsec: 849956326, nsec_diff: 49538, log: 225, event: 16
pin: 1, rising_edges: 1, nsec: 959689506, nsec_diff: 109733180, log: 253, event: 17
pin: 0, rising_edges: 0, nsec: 959721374, nsec_diff: 31868, log: 254, event: 18
</buffered_events>
logs used: 254/350
section type: "Slow"
section count: 2
test id: 72
duration: 959 ms, 721 us, 374 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 959 ms, 721 us, 374 ns


#################### Test #73 ####################
Section count: 3, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 75458278, nsec_diff: 75457472, log: 21, event: 3
pin: 0, rising_edges: 0, nsec: 116387144, nsec_diff: 40928866, log: 32, event: 4
pin: 1, rising_edges: 1, nsec: 174752952, nsec_diff: 58365808, log: 48, event: 5
pin: 0, rising_edges: 0, nsec: 174780108, nsec_diff: 27156, log: 49, event: 6
pin: 1, rising_edges: 1, nsec: 182914570, nsec_diff: 8134462, log: 52, event: 7
pin: 0, rising_edges: 0, nsec: 188757078, nsec_diff: 5842508, log: 54, event: 8
pin: 1, rising_edges: 1, nsec: 225663508, nsec_diff: 36906430, log: 64, event: 9
pin: 0, rising_edges: 0, nsec: 307759134, nsec_diff: 82095626, log: 85, event: 10
</buffered_events>
logs used: 85/350
section type: "Slow"
section count: 3
test id: 73
duration: 307 ms, 759 us, 134 ns
</test>


#################### Test #74 ####################
Section count: 4, type: "Slow"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
<stream>
fL1
13H1
</stream>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 5971964, nsec_diff: 5969732, log: 5, event: 4
pin: 0, rising_edges: 0, nsec: 5975560, nsec_diff: 3596, log: 6, event: 5
pin: 0, rising_edges: 1, nsec: 175412818, nsec_diff: 169437258, log: 49, event: 6
pin: 1, rising_edges: 1, nsec: 712591916, nsec_diff: 537179098, log: 182, event: 7
pin: 0, rising_edges: 0, nsec: 712600224, nsec_diff: 8308, log: 183, event: 8
</buffered_events>
logs used: 183/350
section type: "Slow"
section count: 4
test id: 74
duration: 712 ms, 600 us, 224 ns
</test>


#################### Test #75 ####################
Section count: 5, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 780890, nsec_diff: 780084, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 786842, nsec_diff: 5952, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 63534934, nsec_diff: 62748092, log: 20, event: 5
pin: 1, rising_edges: 1, nsec: 63896642, nsec_diff: 361708, log: 21, event: 6
pin: 0, rising_edges: 0, nsec: 63899060, nsec_diff: 2418, log: 22, event: 7
pin: 1, rising_edges: 1, nsec: 66248798, nsec_diff: 2349738, log: 24, event: 8
pin: 0, rising_edges: 0, nsec: 66301870, nsec_diff: 53072, log: 25, event: 9
pin: 1, rising_edges: 1, nsec: 67213704, nsec_diff: 911834, log: 26, event: 10
pin: 0, rising_edges: 0, nsec: 95819636, nsec_diff: 28605932, log: 34, event: 11
pin: 1, rising_edges: 1, nsec: 312167024, nsec_diff: 216347388, log: 88, event: 12
pin: 0, rising_edges: 0, nsec: 360968774, nsec_diff: 48801750, log: 101, event: 13
</buffered_events>
logs used: 101/350
section type: "Slow"
section count: 5
test id: 75
duration: 360 ms, 968 us, 774 ns
</test>


#################### Test #76 ####################
Section count: 6, type: "Slow"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
<stream>
</stream>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 4842200, nsec_diff: 4841518, log: 4, event: 3
pin: 0, rising_edges: 1, nsec: 289116416, nsec_diff: 284274216, log: 75, event: 4
pin: 0, rising_edges: 1, nsec: 495375660, nsec_diff: 206259244, log: 126, event: 5
pin: 0, rising_edges: 1, nsec: 593261508, nsec_diff: 97885848, log: 152, event: 6
pin: 1, rising_edges: 1, nsec: 609414182, nsec_diff: 16152674, log: 156, event: 7
pin: 0, rising_edges: 0, nsec: 609450762, nsec_diff: 36580, log: 157, event: 8
pin: 1, rising_edges: 1, nsec: 814580924, nsec_diff: 205130162, log: 209, event: 9
pin: 0, rising_edges: 0, nsec: 814583342, nsec_diff: 2418, log: 210, event: 10
pin: 1, rising_edges: 1, nsec: 860081236, nsec_diff: 45497894, log: 222, event: 11
pin: 0, rising_edges: 0, nsec: 860664408, nsec_diff: 583172, log: 223, event: 12
pin: 1, rising_edges: 1, nsec: 861155696, nsec_diff: 491288, log: 224, event: 13
pin: 0, rising_edges: 0, nsec: 863159102, nsec_diff: 2003406, log: 226, event: 14
pin: 1, rising_edges: 1, nsec: 866929508, nsec_diff: 3770406, log: 228, event: 15
</buffered_events>
logs used: 228/350
section type: "Slow"
section count: 6
test id: 76
duration: 866 ms, 929 us, 508 ns
</test>


#################### Test #77 ####################
Section count: 7, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
<stream>
</stream>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 61556948, nsec_diff: 61556142, log: 18, event: 3
pin: 1, rising_edges: 1, nsec: 62420484, nsec_diff: 863536, log: 19, event: 4
pin: 0, rising_edges: 0, nsec: 94422156, nsec_diff: 32001672, log: 28, event: 5
pin: 1, rising_edges: 1, nsec: 174374256, nsec_diff: 79952100, log: 48, event: 6
pin: 0, rising_edges: 0, nsec: 174376674, nsec_diff: 2418, log: 49, event: 7
pin: 1, rising_edges: 1, nsec: 174701864, nsec_diff: 325190, log: 50, event: 8
pin: 0, rising_edges: 0, nsec: 434529170, nsec_diff: 259827306, log: 115, event: 9
pin: 1, rising_edges: 1, nsec: 457816866, nsec_diff: 23287696, log: 122, event: 10
pin: 0, rising_edges: 0, nsec: 457819284, nsec_diff: 2418, log: 123, event: 11
pin: 1, rising_edges: 1, nsec: 463653112, nsec_diff: 5833828, log: 126, event: 12
pin: 0, rising_edges: 0, nsec: 481320260, nsec_diff: 17667148, log: 131, event: 13
pin: 1, rising_edges: 1, nsec: 546316596, nsec_diff: 64996336, log: 148, event: 14
pin: 0, rising_edges: 0, nsec: 606945342, nsec_diff: 60628746, log: 164, event: 15
</buffered_events>
logs used: 164/350
section type: "Slow"
section count: 7
test id: 77
duration: 606 ms, 945 us, 342 ns
</test>


#################### Test #78 ####################
Section count: 8, type: "Slow"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
<stream>
</stream>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 199020, nsec_diff: 196788, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 36904012, nsec_diff: 36704992, log: 14, event: 5
pin: 1, rising_edges: 1, nsec: 97319974, nsec_diff: 60415962, log: 29, event: 6
pin: 0, rising_edges: 0, nsec: 109695980, nsec_diff: 12376006, log: 33, event: 7
pin: 1, rising_edges: 1, nsec: 109698398, nsec_diff: 2418, log: 34, event: 8
pin: 0, rising_edges: 0, nsec: 156320848, nsec_diff: 46622450, log: 47, event: 9
pin: 1, rising_edges: 1, nsec: 156323266, nsec_diff: 2418, log: 48, event: 10
pin: 0, rising_edges: 0, nsec: 157978418, nsec_diff: 1655152, log: 49, event: 11
pin: 1, rising_edges: 1, nsec: 702371898, nsec_diff: 544393480, log: 184, event: 12
pin: 0, rising_edges: 0, nsec: 702388452, nsec_diff: 16554, log: 185, event: 13
pin: 1, rising_edges: 1, nsec: 721586566, nsec_diff: 19198114, log: 191, event: 14
pin: 0, rising_edges: 0, nsec: 721634926, nsec_diff: 48360, log: 192, event: 15
pin: 1, rising_edges: 1, nsec: 724434660, nsec_diff: 2799734, log: 194, event: 16
pin: 0, rising_edges: 0, nsec: 724856446, nsec_diff: 421786, log: 195, event: 17
pin: 1, rising_edges: 1, nsec: 728732872, nsec_diff: 3876426, log: 197, event: 18
pin: 0, rising_edges: 0, nsec: 729293662, nsec_diff: 560790, log: 198, event: 19
pin: 1, rising_edges: 1, nsec: 732215908, nsec_diff: 2922246, log: 200, event: 20
pin: 0, rising_edges: 0, nsec: 962753360, nsec_diff: 230537452, log: 257, event: 21
</buffered_events>
logs used: 257/350
section type: "Slow"
section count: 8
test id: 78
duration: 962 ms, 753 us, 360 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 962 ms, 753 us, 360 ns


#################### Test #79 ####################
Section count: 9, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
<stream>
40H1
6aL0
81H1
174L0
26dH1
381L0
</stream>
<button_not_stable/>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 57474, nsec_diff: 56792, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 133797302, nsec_diff: 133739828, log: 36, event: 4
pin: 1, rising_edges: 1, nsec: 238743648, nsec_diff: 104946346, log: 63, event: 5
pin: 0, rising_edges: 0, nsec: 238757846, nsec_diff: 14198, log: 64, event: 6
pin: 0, rising_edges: 1, nsec: 293854084, nsec_diff: 55096238, log: 79, event: 7
pin: 1, rising_edges: 1, nsec: 294315922, nsec_diff: 461838, log: 80, event: 8
pin: 0, rising_edges: 0, nsec: 581369660, nsec_diff: 287053738, log: 152, event: 9
pin: 1, rising_edges: 1, nsec: 966669218, nsec_diff: 385299558, log: 247, event: 10
pin: 0, rising_edges: 0, nsec: 974337192, nsec_diff: 7667974, log: 250, event: 11
</buffered_events>
logs used: 250/350
section type: "Slow"
section count: 9
test id: 79
duration: 1974 ms, 337 us, 192 ns
</test>


 $$\   $$\ $$$$$$$$\ $$\      $$\       $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\  $$$$$$$\  $$$$$$$\  $$\ 
 $$$\  $$ |$$  _____|$$ | $\  $$ |      $$  __$$\ $$  _____|$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |
 $$$$\ $$ |$$ |      $$ |$$$\ $$ |      $$ |  $$ |$$ |      $$ /  \__|$$ /  $$ |$$ |  $$ |$$ |  $$ |$$ |
 $$ $$\$$ |$$$$$\    $$ $$ $$\$$ |      $$$$$$$  |$$$$$\    $$ |      $$ |  $$ |$$$$$$$  |$$ |  $$ |$$ |
 $$ \$$$$ |$$  __|   $$$$  _$$$$ |      $$  __$$< $$  __|   $$ |      $$ |  $$ |$$  __$$< $$ |  $$ |\__|
 $$ |\$$$ |$$ |      $$$  / \$$$ |      $$ |  $$ |$$ |      $$ |  $$\ $$ |  $$ |$$ |  $$ |$$ |  $$ |    
 $$ | \$$ |$$$$$$$$\ $$  /   \$$ |      $$ |  $$ |$$$$$$$$\ \$$$$$$  | $$$$$$  |$$ |  $$ |$$$$$$$  |$$\ 
 \__|  \__|\________|\__/     \__|      \__|  \__|\________| \______/  \______/ \__|  \__|\_______/ \__|
 New session record for max duration! Bounce them buttons.
 1974 ms, 337 us, 192 ns
  _   _  ____ _______       _        _     _        _ 
 | \ | |/ __ \__   __|     | |      | |   | |      | |
 |  \| | |  | | | |     ___| |_ __ _| |__ | | ___  | |
 | . \` | |  | | | |    / __| __/ _\` | '_ \| |/ _ \ | |
 | |\  | |__| | | |    \__ \ || (_| | |_) | |  __/ |_|
 |_| \_|\____/  |_|    |___/\__\__,_|_.__/|_|\___| (_)
 Test did not end stable. Check your wiring? Demon button?



#################### Test #80 ####################
Section count: 10, type: "Slow"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
<stream>
77H1
</stream>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 917898778, nsec_diff: 917897972, log: 228, event: 3
</buffered_events>
logs used: 228/350
section type: "Slow"
section count: 10
test id: 80
duration: 917 ms, 898 us, 778 ns
</test>


#################### Test #81 ####################
Section count: 11, type: "Slow"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
User input detected. Test delayed.
</test>


Standard section types: 
  Argument | Description
  -------------------------------------------------------------------
    n      |  Normal: normal press & release. p(norm), rl(norm)
  
    f      |  Fast: Fast press & release. p(FAST),rl(FAST)
    f,n    |  FAST/norm: Fast press, normal release. p(FAST) rl(norm)
    n,f    |  norm/FAST: Normal press, fast release. p(norm),rl(FAST)
  
    s      |  Slow: Slow press & release. p(SLOW),rl(SLOW)
    s,n    |  SLOW/norm: Slow press, normal release. p(SLOW),rl(norm)
    n,s    |    
    smk_wp |  Smack WP: Smack housing while button held pressed.
    smk_wr |  Smack WR: Smack housing while button released.

You can also create a custom section type: 
  c <id of 1-9 chars> [optional description]
  Max of 63 chars total for line. You can embed title and meta data in the description.


########################################################################

<section_start>
  <id>_f</id>
  <description>Fast: Fast press & release. p(FAST),rl(FAST)</description>
</section_start>

#################### Test #81 ####################
Section count: 1, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 2, nsec: 359166, nsec_diff: 358360, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 361708, nsec_diff: 2542, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 370016, nsec_diff: 8308, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 380680, nsec_diff: 10664, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 384276, nsec_diff: 3596, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 386694, nsec_diff: 2418, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 389112, nsec_diff: 2418, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 391530, nsec_diff: 2418, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 443424, nsec_diff: 51894, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 3785596, nsec_diff: 3342172, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 3797438, nsec_diff: 11842, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 3839908, nsec_diff: 42470, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 3954236, nsec_diff: 114328, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 5765628, nsec_diff: 1811392, log: 17, event: 16
</buffered_events>
logs used: 17/350
section type: "Fast"
section count: 1
test id: 81
duration: 5 ms, 765 us, 628 ns
</test>


#################### Test #82 ####################
Section count: 2, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 4650, nsec_diff: 2418, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Fast"
section count: 2
test id: 82
duration: 4 us, 650 ns
</test>


#################### Test #83 ####################
Section count: 3, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 82553682, nsec_diff: 82552876, log: 23, event: 3
pin: 0, rising_edges: 0, nsec: 82559634, nsec_diff: 5952, log: 24, event: 4
pin: 1, rising_edges: 1, nsec: 82628020, nsec_diff: 68386, log: 25, event: 5
pin: 0, rising_edges: 0, nsec: 94300760, nsec_diff: 11672740, log: 29, event: 6
</buffered_events>
logs used: 29/350
section type: "Fast"
section count: 3
test id: 83
duration: 94 ms, 300 us, 760 ns
</test>


#################### Test #84 ####################
Section count: 4, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 5766, nsec_diff: 5084, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 155558, nsec_diff: 149792, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 195796, nsec_diff: 40238, log: 5, event: 5
pin: 0, rising_edges: 1, nsec: 16696848, nsec_diff: 16501052, log: 10, event: 6
pin: 1, rising_edges: 1, nsec: 16721648, nsec_diff: 24800, log: 11, event: 7
pin: 0, rising_edges: 0, nsec: 16724066, nsec_diff: 2418, log: 12, event: 8
pin: 0, rising_edges: 1, nsec: 16933936, nsec_diff: 209870, log: 13, event: 9
pin: 0, rising_edges: 1, nsec: 16947080, nsec_diff: 13144, log: 14, event: 10
pin: 0, rising_edges: 1, nsec: 16963758, nsec_diff: 16678, log: 15, event: 11
pin: 0, rising_edges: 1, nsec: 16972190, nsec_diff: 8432, log: 16, event: 12
pin: 0, rising_edges: 1, nsec: 16980622, nsec_diff: 8432, log: 17, event: 13
pin: 1, rising_edges: 1, nsec: 16986574, nsec_diff: 5952, log: 18, event: 14
pin: 0, rising_edges: 0, nsec: 16990170, nsec_diff: 3596, log: 19, event: 15
pin: 1, rising_edges: 1, nsec: 16997300, nsec_diff: 7130, log: 20, event: 16
</buffered_events>
logs used: 20/350
section type: "Fast"
section count: 4
test id: 84
duration: 16 ms, 997 us, 300 ns
</test>


#################### Test #85 ####################
Section count: 5, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 1618448, nsec_diff: 1617642, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 2331200, nsec_diff: 712752, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Fast"
section count: 5
test id: 85
duration: 2 ms, 331 us, 200 ns
</test>


#################### Test #86 ####################
Section count: 6, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 15252, nsec_diff: 13020, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Fast"
section count: 6
test id: 86
duration: 15 us, 252 ns
</test>


#################### Test #87 ####################
Section count: 7, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 385082, nsec_diff: 384276, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 458180, nsec_diff: 73098, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Fast"
section count: 7
test id: 87
duration: 458 us, 180 ns
</test>


#################### Test #88 ####################
Section count: 8, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 323826, nsec_diff: 323020, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 14249026, nsec_diff: 13925200, log: 7, event: 4
pin: 1, rising_edges: 1, nsec: 14300920, nsec_diff: 51894, log: 8, event: 5
pin: 0, rising_edges: 0, nsec: 14337500, nsec_diff: 36580, log: 9, event: 6
pin: 0, rising_edges: 1, nsec: 15473278, nsec_diff: 1135778, log: 10, event: 7
pin: 1, rising_edges: 1, nsec: 15525172, nsec_diff: 51894, log: 11, event: 8
pin: 0, rising_edges: 0, nsec: 15578244, nsec_diff: 53072, log: 12, event: 9
pin: 1, rising_edges: 1, nsec: 15760896, nsec_diff: 182652, log: 13, event: 10
pin: 0, rising_edges: 0, nsec: 16050746, nsec_diff: 289850, log: 14, event: 11
pin: 1, rising_edges: 1, nsec: 16287152, nsec_diff: 236406, log: 16, event: 12
pin: 0, rising_edges: 0, nsec: 16293104, nsec_diff: 5952, log: 17, event: 13
pin: 1, rising_edges: 1, nsec: 16359134, nsec_diff: 66030, log: 18, event: 14
pin: 0, rising_edges: 0, nsec: 16429876, nsec_diff: 70742, log: 19, event: 15
pin: 1, rising_edges: 1, nsec: 16472346, nsec_diff: 42470, log: 20, event: 16
pin: 0, rising_edges: 0, nsec: 16474764, nsec_diff: 2418, log: 21, event: 17
pin: 1, rising_edges: 1, nsec: 16536082, nsec_diff: 61318, log: 22, event: 18
pin: 0, rising_edges: 0, nsec: 16576196, nsec_diff: 40114, log: 23, event: 19
pin: 1, rising_edges: 1, nsec: 16641048, nsec_diff: 64852, log: 24, event: 20
pin: 0, rising_edges: 0, nsec: 16764800, nsec_diff: 123752, log: 25, event: 21
pin: 1, rising_edges: 1, nsec: 16819050, nsec_diff: 54250, log: 26, event: 22
pin: 0, rising_edges: 0, nsec: 16827358, nsec_diff: 8308, log: 27, event: 23
pin: 1, rising_edges: 1, nsec: 17019434, nsec_diff: 192076, log: 28, event: 24
pin: 0, rising_edges: 0, nsec: 17063082, nsec_diff: 43648, log: 29, event: 25
pin: 0, rising_edges: 1, nsec: 17317716, nsec_diff: 254634, log: 30, event: 26
pin: 1, rising_edges: 1, nsec: 17430866, nsec_diff: 113150, log: 31, event: 27
pin: 0, rising_edges: 0, nsec: 17433284, nsec_diff: 2418, log: 32, event: 28
pin: 1, rising_edges: 1, nsec: 17499314, nsec_diff: 66030, log: 33, event: 29
pin: 0, rising_edges: 0, nsec: 17501732, nsec_diff: 2418, log: 34, event: 30
pin: 0, rising_edges: 1, nsec: 17845894, nsec_diff: 344162, log: 35, event: 31
pin: 0, rising_edges: 1, nsec: 17899090, nsec_diff: 53196, log: 36, event: 32
pin: 0, rising_edges: 1, nsec: 17926370, nsec_diff: 27280, log: 37, event: 33
pin: 1, rising_edges: 1, nsec: 17970018, nsec_diff: 43648, log: 38, event: 34
pin: 1, rising_edges: 1, nsec: 17972560, nsec_diff: 2542, log: 39, event: 35
pin: 0, rising_edges: 0, nsec: 17977334, nsec_diff: 4774, log: 40, event: 36
pin: 1, rising_edges: 1, nsec: 18071636, nsec_diff: 94302, log: 41, event: 37
pin: 0, rising_edges: 0, nsec: 27172058, nsec_diff: 9100422, log: 44, event: 38
pin: 0, rising_edges: 1, nsec: 27437294, nsec_diff: 265236, log: 45, event: 39
pin: 1, rising_edges: 1, nsec: 32031122, nsec_diff: 4593828, log: 47, event: 40
pin: 0, rising_edges: 0, nsec: 32033540, nsec_diff: 2418, log: 48, event: 41
pin: 1, rising_edges: 1, nsec: 32040670, nsec_diff: 7130, log: 49, event: 42
pin: 0, rising_edges: 0, nsec: 32061936, nsec_diff: 21266, log: 50, event: 43
pin: 1, rising_edges: 1, nsec: 32590486, nsec_diff: 528550, log: 52, event: 44
pin: 0, rising_edges: 0, nsec: 32629422, nsec_diff: 38936, log: 53, event: 45
pin: 1, rising_edges: 1, nsec: 33831044, nsec_diff: 1201622, log: 54, event: 46
pin: 0, rising_edges: 0, nsec: 33833462, nsec_diff: 2418, log: 55, event: 47
pin: 1, rising_edges: 1, nsec: 33923052, nsec_diff: 89590, log: 56, event: 48
pin: 0, rising_edges: 0, nsec: 33930182, nsec_diff: 7130, log: 57, event: 49
pin: 0, rising_edges: 1, nsec: 34025786, nsec_diff: 95604, log: 58, event: 50
pin: 1, rising_edges: 1, nsec: 34121266, nsec_diff: 95480, log: 59, event: 51
pin: 0, rising_edges: 0, nsec: 34123684, nsec_diff: 2418, log: 60, event: 52
pin: 1, rising_edges: 1, nsec: 34164976, nsec_diff: 41292, log: 61, event: 53
pin: 0, rising_edges: 0, nsec: 34169750, nsec_diff: 4774, log: 62, event: 54
pin: 1, rising_edges: 1, nsec: 34188660, nsec_diff: 18910, log: 63, event: 55
pin: 0, rising_edges: 0, nsec: 34191078, nsec_diff: 2418, log: 64, event: 56
pin: 1, rising_edges: 1, nsec: 34233548, nsec_diff: 42470, log: 65, event: 57
</buffered_events>
logs used: 65/350
section type: "Fast"
section count: 8
test id: 88
duration: 34 ms, 233 us, 548 ns
</test>


#################### Test #89 ####################
Section count: 9, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 4650, nsec_diff: 2418, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 8370, nsec_diff: 3720, log: 5, event: 5
pin: 0, rising_edges: 1, nsec: 10912, nsec_diff: 2542, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 13330, nsec_diff: 2418, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 18104, nsec_diff: 4774, log: 8, event: 8
pin: 0, rising_edges: 1, nsec: 20646, nsec_diff: 2542, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 23064, nsec_diff: 2418, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 25482, nsec_diff: 2418, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 27900, nsec_diff: 2418, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 32674, nsec_diff: 4774, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 35092, nsec_diff: 2418, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 61070, nsec_diff: 25978, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 90582, nsec_diff: 29512, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 501766, nsec_diff: 411184, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 892924, nsec_diff: 391158, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 895466, nsec_diff: 2542, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 939114, nsec_diff: 43648, log: 20, event: 20
pin: 1, rising_edges: 2, nsec: 1060510, nsec_diff: 121396, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 1063052, nsec_diff: 2542, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 1065470, nsec_diff: 2418, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 1069066, nsec_diff: 3596, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 1071484, nsec_diff: 2418, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 1073902, nsec_diff: 2418, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 1084566, nsec_diff: 10664, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 1088162, nsec_diff: 3596, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 1092936, nsec_diff: 4774, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 1098888, nsec_diff: 5952, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 3716466, nsec_diff: 2617578, log: 31, event: 31
</buffered_events>
logs used: 31/350
section type: "Fast"
section count: 9
test id: 89
duration: 3 ms, 716 us, 466 ns
</test>


#################### Test #90 ####################
Section count: 10, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 32860, nsec_diff: 32178, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 44702, nsec_diff: 11842, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 47120, nsec_diff: 2418, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 61318, nsec_diff: 14198, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 412424, nsec_diff: 351106, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 1218238, nsec_diff: 805814, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 3682676, nsec_diff: 2464438, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 4431636, nsec_diff: 748960, log: 11, event: 10
pin: 1, rising_edges: 1, nsec: 4462326, nsec_diff: 30690, log: 12, event: 11
pin: 0, rising_edges: 0, nsec: 4464744, nsec_diff: 2418, log: 13, event: 12
pin: 1, rising_edges: 1, nsec: 4488366, nsec_diff: 23622, log: 14, event: 13
pin: 0, rising_edges: 0, nsec: 4503742, nsec_diff: 15376, log: 15, event: 14
pin: 1, rising_edges: 1, nsec: 4530898, nsec_diff: 27156, log: 16, event: 15
pin: 0, rising_edges: 0, nsec: 4533316, nsec_diff: 2418, log: 17, event: 16
pin: 1, rising_edges: 1, nsec: 4548692, nsec_diff: 15376, log: 18, event: 17
pin: 0, rising_edges: 0, nsec: 4551110, nsec_diff: 2418, log: 19, event: 18
pin: 0, rising_edges: 1, nsec: 21352552, nsec_diff: 16801442, log: 24, event: 19
pin: 0, rising_edges: 1, nsec: 21371586, nsec_diff: 19034, log: 25, event: 20
pin: 0, rising_edges: 1, nsec: 21418892, nsec_diff: 47306, log: 26, event: 21
pin: 0, rising_edges: 1, nsec: 21439104, nsec_diff: 20212, log: 27, event: 22
pin: 0, rising_edges: 1, nsec: 21448714, nsec_diff: 9610, log: 28, event: 23
pin: 0, rising_edges: 1, nsec: 21452434, nsec_diff: 3720, log: 29, event: 24
pin: 0, rising_edges: 1, nsec: 21457332, nsec_diff: 4898, log: 30, event: 25
pin: 0, rising_edges: 1, nsec: 21466942, nsec_diff: 9610, log: 31, event: 26
pin: 1, rising_edges: 1, nsec: 21475250, nsec_diff: 8308, log: 32, event: 27
pin: 0, rising_edges: 0, nsec: 21477668, nsec_diff: 2418, log: 33, event: 28
pin: 1, rising_edges: 1, nsec: 21491866, nsec_diff: 14198, log: 34, event: 29
pin: 0, rising_edges: 0, nsec: 21494284, nsec_diff: 2418, log: 35, event: 30
pin: 1, rising_edges: 1, nsec: 21508482, nsec_diff: 14198, log: 36, event: 31
pin: 0, rising_edges: 0, nsec: 21510900, nsec_diff: 2418, log: 37, event: 32
pin: 1, rising_edges: 1, nsec: 21522742, nsec_diff: 11842, log: 38, event: 33
pin: 0, rising_edges: 0, nsec: 21525160, nsec_diff: 2418, log: 39, event: 34
pin: 1, rising_edges: 1, nsec: 21533468, nsec_diff: 8308, log: 40, event: 35
pin: 0, rising_edges: 0, nsec: 21537064, nsec_diff: 3596, log: 41, event: 36
pin: 1, rising_edges: 1, nsec: 21555974, nsec_diff: 18910, log: 42, event: 37
</buffered_events>
logs used: 42/350
section type: "Fast"
section count: 10
test id: 90
duration: 21 ms, 555 us, 974 ns
</test>


#################### Test #91 ####################
Section count: 11, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 11
test id: 91
duration: 806 ns
</test>


#################### Test #92 ####################
Section count: 12, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 1063610, nsec_diff: 1062804, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 33777972, nsec_diff: 32714362, log: 12, event: 4
pin: 0, rising_edges: 0, nsec: 33800416, nsec_diff: 22444, log: 13, event: 5
pin: 1, rising_edges: 1, nsec: 33820504, nsec_diff: 20088, log: 14, event: 6
pin: 0, rising_edges: 0, nsec: 33822922, nsec_diff: 2418, log: 15, event: 7
pin: 1, rising_edges: 1, nsec: 33857146, nsec_diff: 34224, log: 16, event: 8
</buffered_events>
logs used: 16/350
section type: "Fast"
section count: 12
test id: 92
duration: 33 ms, 857 us, 146 ns
</test>


#################### Test #93 ####################
Section count: 13, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 1331016, nsec_diff: 1330210, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 1333434, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 1338208, nsec_diff: 4774, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 1511436, nsec_diff: 173228, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Fast"
section count: 13
test id: 93
duration: 1 ms, 511 us, 436 ns
</test>


#################### Test #94 ####################
Section count: 14, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 2, nsec: 5642, nsec_diff: 4960, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 8060, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 22258, nsec_diff: 14198, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 1291026, nsec_diff: 1268768, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 27332886, nsec_diff: 26041860, log: 13, event: 7
</buffered_events>
logs used: 13/350
section type: "Fast"
section count: 14
test id: 94
duration: 27 ms, 332 us, 886 ns
</test>


#################### Test #95 ####################
Section count: 15, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 328662, nsec_diff: 327856, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 331080, nsec_diff: 2418, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 339388, nsec_diff: 8308, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 346518, nsec_diff: 7130, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 380742, nsec_diff: 34224, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 2694520, nsec_diff: 2313778, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 2698116, nsec_diff: 3596, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 2700534, nsec_diff: 2418, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 2705432, nsec_diff: 4898, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 2709028, nsec_diff: 3596, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 2711446, nsec_diff: 2418, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 2725768, nsec_diff: 14322, log: 14, event: 14
pin: 1, rising_edges: 2, nsec: 2765882, nsec_diff: 40114, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 2768300, nsec_diff: 2418, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 2770718, nsec_diff: 2418, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 2773136, nsec_diff: 2418, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 2782622, nsec_diff: 9486, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 2785040, nsec_diff: 2418, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 2839290, nsec_diff: 54250, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 2841708, nsec_diff: 2418, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 2871344, nsec_diff: 29636, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 2943264, nsec_diff: 71920, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 2945682, nsec_diff: 2418, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 2990632, nsec_diff: 44950, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 3029692, nsec_diff: 39060, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 3073464, nsec_diff: 43772, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 3083074, nsec_diff: 9610, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 3139680, nsec_diff: 56606, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 3142098, nsec_diff: 2418, log: 31, event: 31
pin: 1, rising_edges: 1, nsec: 3162186, nsec_diff: 20088, log: 32, event: 32
pin: 0, rising_edges: 0, nsec: 3164604, nsec_diff: 2418, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 3177748, nsec_diff: 13144, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 3193248, nsec_diff: 15500, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 3268702, nsec_diff: 75454, log: 36, event: 36
pin: 0, rising_edges: 0, nsec: 3271120, nsec_diff: 2418, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 3285442, nsec_diff: 14322, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 3289038, nsec_diff: 3596, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 3291456, nsec_diff: 2418, log: 40, event: 40
</buffered_events>
logs used: 40/350
section type: "Fast"
section count: 15
test id: 95
duration: 3 ms, 291 us, 456 ns
</test>


#################### Test #96 ####################
Section count: 16, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 16
test id: 96
duration: 806 ns
</test>


#################### Test #97 ####################
Section count: 17, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 84692, nsec_diff: 83886, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 87110, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 98952, nsec_diff: 11842, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 101370, nsec_diff: 2418, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 131006, nsec_diff: 29636, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 353710, nsec_diff: 222704, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 356128, nsec_diff: 2418, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 389174, nsec_diff: 33046, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 391592, nsec_diff: 2418, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 404612, nsec_diff: 13020, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 408208, nsec_diff: 3596, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 435364, nsec_diff: 27156, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 437782, nsec_diff: 2418, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 454460, nsec_diff: 16678, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 496930, nsec_diff: 42470, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 499348, nsec_diff: 2418, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 616032, nsec_diff: 116684, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 618450, nsec_diff: 2418, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 657386, nsec_diff: 38936, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 659928, nsec_diff: 2542, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 704754, nsec_diff: 44826, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 759004, nsec_diff: 54250, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 761422, nsec_diff: 2418, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 776922, nsec_diff: 15500, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 789942, nsec_diff: 13020, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 797072, nsec_diff: 7130, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 819516, nsec_diff: 22444, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 821934, nsec_diff: 2418, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 834954, nsec_diff: 13020, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 837372, nsec_diff: 2418, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 848036, nsec_diff: 10664, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 851632, nsec_diff: 3596, log: 34, event: 34
pin: 1, rising_edges: 1, nsec: 876432, nsec_diff: 24800, log: 35, event: 35
pin: 0, rising_edges: 0, nsec: 937750, nsec_diff: 61318, log: 36, event: 36
pin: 1, rising_edges: 1, nsec: 946058, nsec_diff: 8308, log: 37, event: 37
pin: 0, rising_edges: 0, nsec: 1049784, nsec_diff: 103726, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 1068694, nsec_diff: 18910, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 1071112, nsec_diff: 2418, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 1077188, nsec_diff: 6076, log: 41, event: 41
pin: 1, rising_edges: 1, nsec: 1081962, nsec_diff: 4774, log: 42, event: 42
pin: 0, rising_edges: 0, nsec: 1084380, nsec_diff: 2418, log: 43, event: 43
pin: 1, rising_edges: 1, nsec: 1104468, nsec_diff: 20088, log: 44, event: 44
pin: 0, rising_edges: 0, nsec: 1109242, nsec_diff: 4774, log: 45, event: 45
pin: 1, rising_edges: 1, nsec: 1179984, nsec_diff: 70742, log: 46, event: 46
pin: 0, rising_edges: 0, nsec: 1182402, nsec_diff: 2418, log: 47, event: 47
pin: 1, rising_edges: 1, nsec: 1190710, nsec_diff: 8308, log: 48, event: 48
pin: 0, rising_edges: 0, nsec: 1276766, nsec_diff: 86056, log: 49, event: 49
pin: 0, rising_edges: 1, nsec: 1293444, nsec_diff: 16678, log: 50, event: 50
pin: 0, rising_edges: 1, nsec: 1299520, nsec_diff: 6076, log: 51, event: 51
pin: 0, rising_edges: 1, nsec: 1305596, nsec_diff: 6076, log: 52, event: 52
</buffered_events>
logs used: 52/350
section type: "Fast"
section count: 17
test id: 97
duration: 1 ms, 305 us, 596 ns
</test>


#################### Test #98 ####################
Section count: 18, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 12834, nsec_diff: 12152, log: 3, event: 3
pin: 1, rising_edges: 2, nsec: 15252, nsec_diff: 2418, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 17670, nsec_diff: 2418, log: 5, event: 5
pin: 0, rising_edges: 1, nsec: 26102, nsec_diff: 8432, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 33356, nsec_diff: 7254, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 37076, nsec_diff: 3720, log: 8, event: 8
pin: 0, rising_edges: 1, nsec: 40796, nsec_diff: 3720, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 45570, nsec_diff: 4774, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 47988, nsec_diff: 2418, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 52762, nsec_diff: 4774, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 55180, nsec_diff: 2418, log: 13, event: 13
pin: 0, rising_edges: 2, nsec: 57722, nsec_diff: 2542, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 66154, nsec_diff: 8432, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 78120, nsec_diff: 11966, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 80662, nsec_diff: 2542, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 85436, nsec_diff: 4774, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 87854, nsec_diff: 2418, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 96162, nsec_diff: 8308, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 98580, nsec_diff: 2418, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 101122, nsec_diff: 2542, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 103664, nsec_diff: 2542, log: 23, event: 23
pin: 0, rising_edges: 1, nsec: 107384, nsec_diff: 3720, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 109802, nsec_diff: 2418, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 112220, nsec_diff: 2418, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 114638, nsec_diff: 2418, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 117056, nsec_diff: 2418, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 130076, nsec_diff: 13020, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 132494, nsec_diff: 2418, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 137268, nsec_diff: 4774, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 139686, nsec_diff: 2418, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 142104, nsec_diff: 2418, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 144522, nsec_diff: 2418, log: 34, event: 34
pin: 1, rising_edges: 1, nsec: 150474, nsec_diff: 5952, log: 35, event: 35
pin: 0, rising_edges: 0, nsec: 152892, nsec_diff: 2418, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 155434, nsec_diff: 2542, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 157976, nsec_diff: 2542, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 161572, nsec_diff: 3596, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 163990, nsec_diff: 2418, log: 40, event: 40
pin: 1, rising_edges: 1, nsec: 172298, nsec_diff: 8308, log: 41, event: 41
pin: 0, rising_edges: 0, nsec: 174716, nsec_diff: 2418, log: 42, event: 42
pin: 0, rising_edges: 1, nsec: 177258, nsec_diff: 2542, log: 43, event: 43
pin: 0, rising_edges: 1, nsec: 179800, nsec_diff: 2542, log: 44, event: 44
pin: 0, rising_edges: 1, nsec: 182342, nsec_diff: 2542, log: 45, event: 45
pin: 0, rising_edges: 1, nsec: 187240, nsec_diff: 4898, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 189658, nsec_diff: 2418, log: 47, event: 47
pin: 0, rising_edges: 0, nsec: 192076, nsec_diff: 2418, log: 48, event: 48
pin: 0, rising_edges: 1, nsec: 194618, nsec_diff: 2542, log: 49, event: 49
pin: 1, rising_edges: 1, nsec: 199392, nsec_diff: 4774, log: 50, event: 50
pin: 0, rising_edges: 0, nsec: 201810, nsec_diff: 2418, log: 51, event: 51
pin: 1, rising_edges: 1, nsec: 204228, nsec_diff: 2418, log: 52, event: 52
pin: 0, rising_edges: 0, nsec: 206646, nsec_diff: 2418, log: 53, event: 53
pin: 0, rising_edges: 1, nsec: 209188, nsec_diff: 2542, log: 54, event: 54
pin: 0, rising_edges: 1, nsec: 212908, nsec_diff: 3720, log: 55, event: 55
pin: 0, rising_edges: 1, nsec: 218984, nsec_diff: 6076, log: 56, event: 56
pin: 0, rising_edges: 1, nsec: 222704, nsec_diff: 3720, log: 57, event: 57
pin: 0, rising_edges: 1, nsec: 226424, nsec_diff: 3720, log: 58, event: 58
pin: 0, rising_edges: 1, nsec: 232500, nsec_diff: 6076, log: 59, event: 59
pin: 1, rising_edges: 1, nsec: 236096, nsec_diff: 3596, log: 60, event: 60
pin: 0, rising_edges: 0, nsec: 238514, nsec_diff: 2418, log: 61, event: 61
pin: 0, rising_edges: 2, nsec: 242234, nsec_diff: 3720, log: 62, event: 62
pin: 0, rising_edges: 1, nsec: 276582, nsec_diff: 34348, log: 63, event: 63
pin: 0, rising_edges: 1, nsec: 280302, nsec_diff: 3720, log: 64, event: 64
pin: 0, rising_edges: 1, nsec: 302870, nsec_diff: 22568, log: 65, event: 65
pin: 0, rising_edges: 1, nsec: 1817964, nsec_diff: 1515094, log: 66, event: 66
pin: 1, rising_edges: 1, nsec: 1820382, nsec_diff: 2418, log: 67, event: 67
pin: 0, rising_edges: 1, nsec: 1822800, nsec_diff: 2418, log: 68, event: 68
pin: 1, rising_edges: 1, nsec: 1826396, nsec_diff: 3596, log: 69, event: 69
pin: 0, rising_edges: 1, nsec: 1828814, nsec_diff: 2418, log: 70, event: 70
pin: 0, rising_edges: 2, nsec: 1831356, nsec_diff: 2542, log: 71, event: 71
pin: 1, rising_edges: 1, nsec: 1833774, nsec_diff: 2418, log: 72, event: 72
</buffered_events>
logs used: 72/350
section type: "Fast"
section count: 18
test id: 98
duration: 1 ms, 833 us, 774 ns
</test>


#################### Test #99 ####################
Section count: 19, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 736126, nsec_diff: 735320, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 744434, nsec_diff: 8308, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 746852, nsec_diff: 2418, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 755160, nsec_diff: 8308, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 757702, nsec_diff: 2542, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 832102, nsec_diff: 74400, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 840410, nsec_diff: 8308, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 842828, nsec_diff: 2418, log: 10, event: 10
pin: 1, rising_edges: 2, nsec: 845246, nsec_diff: 2418, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 892428, nsec_diff: 47182, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 1314338, nsec_diff: 421910, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 1320290, nsec_diff: 5952, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 1705558, nsec_diff: 385268, log: 15, event: 15
</buffered_events>
logs used: 15/350
section type: "Fast"
section count: 19
test id: 99
duration: 1 ms, 705 us, 558 ns
</test>


#################### Test #100 ####################
Section count: 20, type: "Fast"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 36394, nsec_diff: 35588, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 100068, nsec_diff: 63674, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Fast"
section count: 20
test id: 100
duration: 100 us, 68 ns
</test>


#################### Test #101 ####################
Section count: 21, type: "Fast"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
User input detected. Test delayed.
</test>


Standard section types: 
  Argument | Description
  -------------------------------------------------------------------
    n      |  Normal: normal press & release. p(norm), rl(norm)
  
    f      |  Fast: Fast press & release. p(FAST),rl(FAST)
    f,n    |  FAST/norm: Fast press, normal release. p(FAST) rl(norm)
    n,f    |  norm/FAST: Normal press, fast release. p(norm),rl(FAST)
  
    s      |  Slow: Slow press & release. p(SLOW),rl(SLOW)
    s,n    |  SLOW/norm: Slow press, normal release. p(SLOW),rl(norm)
    n,s    |    
    smk_wp |  Smack WP: Smack housing while button held pressed.
    smk_wr |  Smack WR: Smack housing while button released.

You can also create a custom section type: 
  c <id of 1-9 chars> [optional description]
  Max of 63 chars total for line. You can embed title and meta data in the description.


########################################################################

<section_start>
  <id>pop-norm</id>
  <description>
    Popsicle press and release normal. p(norm), r(norm)
  </description>
</section_start>

#################### Test #101 ####################
Section count: 1, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 89404, nsec_diff: 88598, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 178994, nsec_diff: 89590, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 181412, nsec_diff: 2418, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 373488, nsec_diff: 192076, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 607972, nsec_diff: 234484, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 670468, nsec_diff: 62496, log: 8, event: 8
</buffered_events>
logs used: 8/350
section type: "pop-norm"
section count: 1
test id: 101
duration: 670 us, 468 ns
</test>


#################### Test #102 ####################
Section count: 2, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 7338382, nsec_diff: 7337576, log: 4, event: 3
pin: 1, rising_edges: 1, nsec: 22977014, nsec_diff: 15638632, log: 9, event: 4
pin: 0, rising_edges: 0, nsec: 22981788, nsec_diff: 4774, log: 10, event: 5
pin: 1, rising_edges: 1, nsec: 23149126, nsec_diff: 167338, log: 11, event: 6
</buffered_events>
logs used: 11/350
section type: "pop-norm"
section count: 2
test id: 102
duration: 23 ms, 149 us, 126 ns
</test>


#################### Test #103 ####################
Section count: 3, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 3
test id: 103
duration: 806 ns
</test>


#################### Test #104 ####################
Section count: 4, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 86924, nsec_diff: 86242, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 89342, nsec_diff: 2418, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 213094, nsec_diff: 123752, log: 5, event: 5
</buffered_events>
logs used: 5/350
section type: "pop-norm"
section count: 4
test id: 104
duration: 213 us, 94 ns
</test>


#################### Test #105 ####################
Section count: 5, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 5
test id: 105
duration: 806 ns
</test>


#################### Test #106 ####################
Section count: 6, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 35278, nsec_diff: 33046, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 37696, nsec_diff: 2418, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 55428, nsec_diff: 17732, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 57846, nsec_diff: 2418, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 86180, nsec_diff: 28334, log: 8, event: 8
</buffered_events>
logs used: 8/350
section type: "pop-norm"
section count: 6
test id: 106
duration: 86 us, 180 ns
</test>


#################### Test #107 ####################
Section count: 7, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 8060620, nsec_diff: 8059814, log: 4, event: 3
pin: 1, rising_edges: 2, nsec: 8107802, nsec_diff: 47182, log: 5, event: 4
pin: 0, rising_edges: 0, nsec: 8110220, nsec_diff: 2418, log: 6, event: 5
pin: 1, rising_edges: 1, nsec: 8139298, nsec_diff: 29078, log: 8, event: 6
pin: 0, rising_edges: 0, nsec: 8175878, nsec_diff: 36580, log: 9, event: 7
pin: 1, rising_edges: 1, nsec: 8230128, nsec_diff: 54250, log: 10, event: 8
pin: 0, rising_edges: 0, nsec: 8233724, nsec_diff: 3596, log: 11, event: 9
pin: 1, rising_edges: 1, nsec: 8293864, nsec_diff: 60140, log: 12, event: 10
pin: 0, rising_edges: 0, nsec: 8296282, nsec_diff: 2418, log: 13, event: 11
pin: 1, rising_edges: 1, nsec: 8305768, nsec_diff: 9486, log: 14, event: 12
pin: 0, rising_edges: 0, nsec: 8308186, nsec_diff: 2418, log: 15, event: 13
pin: 1, rising_edges: 1, nsec: 8384818, nsec_diff: 76632, log: 16, event: 14
pin: 0, rising_edges: 0, nsec: 8413152, nsec_diff: 28334, log: 17, event: 15
pin: 0, rising_edges: 1, nsec: 8688990, nsec_diff: 275838, log: 18, event: 16
pin: 1, rising_edges: 1, nsec: 8782114, nsec_diff: 93124, log: 19, event: 17
pin: 0, rising_edges: 0, nsec: 8884662, nsec_diff: 102548, log: 20, event: 18
pin: 1, rising_edges: 1, nsec: 8984854, nsec_diff: 100192, log: 21, event: 19
pin: 0, rising_edges: 0, nsec: 9065020, nsec_diff: 80166, log: 22, event: 20
pin: 0, rising_edges: 1, nsec: 9305518, nsec_diff: 240498, log: 23, event: 21
pin: 1, rising_edges: 1, nsec: 9408066, nsec_diff: 102548, log: 24, event: 22
pin: 0, rising_edges: 0, nsec: 9451714, nsec_diff: 43648, log: 25, event: 23
pin: 1, rising_edges: 1, nsec: 9511854, nsec_diff: 60140, log: 26, event: 24
pin: 0, rising_edges: 0, nsec: 9910080, nsec_diff: 398226, log: 27, event: 25
pin: 1, rising_edges: 1, nsec: 10066816, nsec_diff: 156736, log: 28, event: 26
pin: 0, rising_edges: 0, nsec: 10131668, nsec_diff: 64852, log: 29, event: 27
pin: 1, rising_edges: 1, nsec: 10172960, nsec_diff: 41292, log: 30, event: 28
pin: 0, rising_edges: 0, nsec: 20070888, nsec_diff: 9897928, log: 33, event: 29
pin: 1, rising_edges: 1, nsec: 20073306, nsec_diff: 2418, log: 34, event: 30
pin: 0, rising_edges: 0, nsec: 20078080, nsec_diff: 4774, log: 35, event: 31
pin: 1, rising_edges: 1, nsec: 20294894, nsec_diff: 216814, log: 36, event: 32
pin: 0, rising_edges: 0, nsec: 20614938, nsec_diff: 320044, log: 38, event: 33
pin: 1, rising_edges: 1, nsec: 20642094, nsec_diff: 27156, log: 39, event: 34
pin: 0, rising_edges: 0, nsec: 20644512, nsec_diff: 2418, log: 40, event: 35
pin: 1, rising_edges: 1, nsec: 20648108, nsec_diff: 3596, log: 41, event: 36
pin: 0, rising_edges: 0, nsec: 20650526, nsec_diff: 2418, log: 42, event: 37
pin: 1, rising_edges: 1, nsec: 20661190, nsec_diff: 10664, log: 43, event: 38
pin: 0, rising_edges: 0, nsec: 20663608, nsec_diff: 2418, log: 44, event: 39
pin: 0, rising_edges: 1, nsec: 20669684, nsec_diff: 6076, log: 45, event: 40
pin: 0, rising_edges: 1, nsec: 20675760, nsec_diff: 6076, log: 46, event: 41
pin: 0, rising_edges: 1, nsec: 20700684, nsec_diff: 24924, log: 47, event: 42
pin: 1, rising_edges: 1, nsec: 20734908, nsec_diff: 34224, log: 48, event: 43
pin: 0, rising_edges: 1, nsec: 20737326, nsec_diff: 2418, log: 49, event: 44
pin: 1, rising_edges: 1, nsec: 20749168, nsec_diff: 11842, log: 50, event: 45
pin: 0, rising_edges: 0, nsec: 20766900, nsec_diff: 17732, log: 51, event: 46
pin: 1, rising_edges: 1, nsec: 20769318, nsec_diff: 2418, log: 52, event: 47
pin: 0, rising_edges: 0, nsec: 20908384, nsec_diff: 139066, log: 53, event: 48
</buffered_events>
logs used: 53/350
section type: "pop-norm"
section count: 7
test id: 107
duration: 20 ms, 908 us, 384 ns
</test>


#################### Test #108 ####################
Section count: 8, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2232, nsec_diff: 1426, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 14074, nsec_diff: 11842, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17794, nsec_diff: 3720, log: 5, event: 5
</buffered_events>
logs used: 5/350
section type: "pop-norm"
section count: 8
test id: 108
duration: 17 us, 794 ns
</test>


#################### Test #109 ####################
Section count: 9, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 9
test id: 109
duration: 806 ns
</test>


#################### Test #110 ####################
Section count: 10, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 682, nsec_diff: 682, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 55118, nsec_diff: 54436, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 65782, nsec_diff: 10664, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 82336, nsec_diff: 16554, log: 5, event: 5
</buffered_events>
logs used: 5/350
section type: "pop-norm"
section count: 10
test id: 110
duration: 82 us, 336 ns
</test>


#################### Test #111 ####################
Section count: 11, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 135346, nsec_diff: 134540, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 180172, nsec_diff: 44826, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "pop-norm"
section count: 11
test id: 111
duration: 180 us, 172 ns
</test>


#################### Test #112 ####################
Section count: 12, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 3410, nsec_diff: 2604, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 151900, nsec_diff: 148490, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "pop-norm"
section count: 12
test id: 112
duration: 151 us, 900 ns
</test>


#################### Test #113 ####################
Section count: 13, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 13
test id: 113
duration: 806 ns
</test>


#################### Test #114 ####################
Section count: 14, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 14
test id: 114
duration: 806 ns
</test>


#################### Test #115 ####################
Section count: 15, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 3622350, nsec_diff: 3621544, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 3716776, nsec_diff: 94426, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 10749808, nsec_diff: 7033032, log: 7, event: 5
pin: 0, rising_edges: 0, nsec: 37626436, nsec_diff: 26876628, log: 15, event: 6
</buffered_events>
logs used: 15/350
section type: "pop-norm"
section count: 15
test id: 115
duration: 37 ms, 626 us, 436 ns
</test>


#################### Test #116 ####################
Section count: 16, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 16
test id: 116
duration: 806 ns
</test>


#################### Test #117 ####################
Section count: 17, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 21705890, nsec_diff: 21705084, log: 8, event: 3
pin: 0, rising_edges: 0, nsec: 21708308, nsec_diff: 2418, log: 9, event: 4
pin: 1, rising_edges: 1, nsec: 21880358, nsec_diff: 172050, log: 10, event: 5
pin: 0, rising_edges: 0, nsec: 21882776, nsec_diff: 2418, log: 11, event: 6
pin: 1, rising_edges: 1, nsec: 22057182, nsec_diff: 174406, log: 12, event: 7
pin: 0, rising_edges: 0, nsec: 22071380, nsec_diff: 14198, log: 13, event: 8
pin: 1, rising_edges: 1, nsec: 22073798, nsec_diff: 2418, log: 14, event: 9
pin: 0, rising_edges: 0, nsec: 22108022, nsec_diff: 34224, log: 15, event: 10
pin: 0, rising_edges: 1, nsec: 23005844, nsec_diff: 897822, log: 16, event: 11
pin: 1, rising_edges: 1, nsec: 23133130, nsec_diff: 127286, log: 17, event: 12
pin: 0, rising_edges: 0, nsec: 23135548, nsec_diff: 2418, log: 18, event: 13
pin: 0, rising_edges: 1, nsec: 23291230, nsec_diff: 155682, log: 19, event: 14
pin: 0, rising_edges: 1, nsec: 23293772, nsec_diff: 2542, log: 20, event: 15
pin: 0, rising_edges: 1, nsec: 23296314, nsec_diff: 2542, log: 21, event: 16
pin: 0, rising_edges: 1, nsec: 23304746, nsec_diff: 8432, log: 22, event: 17
pin: 0, rising_edges: 1, nsec: 23307288, nsec_diff: 2542, log: 23, event: 18
pin: 0, rising_edges: 1, nsec: 23309830, nsec_diff: 2542, log: 24, event: 19
pin: 0, rising_edges: 1, nsec: 23312372, nsec_diff: 2542, log: 25, event: 20
pin: 0, rising_edges: 1, nsec: 23316092, nsec_diff: 3720, log: 26, event: 21
pin: 1, rising_edges: 1, nsec: 23318510, nsec_diff: 2418, log: 27, event: 22
pin: 0, rising_edges: 0, nsec: 23320928, nsec_diff: 2418, log: 28, event: 23
pin: 0, rising_edges: 1, nsec: 23328182, nsec_diff: 7254, log: 29, event: 24
pin: 0, rising_edges: 1, nsec: 23331902, nsec_diff: 3720, log: 30, event: 25
pin: 0, rising_edges: 1, nsec: 23342690, nsec_diff: 10788, log: 31, event: 26
pin: 0, rising_edges: 1, nsec: 23348766, nsec_diff: 6076, log: 32, event: 27
pin: 0, rising_edges: 2, nsec: 23351308, nsec_diff: 2542, log: 33, event: 28
pin: 0, rising_edges: 1, nsec: 23353850, nsec_diff: 2542, log: 34, event: 29
pin: 0, rising_edges: 1, nsec: 23356392, nsec_diff: 2542, log: 35, event: 30
pin: 0, rising_edges: 1, nsec: 23360112, nsec_diff: 3720, log: 36, event: 31
pin: 0, rising_edges: 2, nsec: 23362654, nsec_diff: 2542, log: 37, event: 32
pin: 1, rising_edges: 1, nsec: 23365072, nsec_diff: 2418, log: 38, event: 33
pin: 0, rising_edges: 2, nsec: 23367490, nsec_diff: 2418, log: 39, event: 34
pin: 0, rising_edges: 2, nsec: 23370032, nsec_diff: 2542, log: 40, event: 35
pin: 1, rising_edges: 1, nsec: 23372450, nsec_diff: 2418, log: 41, event: 36
pin: 0, rising_edges: 1, nsec: 23374868, nsec_diff: 2418, log: 42, event: 37
pin: 1, rising_edges: 1, nsec: 23378464, nsec_diff: 3596, log: 43, event: 38
pin: 0, rising_edges: 0, nsec: 69250528, nsec_diff: 45872064, log: 56, event: 39
</buffered_events>
logs used: 56/350
section type: "pop-norm"
section count: 17
test id: 117
duration: 69 ms, 250 us, 528 ns
</test>


#################### Test #118 ####################
Section count: 18, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "pop-norm"
section count: 18
test id: 118
duration: 806 ns
</test>


#################### Test #119 ####################
Section count: 19, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.2.3
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 230764, nsec_diff: 229958, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 325066, nsec_diff: 94302, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 538346, nsec_diff: 213280, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 821128, nsec_diff: 282782, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 1071050, nsec_diff: 249922, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 1152394, nsec_diff: 81344, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 1199576, nsec_diff: 47182, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 1331574, nsec_diff: 131998, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 1470640, nsec_diff: 139066, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 1473058, nsec_diff: 2418, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 1475476, nsec_diff: 2418, log: 13, event: 13
</buffered_events>
logs used: 13/350
section type: "pop-norm"
section count: 19
test id: 119
duration: 1 ms, 475 us, 476 ns
</test>


#################### Test #120 ####################
Section count: 20, type: "pop-norm"
Waiting for stable input... good.
          _                     
         | |                    
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.2.3
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, nsec_diff: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 806, nsec_diff: 806, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 725524, nsec_diff: 724718, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 865768, nsec_diff: 140244, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 1323018, nsec_diff: 457250, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 3147802, nsec_diff: 1824784, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 3747466, nsec_diff: 599664, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 3752240, nsec_diff: 4774, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 3799422, nsec_diff: 47182, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 3801840, nsec_diff: 2418, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 3838420, nsec_diff: 36580, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 3840838, nsec_diff: 2418, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 3957522, nsec_diff: 116684, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 3959940, nsec_diff: 2418, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 3989452, nsec_diff: 29512, log: 15, event: 15
</buffered_events>
logs used: 15/350
section type: "pop-norm"
section count: 20
test id: 120
duration: 3 ms, 989 us, 452 ns
</test>


#################### Test #121 ####################
Section count: 21, type: "pop-norm"
Waiting for stable input... good.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>


`;