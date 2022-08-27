# Coc.nvim IntelliSense



## Quick Fixes

Given the following typescript code:

```ts
if (false) {
  message = 'never happen'
}
```

coc.nvim will warn you potential problem:

![](./imgs/unreachable-code-detected-macvim.png)

This is same as the following in VSCode:

![unreachable-code-detected-vscode](./imgs/unreachable-code-detected-vscode.png)

In VScode when you press `⌘.` a  Quick Fix menu appears:

![quick-fix-menu-vscode](./imgs/quick-fix-menu-vscode.png)

To get Quick Fix menu in coc.nvim use the command:

```txt
CocAction
```

This will bring up the equivelent menu in coc.nvim:

![quick-fix-menu-vscode](./imgs/quick-fix-menu-macvim.png)

My Keybinding mapping for `CocAction` is:

```txt
  "/ Remap for do codeAction of current line
  nmap <space>ac  <Plug>(coc-codeaction)
```




https://github.com/fannheyward/coc-rust-analyzer/issues/492



