# Shell variables

Shell variables cannot contain hyphen.

If you have a program that requires an environment variable that doesn't match the shell restrictions, launch it with the env program:

```bash
env 'strange-name=some value' myprogram
```
Ref: https://unix.stackexchange.com/questions/23659/can-shell-variable-name-include-a-hyphen-or-dash


