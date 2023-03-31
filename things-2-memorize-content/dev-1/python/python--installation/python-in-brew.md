# Python in Brew

See where python is linked to in homebrew, try:

```
  ls -l /usr/local/bin/python*   [1]
  ls -l /usr/local/bin/pip*
```

Extra Python tools (e.g., Pylint, iSort) are sometimes installed here:

```
  ls -l ~/Library/Python*        [1]
```

To see extra information on brew's python link [2] :

```
  $ brew link python --dry-run | xargs ls -l
  $ brew unlink python --dry-run | xargs ls -l
```


---

[2] https://stackoverflow.com/questions/19340871/how-to-link-home-brew-python-version-and-set-it-as-default
[1] https://medium.com/faun/the-right-way-to-set-up-python-on-your-mac-e923ffe8cf8e
