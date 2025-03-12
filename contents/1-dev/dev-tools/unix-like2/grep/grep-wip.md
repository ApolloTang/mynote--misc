
The command `grep` is basically a **line** filter, the result of the filter are lines that contain the match PATTERN. 

A line is content between: 
1. begining-of-file and a newline character,
2. a newline character and another newline character.
3. a newline character and the end-of-file. 

## Basic usage; 

```
grep 'PATTERNS' INPUT
```

**PATTERNS**

The default flavour of PATTERNS used by grep is BRE. 

You can use several PATTERNS at once, each patterns are saperate by space(S). 

:warning: Always put each PATTERN in single quote to avoid shell expansion. 

If you don't want to use Regular expression, you can use the **fix string** option: 

```
grep -F `PATTERNS` INPUT
```
Where PATTERN is taken ilterally. 

**INPUT**

INPUT can be consist of one or more than one filename. 

If INPUT is `-` then 



Pattern flavour

| Pattern flavour             | option flag | alias |
| --------------------------- | ----------- | ----- |
| BRE                         | `-G`        |       |
| Fix string                  | `-F`        | fgrep |
| extended regular expression | -           |       |
|                             |             |       |




## Help

- `man grep`  for a short manual and 
- `info grep` for full documentation.