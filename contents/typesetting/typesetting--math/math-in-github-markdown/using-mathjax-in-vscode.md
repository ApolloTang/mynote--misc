## Enable MathJax in vscode's markdown preview

**vscode** uses [markdown-preview-enhanced](https://github.com/shd101wyy/markdown-preview-enhanced) to preview markdown. **markdown-preview-enhanced** by default uses KaTeX as the math rendering engine.  You can choose MathJax as your math rendering engine by adding the following setting in vscode's `settings.json`. 

```
"markdown-preview-enhanced.mathRenderingOption": "MathJax"
```

## Equation numbering

:warning: Equation numbering is not working in markdown-preview-enhanced. See:

https://www.reddit.com/r/vscode/comments/vgcs2c/how_to_use_mathjax_as_the_default_markdown/

https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/67
