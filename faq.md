## How do I mark a test section as invalid?
This is common for slow press tests. Often slow press tests result in multiple presses and shouldn't be shown with the regular bounce data.

All you have to do is find where the section was last started in your text file:

```
<section_start>
  <id>_s</id>
  <description>Slow: Slow press & release. p(SLOW),rl(SLOW)</description>
</section_start>
```

and modify it to include a `<invalid/>` tag as shown below

```diff
 <section_start>
   <id>_s</id>
   <description>Slow: Slow press & release. p(SLOW),rl(SLOW)</description>
+  <invalid/>
 </section_start>
```

The result should look like this:
```
<section_start>
  <id>_s</id>
  <description>Slow: Slow press & release. p(SLOW),rl(SLOW)</description>
  <invalid/>
</section_start>
```
