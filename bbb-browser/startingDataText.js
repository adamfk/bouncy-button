const startingDataText = `
>>> Drag and drop a file here, or copy paste the contents of the file here. <<<
>>> You can also load the below real data sample. <<<

<test_session_start/>
<session_title>
Sample - banggood 1276758 rocker black
</session_title>

<session_description>
Test info for this data available here: https://github.com/adamfk/bouncy-button-data/issues/8
</session_description>

Bouncy Button Benchmark. Version 0.3.0
Arduino board: Uno
MCU: atmega328p
MCU ID: 0x593536313539142A1D
F_CPU: 16000000


#################### Test #1 ####################
Section count: 1, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 2, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 227062, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 232062, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 234562, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 243000, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 245625, log: 10, event: 10
pin: 0, rising_edges: 2, nsec: 248250, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 250750, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 255625, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 258250, log: 14, event: 14
pin: 1, rising_edges: 2, nsec: 261937, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 264562, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 269437, log: 17, event: 17
pin: 0, rising_edges: 2, nsec: 272062, log: 18, event: 18
pin: 1, rising_edges: 2, nsec: 274562, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 277187, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 291562, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 294187, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 299187, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 301687, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 308937, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 311562, log: 26, event: 26
pin: 1, rising_edges: 2, nsec: 314062, log: 27, event: 27
pin: 1, rising_edges: 2, nsec: 316687, log: 28, event: 28
pin: 1, rising_edges: 2, nsec: 319312, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 321812, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 329187, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 338937, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 353312, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 355812, log: 34, event: 34
pin: 0, rising_edges: 2, nsec: 358437, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 363312, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 365812, log: 37, event: 37
pin: 1, rising_edges: 1, nsec: 368312, log: 38, event: 38
pin: 0, rising_edges: 0, nsec: 370812, log: 39, event: 39
pin: 0, rising_edges: 1, nsec: 374625, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 385562, log: 41, event: 41
pin: 0, rising_edges: 1, nsec: 388187, log: 42, event: 42
pin: 1, rising_edges: 1, nsec: 390687, log: 43, event: 43
pin: 0, rising_edges: 0, nsec: 403875, log: 44, event: 44
pin: 0, rising_edges: 1, nsec: 407687, log: 45, event: 45
pin: 0, rising_edges: 2, nsec: 410312, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 412812, log: 47, event: 47
pin: 0, rising_edges: 1, nsec: 415312, log: 48, event: 48
pin: 0, rising_edges: 2, nsec: 417937, log: 49, event: 49
pin: 1, rising_edges: 1, nsec: 421625, log: 50, event: 50
pin: 1, rising_edges: 2, nsec: 424250, log: 51, event: 51
pin: 1, rising_edges: 1, nsec: 426875, log: 52, event: 52
pin: 0, rising_edges: 0, nsec: 429375, log: 53, event: 53
pin: 0, rising_edges: 1, nsec: 434375, log: 54, event: 54
pin: 0, rising_edges: 1, nsec: 446500, log: 55, event: 55
pin: 1, rising_edges: 2, nsec: 449000, log: 56, event: 56
pin: 0, rising_edges: 0, nsec: 451500, log: 57, event: 57
pin: 0, rising_edges: 1, nsec: 455312, log: 58, event: 58
pin: 0, rising_edges: 1, nsec: 457937, log: 59, event: 59
pin: 0, rising_edges: 1, nsec: 467687, log: 60, event: 60
pin: 0, rising_edges: 2, nsec: 470312, log: 61, event: 61
pin: 0, rising_edges: 1, nsec: 472937, log: 62, event: 62
pin: 0, rising_edges: 2, nsec: 475562, log: 63, event: 63
pin: 1, rising_edges: 3, nsec: 478062, log: 64, event: 64
pin: 0, rising_edges: 0, nsec: 480562, log: 65, event: 65
pin: 0, rising_edges: 1, nsec: 493875, log: 66, event: 66
pin: 0, rising_edges: 1, nsec: 497687, log: 67, event: 67
pin: 0, rising_edges: 1, nsec: 603625, log: 68, event: 68
pin: 0, rising_edges: 1, nsec: 970812, log: 69, event: 69
pin: 0, rising_edges: 1, nsec: 973437, log: 70, event: 70
pin: 0, rising_edges: 1, nsec: 977250, log: 71, event: 71
pin: 0, rising_edges: 1, nsec: 981062, log: 72, event: 72
pin: 0, rising_edges: 1, nsec: 984875, log: 73, event: 73
pin: 0, rising_edges: 1, nsec: 987500, log: 74, event: 74
pin: 0, rising_edges: 1, nsec: 990125, log: 75, event: 75
</buffered_events>
logs used: 75/350
section type: "Normal"
section count: 1
test id: 1
duration: 990 us, 125 ns
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
 990 us, 125 ns


#################### Test #2 ####################
Section count: 2, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 2
test id: 2
duration: 812 ns
</test>


#################### Test #3 ####################
Section count: 3, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 1, nsec: 186687, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 192750, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 203687, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 206187, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 208687, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 212375, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 215000, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 221187, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 223812, log: 14, event: 14
pin: 1, rising_edges: 2, nsec: 231062, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 233562, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 236187, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 247000, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 249500, log: 19, event: 19
pin: 0, rising_edges: 1, nsec: 252125, log: 20, event: 20
pin: 1, rising_edges: 2, nsec: 258187, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 308187, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 315437, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 320312, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 328750, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 334812, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 338625, log: 27, event: 27
pin: 0, rising_edges: 2, nsec: 341250, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 343750, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 346250, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 350062, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 352687, log: 32, event: 32
pin: 1, rising_edges: 2, nsec: 355187, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 357687, log: 34, event: 34
pin: 1, rising_edges: 1, nsec: 367312, log: 35, event: 35
pin: 0, rising_edges: 1, nsec: 371000, log: 36, event: 36
pin: 1, rising_edges: 1, nsec: 378250, log: 37, event: 37
pin: 1, rising_edges: 2, nsec: 380875, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 383500, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 386000, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 388625, log: 41, event: 41
pin: 1, rising_edges: 2, nsec: 391125, log: 42, event: 42
pin: 0, rising_edges: 0, nsec: 393625, log: 43, event: 43
pin: 0, rising_edges: 2, nsec: 396250, log: 44, event: 44
pin: 0, rising_edges: 2, nsec: 398875, log: 45, event: 45
pin: 0, rising_edges: 1, nsec: 401500, log: 46, event: 46
pin: 0, rising_edges: 1, nsec: 404125, log: 47, event: 47
pin: 1, rising_edges: 3, nsec: 406625, log: 48, event: 48
pin: 1, rising_edges: 2, nsec: 409250, log: 49, event: 49
pin: 0, rising_edges: 0, nsec: 411750, log: 50, event: 50
pin: 0, rising_edges: 1, nsec: 416750, log: 51, event: 51
pin: 0, rising_edges: 1, nsec: 420562, log: 52, event: 52
pin: 0, rising_edges: 1, nsec: 423187, log: 53, event: 53
pin: 0, rising_edges: 1, nsec: 427000, log: 54, event: 54
pin: 0, rising_edges: 1, nsec: 430812, log: 55, event: 55
pin: 0, rising_edges: 1, nsec: 434625, log: 56, event: 56
pin: 0, rising_edges: 1, nsec: 586875, log: 57, event: 57
pin: 1, rising_edges: 1, nsec: 639250, log: 58, event: 58
pin: 0, rising_edges: 0, nsec: 641750, log: 59, event: 59
pin: 1, rising_edges: 1, nsec: 802187, log: 60, event: 60
pin: 1, rising_edges: 1, nsec: 804812, log: 61, event: 61
pin: 0, rising_edges: 0, nsec: 831062, log: 62, event: 62
pin: 1, rising_edges: 1, nsec: 902437, log: 63, event: 63
pin: 0, rising_edges: 0, nsec: 904937, log: 64, event: 64
pin: 1, rising_edges: 1, nsec: 912187, log: 65, event: 65
pin: 0, rising_edges: 0, nsec: 914687, log: 66, event: 66
pin: 0, rising_edges: 2, nsec: 977875, log: 67, event: 67
</buffered_events>
logs used: 67/350
section type: "Normal"
section count: 3
test id: 3
duration: 977 us, 875 ns
</test>


#################### Test #4 ####################
Section count: 4, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 3562, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 4
test id: 4
duration: 3 us, 562 ns
</test>


#################### Test #5 ####################
Section count: 5, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 16875, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 36125, log: 7, event: 7
pin: 0, rising_edges: 2, nsec: 38750, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 41250, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 185062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 192312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 200750, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 206812, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 211687, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 221437, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 231062, log: 16, event: 16
pin: 1, rising_edges: 2, nsec: 233687, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 236187, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 243437, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 253062, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 255687, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 258312, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 260812, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 307250, log: 24, event: 24
pin: 1, rising_edges: 2, nsec: 312125, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 317000, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 319625, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 325687, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 331750, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 337812, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 342687, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 345312, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 351375, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 355062, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 362437, log: 35, event: 35
pin: 1, rising_edges: 2, nsec: 364937, log: 36, event: 36
pin: 0, rising_edges: 0, nsec: 369812, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 372437, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 376125, log: 39, event: 39
pin: 1, rising_edges: 1, nsec: 378750, log: 40, event: 40
pin: 0, rising_edges: 2, nsec: 381250, log: 41, event: 41
pin: 1, rising_edges: 1, nsec: 388500, log: 42, event: 42
pin: 0, rising_edges: 0, nsec: 392187, log: 43, event: 43
pin: 1, rising_edges: 2, nsec: 394687, log: 44, event: 44
pin: 0, rising_edges: 1, nsec: 397187, log: 45, event: 45
pin: 0, rising_edges: 1, nsec: 399812, log: 46, event: 46
pin: 0, rising_edges: 1, nsec: 402437, log: 47, event: 47
pin: 1, rising_edges: 3, nsec: 404937, log: 48, event: 48
pin: 0, rising_edges: 0, nsec: 407437, log: 49, event: 49
pin: 0, rising_edges: 1, nsec: 410062, log: 50, event: 50
pin: 0, rising_edges: 1, nsec: 412687, log: 51, event: 51
pin: 0, rising_edges: 1, nsec: 415312, log: 52, event: 52
pin: 0, rising_edges: 2, nsec: 417937, log: 53, event: 53
pin: 0, rising_edges: 1, nsec: 420562, log: 54, event: 54
pin: 0, rising_edges: 1, nsec: 432687, log: 55, event: 55
pin: 1, rising_edges: 1, nsec: 449437, log: 56, event: 56
pin: 0, rising_edges: 2, nsec: 451937, log: 57, event: 57
pin: 0, rising_edges: 2, nsec: 454562, log: 58, event: 58
pin: 0, rising_edges: 1, nsec: 457187, log: 59, event: 59
pin: 0, rising_edges: 1, nsec: 463375, log: 60, event: 60
pin: 1, rising_edges: 1, nsec: 468250, log: 61, event: 61
pin: 0, rising_edges: 0, nsec: 470750, log: 62, event: 62
pin: 0, rising_edges: 1, nsec: 476937, log: 63, event: 63
pin: 0, rising_edges: 1, nsec: 480750, log: 64, event: 64
pin: 0, rising_edges: 1, nsec: 553437, log: 65, event: 65
pin: 1, rising_edges: 1, nsec: 566625, log: 66, event: 66
pin: 0, rising_edges: 0, nsec: 569125, log: 67, event: 67
pin: 0, rising_edges: 1, nsec: 818750, log: 68, event: 68
pin: 1, rising_edges: 2, nsec: 821250, log: 69, event: 69
pin: 0, rising_edges: 0, nsec: 857000, log: 70, event: 70
pin: 1, rising_edges: 1, nsec: 864250, log: 71, event: 71
pin: 0, rising_edges: 0, nsec: 866750, log: 72, event: 72
pin: 1, rising_edges: 1, nsec: 884687, log: 73, event: 73
pin: 0, rising_edges: 0, nsec: 887187, log: 74, event: 74
pin: 1, rising_edges: 1, nsec: 896812, log: 75, event: 75
pin: 0, rising_edges: 0, nsec: 899312, log: 76, event: 76
pin: 0, rising_edges: 1, nsec: 905500, log: 77, event: 77
pin: 0, rising_edges: 1, nsec: 908125, log: 78, event: 78
pin: 1, rising_edges: 1, nsec: 916562, log: 79, event: 79
pin: 0, rising_edges: 0, nsec: 920250, log: 80, event: 80
pin: 1, rising_edges: 1, nsec: 925125, log: 81, event: 81
pin: 0, rising_edges: 0, nsec: 927625, log: 82, event: 82
pin: 1, rising_edges: 1, nsec: 930125, log: 83, event: 83
pin: 0, rising_edges: 0, nsec: 932625, log: 84, event: 84
pin: 1, rising_edges: 1, nsec: 941062, log: 85, event: 85
pin: 0, rising_edges: 0, nsec: 943562, log: 86, event: 86
</buffered_events>
logs used: 86/350
section type: "Normal"
section count: 5
test id: 5
duration: 943 us, 562 ns
</test>


#################### Test #6 ####################
Section count: 6, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 6
test id: 6
duration: 812 ns
</test>


#################### Test #7 ####################
Section count: 7, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 16875, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 211875, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 217937, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 224000, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 231250, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 237312, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 239812, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 242312, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 244812, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 250875, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 258125, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 267750, log: 17, event: 17
pin: 1, rising_edges: 3, nsec: 270250, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 272750, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 275250, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 315750, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 320625, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 323250, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 326937, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 334187, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 338000, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 340500, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 347750, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 353812, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 356437, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 360125, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 370937, log: 32, event: 32
pin: 0, rising_edges: 1, nsec: 373562, log: 33, event: 33
pin: 0, rising_edges: 2, nsec: 376187, log: 34, event: 34
pin: 1, rising_edges: 1, nsec: 378687, log: 35, event: 35
pin: 0, rising_edges: 0, nsec: 385937, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 388562, log: 37, event: 37
pin: 0, rising_edges: 2, nsec: 391187, log: 38, event: 38
pin: 1, rising_edges: 3, nsec: 393687, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 396187, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 398812, log: 41, event: 41
pin: 0, rising_edges: 1, nsec: 405000, log: 42, event: 42
pin: 1, rising_edges: 2, nsec: 411062, log: 43, event: 43
pin: 0, rising_edges: 0, nsec: 413562, log: 44, event: 44
pin: 0, rising_edges: 1, nsec: 416187, log: 45, event: 45
pin: 0, rising_edges: 2, nsec: 418812, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 451000, log: 47, event: 47
pin: 0, rising_edges: 0, nsec: 453500, log: 48, event: 48
pin: 0, rising_edges: 1, nsec: 460875, log: 49, event: 49
pin: 1, rising_edges: 1, nsec: 466937, log: 50, event: 50
pin: 0, rising_edges: 0, nsec: 469437, log: 51, event: 51
pin: 0, rising_edges: 1, nsec: 482750, log: 52, event: 52
pin: 0, rising_edges: 1, nsec: 978187, log: 53, event: 53
pin: 0, rising_edges: 1, nsec: 1077000, log: 54, event: 54
</buffered_events>
logs used: 54/350
section type: "Normal"
section count: 7
test id: 7
duration: 1 ms, 77 us, 0 ns
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
 1 ms, 77 us, 0 ns


#################### Test #8 ####################
Section count: 8, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 8
test id: 8
duration: 812 ns
</test>


#################### Test #9 ####################
Section count: 9, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 179562, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 184437, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 191812, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 194312, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 198125, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 200625, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 203125, log: 12, event: 12
pin: 0, rising_edges: 2, nsec: 210500, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 243875, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 303375, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 310625, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 316687, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 323937, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 330000, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 337250, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 339750, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 348187, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 350812, log: 23, event: 23
pin: 0, rising_edges: 1, nsec: 353312, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 361875, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 364500, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 371875, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 374500, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 377125, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 379750, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 382375, log: 31, event: 31
pin: 1, rising_edges: 1, nsec: 386062, log: 32, event: 32
pin: 0, rising_edges: 0, nsec: 388562, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 391187, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 393812, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 397500, log: 36, event: 36
pin: 1, rising_edges: 2, nsec: 400125, log: 37, event: 37
pin: 0, rising_edges: 2, nsec: 402625, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 411062, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 413562, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 416187, log: 41, event: 41
pin: 1, rising_edges: 1, nsec: 421062, log: 42, event: 42
pin: 0, rising_edges: 0, nsec: 423562, log: 43, event: 43
pin: 1, rising_edges: 1, nsec: 765687, log: 44, event: 44
pin: 1, rising_edges: 1, nsec: 768312, log: 45, event: 45
pin: 0, rising_edges: 0, nsec: 794562, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 864750, log: 47, event: 47
pin: 0, rising_edges: 0, nsec: 867250, log: 48, event: 48
</buffered_events>
logs used: 48/350
section type: "Normal"
section count: 9
test id: 9
duration: 867 us, 250 ns
</test>


#################### Test #10 ####################
Section count: 10, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2250, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 15437, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 10
test id: 10
duration: 15 us, 437 ns
</test>


#################### Test #11 ####################
Section count: 11, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 200937, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 205812, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 213062, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 219125, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 224000, log: 10, event: 10
pin: 1, rising_edges: 2, nsec: 233625, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 236125, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 254062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 313562, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 318437, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 325687, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 332937, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 340187, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 346375, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 348875, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 351375, log: 21, event: 21
pin: 0, rising_edges: 2, nsec: 354000, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 360062, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 366125, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 374562, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 381812, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 384437, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 391812, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 394437, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 398250, log: 30, event: 30
pin: 0, rising_edges: 2, nsec: 400875, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 403500, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 485562, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 488062, log: 34, event: 34
pin: 1, rising_edges: 1, nsec: 494125, log: 35, event: 35
pin: 0, rising_edges: 0, nsec: 496625, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 908937, log: 37, event: 37
pin: 1, rising_edges: 1, nsec: 911437, log: 38, event: 38
pin: 0, rising_edges: 0, nsec: 932937, log: 39, event: 39
pin: 0, rising_edges: 1, nsec: 1013937, log: 40, event: 40
</buffered_events>
logs used: 40/350
section type: "Normal"
section count: 11
test id: 11
duration: 1 ms, 13 us, 937 ns
</test>


#################### Test #12 ####################
Section count: 12, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 12
test id: 12
duration: 812 ns
</test>


#################### Test #13 ####################
Section count: 13, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 7000, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 27562, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 30187, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 32687, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 36375, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 44812, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 54437, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 56937, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 185312, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 191375, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 198625, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 207062, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 210750, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 218125, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 243187, log: 19, event: 19
pin: 0, rising_edges: 1, nsec: 245687, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 252937, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 308875, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 313750, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 321125, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 323625, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 328500, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 333375, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 340625, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 344312, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 346937, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 350625, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 353125, log: 32, event: 32
pin: 0, rising_edges: 1, nsec: 355750, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 358375, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 366937, log: 35, event: 35
pin: 0, rising_edges: 1, nsec: 369562, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 379312, log: 37, event: 37
pin: 0, rising_edges: 2, nsec: 381937, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 398687, log: 39, event: 39
pin: 0, rising_edges: 2, nsec: 401187, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 403812, log: 41, event: 41
pin: 0, rising_edges: 1, nsec: 406437, log: 42, event: 42
pin: 0, rising_edges: 2, nsec: 409062, log: 43, event: 43
pin: 0, rising_edges: 1, nsec: 412875, log: 44, event: 44
pin: 0, rising_edges: 1, nsec: 415500, log: 45, event: 45
pin: 0, rising_edges: 1, nsec: 428812, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 503750, log: 47, event: 47
pin: 0, rising_edges: 1, nsec: 506250, log: 48, event: 48
pin: 1, rising_edges: 1, nsec: 831750, log: 49, event: 49
pin: 0, rising_edges: 0, nsec: 834250, log: 50, event: 50
pin: 1, rising_edges: 1, nsec: 836750, log: 51, event: 51
pin: 0, rising_edges: 0, nsec: 857062, log: 52, event: 52
</buffered_events>
logs used: 52/350
section type: "Normal"
section count: 13
test id: 13
duration: 857 us, 62 ns
</test>


#################### Test #14 ####################
Section count: 14, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 2250, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 14250, log: 4, event: 4
</buffered_events>
logs used: 4/350
section type: "Normal"
section count: 14
test id: 14
duration: 14 us, 250 ns
</test>


#################### Test #15 ####################
Section count: 15, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 16750, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 39687, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 44562, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 47062, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 52062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 54562, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 188875, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 194937, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 202187, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 209437, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 214312, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 222875, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 245562, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 249250, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 257687, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 311250, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 317312, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 323375, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 330625, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 337875, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 340500, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 343000, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 345625, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 348125, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 355500, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 358000, log: 31, event: 31
pin: 1, rising_edges: 1, nsec: 360625, log: 32, event: 32
pin: 0, rising_edges: 0, nsec: 363125, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 368000, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 370500, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 373000, log: 36, event: 36
pin: 0, rising_edges: 0, nsec: 375500, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 381687, log: 38, event: 38
pin: 0, rising_edges: 1, nsec: 384312, log: 39, event: 39
pin: 0, rising_edges: 1, nsec: 386937, log: 40, event: 40
pin: 0, rising_edges: 3, nsec: 389562, log: 41, event: 41
pin: 1, rising_edges: 1, nsec: 394437, log: 42, event: 42
pin: 1, rising_edges: 1, nsec: 397062, log: 43, event: 43
pin: 0, rising_edges: 1, nsec: 399562, log: 44, event: 44
pin: 0, rising_edges: 2, nsec: 402187, log: 45, event: 45
pin: 0, rising_edges: 2, nsec: 404812, log: 46, event: 46
pin: 1, rising_edges: 2, nsec: 407312, log: 47, event: 47
pin: 0, rising_edges: 0, nsec: 409812, log: 48, event: 48
pin: 1, rising_edges: 1, nsec: 420625, log: 49, event: 49
pin: 0, rising_edges: 0, nsec: 423125, log: 50, event: 50
pin: 1, rising_edges: 1, nsec: 431562, log: 51, event: 51
pin: 0, rising_edges: 0, nsec: 434062, log: 52, event: 52
pin: 1, rising_edges: 1, nsec: 440125, log: 53, event: 53
pin: 0, rising_edges: 0, nsec: 442625, log: 54, event: 54
pin: 0, rising_edges: 1, nsec: 489187, log: 55, event: 55
pin: 1, rising_edges: 1, nsec: 833687, log: 56, event: 56
pin: 0, rising_edges: 0, nsec: 863500, log: 57, event: 57
pin: 1, rising_edges: 1, nsec: 933687, log: 58, event: 58
pin: 0, rising_edges: 0, nsec: 936187, log: 59, event: 59
pin: 1, rising_edges: 1, nsec: 944625, log: 60, event: 60
pin: 0, rising_edges: 0, nsec: 947125, log: 61, event: 61
pin: 0, rising_edges: 1, nsec: 949750, log: 62, event: 62
</buffered_events>
logs used: 62/350
section type: "Normal"
section count: 15
test id: 15
duration: 949 us, 750 ns
</test>


#################### Test #16 ####################
Section count: 16, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 16
test id: 16
duration: 812 ns
</test>


#################### Test #17 ####################
Section count: 17, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 16750, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 30187, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 32687, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 189562, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 195625, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 204062, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 210125, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 215000, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 224625, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 227125, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 246250, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 251125, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 260750, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 309562, log: 19, event: 19
pin: 1, rising_edges: 2, nsec: 315625, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 321687, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 327875, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 330375, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 336437, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 341312, log: 25, event: 25
pin: 1, rising_edges: 2, nsec: 343937, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 346437, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 354875, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 357500, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 361187, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 368437, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 372125, log: 32, event: 32
pin: 1, rising_edges: 2, nsec: 380562, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 383062, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 385687, log: 35, event: 35
pin: 0, rising_edges: 1, nsec: 388312, log: 36, event: 36
pin: 1, rising_edges: 1, nsec: 394375, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 396875, log: 38, event: 38
pin: 0, rising_edges: 2, nsec: 399500, log: 39, event: 39
pin: 1, rising_edges: 1, nsec: 402000, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 404500, log: 41, event: 41
pin: 0, rising_edges: 2, nsec: 407125, log: 42, event: 42
pin: 1, rising_edges: 1, nsec: 431000, log: 43, event: 43
pin: 0, rising_edges: 0, nsec: 433500, log: 44, event: 44
pin: 1, rising_edges: 1, nsec: 487062, log: 45, event: 45
pin: 0, rising_edges: 0, nsec: 489562, log: 46, event: 46
pin: 1, rising_edges: 1, nsec: 859000, log: 47, event: 47
pin: 1, rising_edges: 1, nsec: 861625, log: 48, event: 48
pin: 0, rising_edges: 0, nsec: 878375, log: 49, event: 49
</buffered_events>
logs used: 49/350
section type: "Normal"
section count: 17
test id: 17
duration: 878 us, 375 ns
</test>


#################### Test #18 ####################
Section count: 18, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 18
test id: 18
duration: 812 ns
</test>


#################### Test #19 ####################
Section count: 19, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 203312, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 209375, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 217812, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 223875, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 228750, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 231375, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 237437, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 239937, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 248375, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 255625, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 265250, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 314062, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 320250, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 322750, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 327625, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 336062, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 339750, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 361250, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 367312, log: 24, event: 24
pin: 1, rising_edges: 2, nsec: 375750, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 381812, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 389187, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 391812, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 403937, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Normal"
section count: 19
test id: 19
duration: 403 us, 937 ns
</test>


#################### Test #20 ####################
Section count: 20, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 20
test id: 20
duration: 812 ns
</test>


#################### Test #21 ####################
Section count: 21, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 193812, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 198687, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 204750, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 213187, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 218062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 226500, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 229000, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 238625, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 241125, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 249562, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 260375, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 267750, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 270250, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 309562, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 315625, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 319312, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 327750, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 330375, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 334062, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 341437, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 343937, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 346437, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 349062, log: 28, event: 28
pin: 1, rising_edges: 2, nsec: 355125, log: 29, event: 29
pin: 0, rising_edges: 2, nsec: 357625, log: 30, event: 30
pin: 1, rising_edges: 2, nsec: 367250, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 372125, log: 32, event: 32
pin: 0, rising_edges: 1, nsec: 381875, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 393875, log: 34, event: 34
pin: 0, rising_edges: 0, nsec: 396375, log: 35, event: 35
pin: 0, rising_edges: 1, nsec: 403750, log: 36, event: 36
pin: 0, rising_edges: 1, nsec: 408750, log: 37, event: 37
pin: 1, rising_edges: 1, nsec: 906437, log: 38, event: 38
pin: 0, rising_edges: 0, nsec: 930312, log: 39, event: 39
pin: 1, rising_edges: 1, nsec: 1012375, log: 40, event: 40
pin: 0, rising_edges: 0, nsec: 1014875, log: 41, event: 41
</buffered_events>
logs used: 41/350
section type: "Normal"
section count: 21
test id: 21
duration: 1 ms, 14 us, 875 ns
</test>


#################### Test #22 ####################
Section count: 22, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 22
test id: 22
duration: 812 ns
</test>


#################### Test #23 ####################
Section count: 23, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 29937, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 32437, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 200000, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 206062, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 213312, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 220562, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 223187, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 225687, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 234250, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 256937, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 259562, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 262062, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 269312, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 313375, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 319437, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 325500, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 332750, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 340000, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 348437, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 352125, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 360562, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 366625, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 373875, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 376500, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 381375, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 387437, log: 31, event: 31
pin: 0, rising_edges: 2, nsec: 389937, log: 32, event: 32
pin: 0, rising_edges: 1, nsec: 392562, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 402312, log: 34, event: 34
pin: 1, rising_edges: 2, nsec: 404812, log: 35, event: 35
pin: 0, rising_edges: 0, nsec: 407312, log: 36, event: 36
pin: 1, rising_edges: 2, nsec: 943000, log: 37, event: 37
pin: 0, rising_edges: 0, nsec: 945500, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 948000, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 950500, log: 40, event: 40
</buffered_events>
logs used: 40/350
section type: "Normal"
section count: 23
test id: 23
duration: 950 us, 500 ns
</test>


#################### Test #24 ####################
Section count: 24, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 24
test id: 24
duration: 812 ns
</test>


#################### Test #25 ####################
Section count: 25, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 7000, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 203312, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 209375, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 216625, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 223875, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 227562, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 247875, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 252750, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 268312, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 313562, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 319625, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 324500, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 332937, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 336625, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 339250, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 345312, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 347812, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 358625, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 362437, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 364937, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 373375, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 379437, log: 26, event: 26
pin: 0, rising_edges: 2, nsec: 388000, log: 27, event: 27
pin: 0, rising_edges: 3, nsec: 390625, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 403937, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Normal"
section count: 25
test id: 25
duration: 403 us, 937 ns
</test>


#################### Test #26 ####################
Section count: 26, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 26
test id: 26
duration: 812 ns
</test>


#################### Test #27 ####################
Section count: 27, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 209250, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 215312, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 222562, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 229812, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 237062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 244312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 249187, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 257625, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 314750, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 322000, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 326875, log: 16, event: 16
pin: 0, rising_edges: 2, nsec: 335437, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 338062, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 348875, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 351375, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 354000, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 360062, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 364937, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 373375, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 383125, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 385625, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 390500, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 393000, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 395625, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 398250, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 487562, log: 31, event: 31
</buffered_events>
logs used: 31/350
section type: "Normal"
section count: 27
test id: 27
duration: 487 us, 562 ns
</test>


#################### Test #28 ####################
Section count: 28, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 28
test id: 28
duration: 812 ns
</test>


#################### Test #29 ####################
Section count: 29, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 192625, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 197500, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 204750, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 212000, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 216875, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 225312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 227812, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 248125, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 251812, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 261437, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 310250, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 316312, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 321187, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 329625, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 335687, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 342937, log: 21, event: 21
pin: 1, rising_edges: 2, nsec: 345562, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 348062, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 356500, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 361375, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 369812, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 373500, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 383125, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 385625, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 388250, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 394437, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 397062, log: 32, event: 32
pin: 0, rising_edges: 1, nsec: 918625, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 924687, log: 34, event: 34
pin: 0, rising_edges: 0, nsec: 929562, log: 35, event: 35
</buffered_events>
logs used: 35/350
section type: "Normal"
section count: 29
test id: 29
duration: 929 us, 562 ns
</test>


#################### Test #30 ####################
Section count: 30, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 30
test id: 30
duration: 812 ns
</test>


#################### Test #31 ####################
Section count: 31, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 11875, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 205687, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 212937, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 220187, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 227437, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 232312, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 240750, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 244437, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 252875, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 262500, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 268562, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 315000, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 322250, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 327125, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 335562, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 340437, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 343062, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 349125, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 354000, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 362437, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 369687, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 376937, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 381812, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 385625, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 391687, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 394187, log: 30, event: 30
</buffered_events>
logs used: 30/350
section type: "Normal"
section count: 31
test id: 31
duration: 394 us, 187 ns
</test>


#################### Test #32 ####################
Section count: 32, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 32
test id: 32
duration: 812 ns
</test>


#################### Test #33 ####################
Section count: 33, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 11875, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 24000, log: 6, event: 6
pin: 0, rising_edges: 1, nsec: 27812, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 30312, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 35187, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 43625, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 46125, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 52187, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 209062, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 215125, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 221187, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 229625, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 234500, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 238187, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 240687, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 243187, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 245687, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 256500, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 260187, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 269812, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 316250, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 322437, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 324937, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 327437, log: 28, event: 28
pin: 1, rising_edges: 2, nsec: 335875, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 340750, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 348125, log: 31, event: 31
pin: 1, rising_edges: 1, nsec: 350625, log: 32, event: 32
pin: 0, rising_edges: 0, nsec: 353125, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 362750, log: 34, event: 34
pin: 0, rising_edges: 0, nsec: 366437, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 374875, log: 36, event: 36
pin: 0, rising_edges: 0, nsec: 382125, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 387125, log: 38, event: 38
pin: 1, rising_edges: 2, nsec: 389625, log: 39, event: 39
pin: 0, rising_edges: 2, nsec: 392125, log: 40, event: 40
pin: 0, rising_edges: 1, nsec: 490937, log: 41, event: 41
</buffered_events>
logs used: 41/350
section type: "Normal"
section count: 33
test id: 33
duration: 490 us, 937 ns
</test>


#################### Test #34 ####################
Section count: 34, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 34
test id: 34
duration: 812 ns
</test>


#################### Test #35 ####################
Section count: 35, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 195000, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 201062, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 207125, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 214375, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 216875, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 219500, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 227937, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 230437, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 238875, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 241375, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 248750, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 251250, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 264562, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 311000, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 318250, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 324312, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 331562, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 337625, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 346062, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 349875, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 352375, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 358437, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 363437, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 365937, log: 29, event: 29
pin: 1, rising_edges: 2, nsec: 373187, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 379250, log: 31, event: 31
pin: 1, rising_edges: 2, nsec: 387687, log: 32, event: 32
pin: 0, rising_edges: 2, nsec: 390187, log: 33, event: 33
pin: 0, rising_edges: 1, nsec: 402312, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 413250, log: 35, event: 35
pin: 1, rising_edges: 1, nsec: 424062, log: 36, event: 36
pin: 0, rising_edges: 0, nsec: 426562, log: 37, event: 37
pin: 0, rising_edges: 1, nsec: 429187, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 925687, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 942437, log: 40, event: 40
</buffered_events>
logs used: 40/350
section type: "Normal"
section count: 35
test id: 35
duration: 942 us, 437 ns
</test>


#################### Test #36 ####################
Section count: 36, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 36
test id: 36
duration: 812 ns
</test>


#################### Test #37 ####################
Section count: 37, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 187875, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 193937, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 198812, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 201312, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 203812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 208687, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 213562, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 222000, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 224500, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 242437, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 249687, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 256937, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 310500, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 316562, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 323812, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 331062, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 334750, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 337375, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 344625, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 348312, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 355562, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 358062, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 360687, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 369250, log: 29, event: 29
pin: 0, rising_edges: 1, nsec: 382562, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 397062, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 421062, log: 32, event: 32
</buffered_events>
logs used: 32/350
section type: "Normal"
section count: 37
test id: 37
duration: 421 us, 62 ns
</test>


#################### Test #38 ####################
Section count: 38, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 38
test id: 38
duration: 812 ns
</test>


#################### Test #39 ####################
Section count: 39, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 16750, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 52750, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 55250, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 199062, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 205125, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 208812, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 217250, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 220937, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 229375, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 232000, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 234500, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 243062, log: 17, event: 17
pin: 1, rising_edges: 2, nsec: 251500, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 257562, log: 19, event: 19
pin: 0, rising_edges: 1, nsec: 260187, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 267437, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 313875, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 321125, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 326000, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 333250, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 340500, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 347750, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 352625, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 361062, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 365937, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 375562, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 380437, log: 32, event: 32
</buffered_events>
logs used: 32/350
section type: "Normal"
section count: 39
test id: 39
duration: 380 us, 437 ns
</test>


#################### Test #40 ####################
Section count: 40, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 40
test id: 40
duration: 812 ns
</test>


#################### Test #41 ####################
Section count: 41, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 26375, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 32437, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 36125, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 44562, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 47062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 54312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 196937, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 204187, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 209062, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 216312, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 218812, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 229625, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 232125, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 265500, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 313125, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 319187, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 321812, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 326687, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 333937, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 338812, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 341437, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 347500, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 352375, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 359750, log: 29, event: 29
pin: 1, rising_edges: 2, nsec: 362250, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 364750, log: 31, event: 31
pin: 1, rising_edges: 1, nsec: 373187, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 375812, log: 33, event: 33
pin: 0, rising_edges: 0, nsec: 379500, log: 34, event: 34
</buffered_events>
logs used: 34/350
section type: "Normal"
section count: 41
test id: 41
duration: 379 us, 500 ns
</test>


#################### Test #42 ####################
Section count: 42, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 687, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5687, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 42
test id: 42
duration: 5 us, 687 ns
</test>


#################### Test #43 ####################
Section count: 43, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 16750, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 192875, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 200125, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 205000, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 213437, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 217125, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 225687, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 228312, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 248625, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 253625, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 256125, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 263375, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 311000, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 318250, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 324312, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 330500, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 333000, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 337875, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 345125, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 348812, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 358437, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 363312, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 371750, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 375437, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Normal"
section count: 43
test id: 43
duration: 375 us, 437 ns
</test>


#################### Test #44 ####################
Section count: 44, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 44
test id: 44
duration: 812 ns
</test>


#################### Test #45 ####################
Section count: 45, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 208062, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 214125, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 220187, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 228625, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 232312, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 241937, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 244437, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 254062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 260125, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 268562, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 316187, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 323437, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 327125, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 329750, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 335812, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 340687, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 350312, log: 22, event: 22
pin: 0, rising_edges: 2, nsec: 352812, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 362437, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 367312, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 375875, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 378375, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 380875, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 390625, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Normal"
section count: 45
test id: 45
duration: 390 us, 625 ns
</test>


#################### Test #46 ####################
Section count: 46, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 46
test id: 46
duration: 812 ns
</test>


#################### Test #47 ####################
Section count: 47, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 15687, log: 5, event: 5
pin: 0, rising_edges: 2, nsec: 18312, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 20812, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 203812, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 211062, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 218312, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 224375, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 229250, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 236500, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 239125, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 241625, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 248875, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 253750, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 265750, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 314562, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 320625, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 327875, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 335125, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 341187, log: 23, event: 23
pin: 0, rising_edges: 1, nsec: 349750, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 352250, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 354750, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 362000, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 366875, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 375437, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 377937, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 380437, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 391375, log: 32, event: 32
</buffered_events>
logs used: 32/350
section type: "Normal"
section count: 47
test id: 47
duration: 391 us, 375 ns
</test>


#################### Test #48 ####################
Section count: 48, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 2, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 48
test id: 48
duration: 812 ns
</test>


#################### Test #49 ####################
Section count: 49, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 1, nsec: 199750, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 207000, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 213062, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 220312, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 224000, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 233750, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 255250, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 258937, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 268562, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 313812, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 321062, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 327125, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 334375, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 341625, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 350062, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 352562, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 362187, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 367062, log: 23, event: 23
pin: 1, rising_edges: 2, nsec: 376687, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 381562, log: 25, event: 25
</buffered_events>
logs used: 25/350
section type: "Normal"
section count: 49
test id: 49
duration: 381 us, 562 ns
</test>


#################### Test #50 ####################
Section count: 50, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 50
test id: 50
duration: 812 ns
</test>


#################### Test #51 ####################
Section count: 51, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 186687, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 192750, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 201187, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 208437, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 212125, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 220687, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 242187, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 245875, log: 13, event: 13
pin: 0, rising_edges: 2, nsec: 248500, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 254562, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 257187, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 307187, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 315625, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 319312, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 328937, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 331437, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 340000, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 342625, log: 23, event: 23
</buffered_events>
logs used: 23/350
section type: "Normal"
section count: 51
test id: 51
duration: 342 us, 625 ns
</test>


#################### Test #52 ####################
Section count: 52, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 52
test id: 52
duration: 812 ns
</test>


#################### Test #53 ####################
Section count: 53, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 1, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 197375, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 203437, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 208312, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 216750, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 219250, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 266875, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 313312, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 319375, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 325437, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 333875, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 339937, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 347187, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 352062, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 360500, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 365375, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 373812, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 378687, log: 22, event: 22
</buffered_events>
logs used: 22/350
section type: "Normal"
section count: 53
test id: 53
duration: 378 us, 687 ns
</test>


#################### Test #54 ####################
Section count: 54, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 54
test id: 54
duration: 812 ns
</test>


#################### Test #55 ####################
Section count: 55, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 206875, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 212937, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 221375, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 228625, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 237062, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 244312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 250375, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 257625, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 312375, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 319625, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 323312, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 331750, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 334250, log: 18, event: 18
pin: 0, rising_edges: 1, nsec: 371312, log: 19, event: 19
pin: 0, rising_edges: 1, nsec: 373937, log: 20, event: 20
</buffered_events>
logs used: 20/350
section type: "Normal"
section count: 55
test id: 55
duration: 373 us, 937 ns
</test>


#################### Test #56 ####################
Section count: 56, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 56
test id: 56
duration: 812 ns
</test>


#################### Test #57 ####################
Section count: 57, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 0, rising_edges: 1, nsec: 16875, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 19375, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 195250, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 202500, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 207375, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 214625, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 218312, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 226750, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 229250, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 249687, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 252187, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 254687, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 257312, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 264562, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 313375, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 320625, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 325500, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 332750, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 336562, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 339062, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 347500, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 351187, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 359625, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 364500, log: 28, event: 28
pin: 1, rising_edges: 2, nsec: 375312, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 377812, log: 30, event: 30
</buffered_events>
logs used: 30/350
section type: "Normal"
section count: 57
test id: 57
duration: 377 us, 812 ns
</test>


#################### Test #58 ####################
Section count: 58, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 58
test id: 58
duration: 812 ns
</test>


#################### Test #59 ####################
Section count: 59, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 206875, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 212937, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 221375, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 228625, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 233500, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 241937, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 245625, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 254062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 261312, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 269750, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 316187, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 322250, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 328312, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 335562, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 340437, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 350187, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 352812, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 362437, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 366125, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 375750, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 380625, log: 26, event: 26
</buffered_events>
logs used: 26/350
section type: "Normal"
section count: 59
test id: 59
duration: 380 us, 625 ns
</test>


#################### Test #60 ####################
Section count: 60, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 60
test id: 60
duration: 812 ns
</test>


#################### Test #61 ####################
Section count: 61, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 211625, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 217687, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 222562, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 231000, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 235875, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 244312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 249187, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 257625, log: 13, event: 13
pin: 0, rising_edges: 1, nsec: 261312, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 269750, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 316187, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 323437, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 327125, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 335562, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 339250, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 348875, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 351375, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 361000, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 365875, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 374437, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 376937, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 379437, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 389062, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 391562, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Normal"
section count: 61
test id: 61
duration: 391 us, 562 ns
</test>


#################### Test #62 ####################
Section count: 62, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 62
test id: 62
duration: 812 ns
</test>


#################### Test #63 ####################
Section count: 63, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 11875, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 199750, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 205812, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 210687, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 219125, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 222812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 252625, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 255250, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 257750, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 267375, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 313812, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 319875, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 325937, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 333187, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 339250, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 347687, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 350187, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 361000, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 364687, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 373125, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 379187, log: 25, event: 25
</buffered_events>
logs used: 25/350
section type: "Normal"
section count: 63
test id: 63
duration: 379 us, 187 ns
</test>


#################### Test #64 ####################
Section count: 64, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 64
test id: 64
duration: 812 ns
</test>


#################### Test #65 ####################
Section count: 65, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 208062, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 214125, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 221375, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 228625, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 233500, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 241937, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 246812, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 254062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 262500, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 269750, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 317375, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 324625, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 329500, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 337937, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 341625, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 351250, log: 21, event: 21
pin: 1, rising_edges: 2, nsec: 353875, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 356375, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 363625, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 368500, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 379312, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 384187, log: 27, event: 27
</buffered_events>
logs used: 27/350
section type: "Normal"
section count: 65
test id: 65
duration: 384 us, 187 ns
</test>


#################### Test #66 ####################
Section count: 66, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 687, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 46062, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Normal"
section count: 66
test id: 66
duration: 46 us, 62 ns
</test>


#################### Test #67 ####################
Section count: 67, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 199750, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 207000, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 213062, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 220312, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 224000, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 233750, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 244687, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 254312, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 261562, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 268812, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 312875, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 320125, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 325000, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 333437, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 339500, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 347937, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 350437, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 361250, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 363750, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 374562, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 378250, log: 26, event: 26
</buffered_events>
logs used: 26/350
section type: "Normal"
section count: 67
test id: 67
duration: 378 us, 250 ns
</test>


#################### Test #68 ####################
Section count: 68, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 2, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 68
test id: 68
duration: 812 ns
</test>


#################### Test #69 ####################
Section count: 69, type: "Normal"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 30062, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 34937, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 37562, log: 8, event: 8
pin: 1, rising_edges: 2, nsec: 40062, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 49687, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 52187, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 200750, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 208000, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 211687, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 221312, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 223812, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 256000, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 258500, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 269312, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 313375, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 320625, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 325500, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 333937, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 338812, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 348437, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 350937, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 362937, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 365437, log: 28, event: 28
pin: 0, rising_edges: 1, nsec: 374000, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 376500, log: 30, event: 30
pin: 0, rising_edges: 1, nsec: 379000, log: 31, event: 31
</buffered_events>
logs used: 31/350
section type: "Normal"
section count: 69
test id: 69
duration: 379 us, 0 ns
</test>


#################### Test #70 ####################
Section count: 70, type: "Normal"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Normal"
section count: 70
test id: 70
duration: 812 ns
</test>


#################### Test #71 ####################
Section count: 71, type: "Normal"
Skipping wait for stable input.
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

#################### Test #71 ####################
Section count: 1, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 28750, log: 6, event: 6
pin: 1, rising_edges: 2, nsec: 31250, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 37312, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 46937, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 49437, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 56687, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 176750, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 184000, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 186625, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 191500, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 198750, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 202437, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 212062, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 214562, log: 19, event: 19
pin: 0, rising_edges: 1, nsec: 235000, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 244750, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 247250, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 252125, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 258187, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 260812, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 291812, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 301437, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 303937, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 719687, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 722312, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 767562, log: 31, event: 31
pin: 1, rising_edges: 2, nsec: 776000, log: 32, event: 32
pin: 0, rising_edges: 0, nsec: 778500, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 796437, log: 34, event: 34
pin: 0, rising_edges: 1, nsec: 798937, log: 35, event: 35
pin: 0, rising_edges: 1, nsec: 802750, log: 36, event: 36
pin: 1, rising_edges: 1, nsec: 807625, log: 37, event: 37
pin: 0, rising_edges: 0, nsec: 810125, log: 38, event: 38
pin: 1, rising_edges: 1, nsec: 817375, log: 39, event: 39
pin: 0, rising_edges: 0, nsec: 827000, log: 40, event: 40
</buffered_events>
logs used: 40/350
section type: "Fast"
section count: 1
test id: 71
duration: 827 us, 0 ns
</test>


#################### Test #72 ####################
Section count: 2, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 2
test id: 72
duration: 812 ns
</test>


#################### Test #73 ####################
Section count: 3, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 191437, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 197500, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 205937, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 212000, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 220437, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 227687, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 231375, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 238625, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 245875, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 251937, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 304312, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 311562, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 317625, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 324875, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 328562, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 338187, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 340687, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 361125, log: 23, event: 23
pin: 0, rising_edges: 2, nsec: 363750, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 854312, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 856812, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 859437, log: 27, event: 27
</buffered_events>
logs used: 27/350
section type: "Fast"
section count: 3
test id: 73
duration: 859 us, 437 ns
</test>


#################### Test #74 ####################
Section count: 4, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 1, nsec: 687, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 3312, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 7000, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17812, log: 5, event: 5
</buffered_events>
logs used: 5/350
section type: "Fast"
section count: 4
test id: 74
duration: 17 us, 812 ns
</test>


#################### Test #75 ####################
Section count: 5, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 21500, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 52500, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 55000, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 172687, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 178750, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 186000, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 193250, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 199312, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 230312, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 232812, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 243625, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 246125, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 255750, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 296250, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 303500, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 308375, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 318125, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 736250, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 738875, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 741500, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 744125, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 756125, log: 26, event: 26
</buffered_events>
logs used: 26/350
section type: "Fast"
section count: 5
test id: 75
duration: 756 us, 125 ns
</test>


#################### Test #76 ####################
Section count: 6, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 6
test id: 76
duration: 812 ns
</test>


#################### Test #77 ####################
Section count: 7, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 16750, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 19250, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 21750, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 172687, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 179937, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 184812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 193250, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 200500, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 207750, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 210250, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 242437, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 244937, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 255750, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 299812, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 308250, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 310750, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 761062, log: 21, event: 21
pin: 1, rising_edges: 2, nsec: 763562, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 780312, log: 23, event: 23
</buffered_events>
logs used: 23/350
section type: "Fast"
section count: 7
test id: 77
duration: 780 us, 312 ns
</test>


#################### Test #78 ####################
Section count: 8, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 8
test id: 78
duration: 812 ns
</test>


#################### Test #79 ####################
Section count: 9, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 117812, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 123875, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 171500, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 178750, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 184812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 193250, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 199312, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 207750, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 210250, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 230562, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 233062, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 241500, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 244000, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 246500, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 249000, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 256250, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 290812, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 298187, log: 23, event: 23
pin: 0, rising_edges: 1, nsec: 300812, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 303437, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 688312, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 690937, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 716000, log: 28, event: 28
</buffered_events>
logs used: 28/350
section type: "Fast"
section count: 9
test id: 79
duration: 716 us, 0 ns
</test>


#################### Test #80 ####################
Section count: 10, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 10
test id: 80
duration: 812 ns
</test>


#################### Test #81 ####################
Section count: 11, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 117812, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 125062, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 171500, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 177562, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 184812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 192062, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 198125, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 206562, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 209062, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 229500, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 232125, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 234750, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 242000, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 245687, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 255312, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 288687, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 295937, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 298437, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 652437, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 681062, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 684750, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 687250, log: 27, event: 27
pin: 0, rising_edges: 1, nsec: 697000, log: 28, event: 28
pin: 1, rising_edges: 2, nsec: 748187, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 750687, log: 30, event: 30
</buffered_events>
logs used: 30/350
section type: "Fast"
section count: 11
test id: 81
duration: 750 us, 687 ns
</test>


#################### Test #82 ####################
Section count: 12, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 12
test id: 82
duration: 812 ns
</test>


#################### Test #83 ####################
Section count: 13, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 4625, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 11875, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 15562, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 24000, log: 6, event: 6
pin: 1, rising_edges: 2, nsec: 26500, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 188125, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 194187, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 215687, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 221750, log: 11, event: 11
pin: 0, rising_edges: 1, nsec: 224250, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 233875, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 236375, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 246125, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 248625, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 251125, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 269187, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 291875, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 296750, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 465500, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 541625, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 547687, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 554937, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 562187, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 569437, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 577875, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 581562, log: 28, event: 28
pin: 1, rising_edges: 1, nsec: 588812, log: 29, event: 29
pin: 0, rising_edges: 0, nsec: 594875, log: 30, event: 30
pin: 1, rising_edges: 1, nsec: 602125, log: 31, event: 31
pin: 0, rising_edges: 0, nsec: 609375, log: 32, event: 32
pin: 1, rising_edges: 1, nsec: 615437, log: 33, event: 33
pin: 1, rising_edges: 1, nsec: 618062, log: 34, event: 34
pin: 0, rising_edges: 2, nsec: 631250, log: 35, event: 35
</buffered_events>
logs used: 35/350
section type: "Fast"
section count: 13
test id: 83
duration: 631 us, 250 ns
</test>


#################### Test #84 ####################
Section count: 14, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 14
test id: 84
duration: 812 ns
</test>


#################### Test #85 ####################
Section count: 15, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 16625, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 21500, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 28750, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 33625, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 43250, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 48125, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 212125, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 217000, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 227812, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 235062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 238750, log: 14, event: 14
pin: 0, rising_edges: 1, nsec: 250875, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 260500, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 264312, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 266812, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 285937, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 295562, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 304000, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 308875, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 318500, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 321000, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 343687, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 347375, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 360562, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 363062, log: 28, event: 28
</buffered_events>
logs used: 28/350
section type: "Fast"
section count: 15
test id: 85
duration: 363 us, 62 ns
</test>


#################### Test #86 ####################
Section count: 16, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 16
test id: 86
duration: 812 ns
</test>


#################### Test #87 ####################
Section count: 17, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 28750, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 31250, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 39687, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 42187, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 55375, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 57875, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 189812, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 197062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 204312, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 211562, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 220000, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 227375, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 229875, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 232375, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 239625, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 244500, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 252937, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 299375, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 307812, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 311500, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 314125, log: 26, event: 26
</buffered_events>
logs used: 26/350
section type: "Fast"
section count: 17
test id: 87
duration: 314 us, 125 ns
</test>


#################### Test #88 ####################
Section count: 18, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 18
test id: 88
duration: 812 ns
</test>


#################### Test #89 ####################
Section count: 19, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 13062, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 192625, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 199875, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 208312, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 214375, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 220437, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 228875, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 231375, log: 12, event: 12
pin: 1, rising_edges: 2, nsec: 239812, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 244687, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 254312, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 256812, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 266437, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 308125, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 314187, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 321437, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 328687, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 334750, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 344375, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 346875, log: 24, event: 24
pin: 0, rising_edges: 1, nsec: 368500, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 393562, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 396062, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 823687, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 854687, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 914187, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 916687, log: 31, event: 31
</buffered_events>
logs used: 31/350
section type: "Fast"
section count: 19
test id: 89
duration: 916 us, 687 ns
</test>


#################### Test #90 ####################
Section count: 20, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 20
test id: 90
duration: 812 ns
</test>


#################### Test #91 ####################
Section count: 21, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 27687, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 30312, log: 7, event: 7
pin: 1, rising_edges: 1, nsec: 34125, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 37812, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 40312, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 178187, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 184250, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 191500, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 198750, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 204812, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 212062, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 218125, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 225375, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 231437, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 239875, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 245937, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 259250, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 263062, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 265562, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 284687, log: 25, event: 25
pin: 0, rising_edges: 1, nsec: 287312, log: 26, event: 26
pin: 0, rising_edges: 1, nsec: 300625, log: 27, event: 27
</buffered_events>
logs used: 27/350
section type: "Fast"
section count: 21
test id: 91
duration: 300 us, 625 ns
</test>


#################### Test #92 ####################
Section count: 22, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 22
test id: 92
duration: 812 ns
</test>


#################### Test #93 ####################
Section count: 23, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 19125, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 31125, log: 6, event: 6
pin: 1, rising_edges: 2, nsec: 33625, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 37312, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 39812, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 42437, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 45062, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 185312, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 192562, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 201000, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 277125, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 289125, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 656312, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 658812, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 680312, log: 19, event: 19
</buffered_events>
logs used: 19/350
section type: "Fast"
section count: 23
test id: 93
duration: 680 us, 312 ns
</test>


#################### Test #94 ####################
Section count: 24, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 24
test id: 94
duration: 812 ns
</test>


#################### Test #95 ####################
Section count: 25, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 11875, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 17937, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 227062, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 234312, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 240375, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 247625, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 252500, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 260937, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 263437, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 273062, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 275562, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 278062, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 280562, log: 16, event: 16
pin: 1, rising_edges: 1, nsec: 303250, log: 17, event: 17
pin: 0, rising_edges: 0, nsec: 305750, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 315375, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 317875, log: 20, event: 20
pin: 1, rising_edges: 1, nsec: 328687, log: 21, event: 21
pin: 0, rising_edges: 0, nsec: 331187, log: 22, event: 22
pin: 0, rising_edges: 1, nsec: 703125, log: 23, event: 23
</buffered_events>
logs used: 23/350
section type: "Fast"
section count: 25
test id: 95
duration: 703 us, 125 ns
</test>


#################### Test #96 ####################
Section count: 26, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 26
test id: 96
duration: 812 ns
</test>


#################### Test #97 ####################
Section count: 27, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 216375, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 223625, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 227312, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 258312, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 260812, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 269250, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 276500, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 281375, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 283875, log: 14, event: 14
pin: 1, rising_edges: 2, nsec: 286375, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 300750, log: 16, event: 16
</buffered_events>
logs used: 16/350
section type: "Fast"
section count: 27
test id: 97
duration: 300 us, 750 ns
</test>


#################### Test #98 ####################
Section count: 28, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Fast"
section count: 28
test id: 98
duration: 812 ns
</test>


#################### Test #99 ####################
Section count: 29, type: "Fast"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 5812, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 14250, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 20312, log: 5, event: 5
pin: 0, rising_edges: 0, nsec: 27562, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 31250, log: 7, event: 7
pin: 1, rising_edges: 2, nsec: 33875, log: 8, event: 8
pin: 0, rising_edges: 0, nsec: 180062, log: 9, event: 9
pin: 1, rising_edges: 1, nsec: 187312, log: 10, event: 10
pin: 0, rising_edges: 0, nsec: 193375, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 201812, log: 12, event: 12
pin: 0, rising_edges: 0, nsec: 205500, log: 13, event: 13
pin: 1, rising_edges: 1, nsec: 213937, log: 14, event: 14
pin: 0, rising_edges: 0, nsec: 220000, log: 15, event: 15
pin: 1, rising_edges: 1, nsec: 228437, log: 16, event: 16
pin: 0, rising_edges: 0, nsec: 232125, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 241750, log: 18, event: 18
pin: 0, rising_edges: 0, nsec: 250187, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 262187, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 264687, log: 21, event: 21
pin: 1, rising_edges: 1, nsec: 267187, log: 22, event: 22
pin: 0, rising_edges: 0, nsec: 297000, log: 23, event: 23
pin: 1, rising_edges: 1, nsec: 304250, log: 24, event: 24
pin: 0, rising_edges: 0, nsec: 309125, log: 25, event: 25
pin: 1, rising_edges: 1, nsec: 318750, log: 26, event: 26
pin: 0, rising_edges: 0, nsec: 321250, log: 27, event: 27
pin: 1, rising_edges: 1, nsec: 333250, log: 28, event: 28
pin: 0, rising_edges: 0, nsec: 335750, log: 29, event: 29
</buffered_events>
logs used: 29/350
section type: "Fast"
section count: 29
test id: 99
duration: 335 us, 750 ns
</test>


#################### Test #100 ####################
Section count: 30, type: "Fast"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 11750, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 16625, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 32187, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 46562, log: 6, event: 6
</buffered_events>
logs used: 6/350
section type: "Fast"
section count: 30
test id: 100
duration: 46 us, 562 ns
</test>


#################### Test #101 ####################
Section count: 31, type: "Fast"
Skipping wait for stable input.
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
  <invalid/>
</section_start>

#################### Test #101 ####################
Section count: 1, type: "Slow"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 1, nsec: 2375, log: 3, event: 3
</buffered_events>
logs used: 3/350
section type: "Slow"
section count: 1
test id: 101
duration: 2 us, 375 ns
</test>


#################### Test #102 ####################
Section count: 2, type: "Slow"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 81941687, log: 23, event: 3
pin: 1, rising_edges: 1, nsec: 81944187, log: 24, event: 4
pin: 0, rising_edges: 0, nsec: 82496500, log: 25, event: 5
pin: 1, rising_edges: 1, nsec: 85660125, log: 26, event: 6
pin: 0, rising_edges: 0, nsec: 88228375, log: 28, event: 7
pin: 1, rising_edges: 1, nsec: 105540500, log: 33, event: 8
</buffered_events>
logs used: 33/350
section type: "Slow"
section count: 2
test id: 102
duration: 105 ms, 540 us, 500 ns
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
 105 ms, 540 us, 500 ns


#################### Test #103 ####################
Section count: 3, type: "Slow"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 687, log: 2, event: 2
pin: 0, rising_edges: 0, nsec: 98312, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 112687, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 115187, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 137875, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 142875, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 151312, log: 8, event: 8
pin: 0, rising_edges: 1, nsec: 164625, log: 9, event: 9
pin: 0, rising_edges: 1, nsec: 189812, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 256562, log: 11, event: 11
pin: 0, rising_edges: 2, nsec: 271062, log: 12, event: 12
pin: 0, rising_edges: 1, nsec: 924437, log: 13, event: 13
</buffered_events>
logs used: 13/350
section type: "Slow"
section count: 3
test id: 103
duration: 924 us, 437 ns
</test>


#################### Test #104 ####################
Section count: 4, type: "Slow"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Slow"
section count: 4
test id: 104
duration: 812 ns
</test>


#################### Test #105 ####################
Section count: 5, type: "Slow"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 3437, log: 3, event: 3
pin: 0, rising_edges: 0, nsec: 29687, log: 4, event: 4
pin: 1, rising_edges: 1, nsec: 32187, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 41937, log: 6, event: 6
pin: 1, rising_edges: 1, nsec: 45750, log: 7, event: 7
pin: 0, rising_edges: 0, nsec: 107625, log: 8, event: 8
pin: 1, rising_edges: 1, nsec: 117250, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 169625, log: 10, event: 10
pin: 0, rising_edges: 1, nsec: 174625, log: 11, event: 11
pin: 1, rising_edges: 1, nsec: 190187, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 194000, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 196500, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 203750, log: 15, event: 15
pin: 0, rising_edges: 0, nsec: 206250, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 208875, log: 17, event: 17
pin: 0, rising_edges: 1, nsec: 219812, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 224687, log: 19, event: 19
pin: 0, rising_edges: 0, nsec: 245000, log: 20, event: 20
pin: 0, rising_edges: 1, nsec: 266625, log: 21, event: 21
</buffered_events>
logs used: 21/350
section type: "Slow"
section count: 5
test id: 105
duration: 266 us, 625 ns
</test>


#################### Test #106 ####################
Section count: 6, type: "Slow"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Slow"
section count: 6
test id: 106
duration: 812 ns
</test>


#################### Test #107 ####################
Section count: 7, type: "Slow"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
pin: 1, rising_edges: 1, nsec: 3437, log: 3, event: 3
pin: 1, rising_edges: 1, nsec: 6062, log: 4, event: 4
pin: 0, rising_edges: 0, nsec: 13312, log: 5, event: 5
pin: 1, rising_edges: 1, nsec: 15812, log: 6, event: 6
pin: 0, rising_edges: 0, nsec: 19500, log: 7, event: 7
pin: 0, rising_edges: 1, nsec: 23312, log: 8, event: 8
pin: 1, rising_edges: 2, nsec: 25812, log: 9, event: 9
pin: 0, rising_edges: 0, nsec: 28312, log: 10, event: 10
pin: 1, rising_edges: 1, nsec: 40312, log: 11, event: 11
pin: 0, rising_edges: 0, nsec: 42812, log: 12, event: 12
pin: 1, rising_edges: 1, nsec: 45312, log: 13, event: 13
pin: 0, rising_edges: 0, nsec: 47812, log: 14, event: 14
pin: 1, rising_edges: 1, nsec: 52687, log: 15, event: 15
pin: 0, rising_edges: 1, nsec: 55187, log: 16, event: 16
pin: 0, rising_edges: 1, nsec: 60187, log: 17, event: 17
pin: 1, rising_edges: 1, nsec: 74562, log: 18, event: 18
pin: 1, rising_edges: 1, nsec: 77187, log: 19, event: 19
pin: 1, rising_edges: 1, nsec: 79812, log: 20, event: 20
pin: 0, rising_edges: 0, nsec: 87062, log: 21, event: 21
pin: 0, rising_edges: 1, nsec: 90875, log: 22, event: 22
pin: 1, rising_edges: 1, nsec: 93375, log: 23, event: 23
pin: 0, rising_edges: 0, nsec: 97062, log: 24, event: 24
pin: 1, rising_edges: 1, nsec: 111437, log: 25, event: 25
pin: 0, rising_edges: 0, nsec: 113937, log: 26, event: 26
pin: 1, rising_edges: 1, nsec: 129500, log: 27, event: 27
pin: 0, rising_edges: 0, nsec: 133187, log: 28, event: 28
pin: 0, rising_edges: 2, nsec: 135812, log: 29, event: 29
pin: 1, rising_edges: 1, nsec: 145437, log: 30, event: 30
pin: 0, rising_edges: 0, nsec: 147937, log: 31, event: 31
pin: 0, rising_edges: 1, nsec: 150562, log: 32, event: 32
</buffered_events>
logs used: 32/350
section type: "Slow"
section count: 7
test id: 107
duration: 150 us, 562 ns
</test>


#################### Test #108 ####################
Section count: 8, type: "Slow"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Slow"
section count: 8
test id: 108
duration: 812 ns
</test>


#################### Test #109 ####################
Section count: 9, type: "Slow"
Skipping wait for stable input.
 _____  _____  ______  _____ _____ _ 
|  __ \|  __ \|  ____|/ ____/ ____| |
| |__) | |__) | |__  | (___| (___ | |
|  ___/|  _  /|  __|  \___ \\___ \| |
| |    | | \ \| |____ ____) |___) |_|
|_|    |_|  \_\______|_____/_____/(_)
Press the button (it is currently released == logic high)
<test>
sw version: 0.3.0
<buffered_events>
pin: 1, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 0, rising_edges: 0, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Slow"
section count: 9
test id: 109
duration: 812 ns
</test>


#################### Test #110 ####################
Section count: 10, type: "Slow"
Skipping wait for stable input.
          _ 
         | | 
 _ __ ___| | ___  __ _ ___  ___ 
| '__/ _ \ |/ _ \/ _\` / __|/ _ \
| | |  __/ |  __/ (_| \__ \  __/
|_|  \___|_|\___|\__,_|___/\___|
Release the button (it is currently pressed == logic low)
<test>
sw version: 0.3.0
<buffered_events>
pin: 0, rising_edges: 0, nsec: 0, log: 1, event: 1
pin: 1, rising_edges: 1, nsec: 812, log: 2, event: 2
</buffered_events>
logs used: 2/350
section type: "Slow"
section count: 10
test id: 110
duration: 812 ns
</test>


#################### Test #111 ####################
Section count: 11, type: "Slow"
Skipping wait for stable input.
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



`;