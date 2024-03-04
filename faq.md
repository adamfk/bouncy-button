# FAQ

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
