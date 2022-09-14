# Coc IntelliSense: Code Action 

Given the following typescript code:

```ts
if (false) {
  message = 'never happen'
}
```

coc.nvim will warn about a potential problem:

![](./imgs/unreachable-code-detected-macvim.png)

This is the same as the following in VSCode:

![unreachable-code-detected-vscode](./imgs/unreachable-code-detected-vscode.png)

In VScode when you press `⌘.` a  **Code Action** menu appears:

![quick-fix-menu-vscode](./imgs/quick-fix-menu-vscode.png)

The **Code Action** menu triggering mapping in my coc.nvim setup is:

```txt
  "/ Remap for do codeAction of current line
  nmap <space>ac  <Plug>(coc-codeaction)
```
This will bring up the menu:

![quick-fix-menu-vscode](./imgs/quick-fix-menu-macvim.png)



Also see:
https://github.com/fannheyward/coc-rust-analyzer/issues/492



