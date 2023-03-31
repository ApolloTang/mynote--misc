# Replace a token with linebreak (split line at token)

For example, to split the content of `$PATH` into lines:

```terminal
echo $PATH > mypath.txt
mvim mypath.txt
```

in normal mode:
```
:%s/:/\r/g
```

Ref: [link](https://stackoverflow.com/a/43011315)
