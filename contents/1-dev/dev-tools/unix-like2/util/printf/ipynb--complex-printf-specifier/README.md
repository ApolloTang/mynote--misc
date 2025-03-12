# Complex printf specifier

Syntax:
```
%[flags][minimum-width][.precision if floating point][conversion_specification]
```
 <br />

## flags
| flag   | descriptions                                                 |
| ------ | ------------------------------------------------------------ |
| `#`    | Use the alternate base format for output.                    |
| `0`    | Pad the output with zeros.                                   |
| `-`    | Left-align the output. By default, printf right-aligns output.  |
| ` `    | (space) Produce a leading space for positive numbers.        |
| `+`    | Sign positive numbers. By default, printf only signs negative numbers. |


[notebook: complex formating example](./format-examples.ipynb)