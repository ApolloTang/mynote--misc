



After copy a large directory, I use the following to verify if copy is successful:

```
diff --brief --recursive \
   "/Volumes/Macintosh HD 1/Users/apollotang/0" \
   /Users/apollotang/greentea/0
```

Ref:

 [linux - Given two directory trees, how can I find out which files differ by content? - Stack Overflow](https://stackoverflow.com/questions/4997693/given-two-directory-trees-how-can-i-find-out-which-files-differ-by-content) 

 [How to compare differences between directories (linux) - Server Fault](https://serverfault.com/questions/59108/how-to-compare-differences-between-directories-linux) 