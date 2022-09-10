#Renaming Symbol


```
  function! CocCustomCommand_renameCurrentSymbol()
    :execute "normal \<Plug>(coc-rename)"
  endfunction
  command! GGcocRenameCurrentSymbol call CocCustomCommand_renameCurrentSymbol()
```

This is the same as pressing `F2` in VScode. See: 
https://code.visualstudio.com/docs/typescript/typescript-refactoring#_rename
https://code.visualstudio.com/docs/languages/typescript#_rename


