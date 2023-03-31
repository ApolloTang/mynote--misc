## nvim.coc extension for python:

Don't use [coc-python](https://github.com/neoclide/coc-python), use [coc-pyright](https://github.com/fannheyward/coc-pyright):

---



## Enviroment with coc-pyright:

Ref:  https://github.com/fannheyward/coc-pyright/issues/767

"You didn't need to set `python.venvPath`, just `activate` the venv for your project, then vim your Python files."

You can use the following to make sure you're using the correct Python for your project.

```
:CocCommand workspace.showOutput Pyright
```

