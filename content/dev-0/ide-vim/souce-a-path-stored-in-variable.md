

# How to `source` a path stored in a variable in Vimscript

```
let prefix = $HOME . '/AppData/Local/nvim'
:execute "source " . expand(prefix) . "/whatever.vim"
```

Ref: [https://vi.stackexchange.com/questions/36512/how-to-source-a-path-stored-in-a-variable-in-vimscript](https://vi.stackexchange.com/questions/36512/how-to-source-a-path-stored-in-a-variable-in-vimscript)