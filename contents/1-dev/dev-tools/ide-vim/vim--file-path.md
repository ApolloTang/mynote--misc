#  Vim file path



## Search recursively in parents directory for the existence of a file?

```vimscript
:echo !empty(findfile(fileName, currentDirectoryPath.';'))
```
the ';' for after `currentDirectoryPath` meansearch upwards (until the root directory). See `:help file-searching`

Ref: [https://vi.stackexchange.com/a/20440/15493](https://vi.stackexchange.com/a/20440/15493)



##  Get path to the current vimscript being executed

```
let s:current_file=expand("<sfile>")
```

Ref: [https://stackoverflow.com/a/4977006/3136861](https://stackoverflow.com/a/4977006/3136861)



# Where is my .vimrc file?

list all the .vim files that Vim loaded for you, including your `.vimrc` file. If you already have a .vimrc file:

```
:scriptnames
```

Ref: [https://stackoverflow.com/a/10933797/3136861](https://stackoverflow.com/a/10933797/3136861)
