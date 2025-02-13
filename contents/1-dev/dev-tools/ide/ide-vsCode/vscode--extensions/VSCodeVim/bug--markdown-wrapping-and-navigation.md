
# Markdown wrapping and navigation

Bug: When lines are wrapped `k` and `j` does not move cursor within the wrapped line.  

To get around this press `g` before your move command:

```
k --> gk
j --> gj
```

issue: https://github.com/VSCodeVim/Vim/issues/7082