# Python package and pip

• Always work inside a virture environment to avoid pollute the global environment.

• Do not use `pip` with `sudo`.

• Be aware that `pip uninstall <some-package>` only uninstall the package you specified, it does not uninstall its dependencies.

• To list the path where python find you package:

```
$ python
>>> import sys
>>> sys.path
```

• To show location of package by package name:

```
$ pip show <some-package>
```

• Do not call `pip` directly, instead, always call it as a python parameter of `-m`:

```
python -m pip install <some-package>
```

• Unless you are using **pyenv**, install the package with `--user` flag so that the package is not installed on the system:

```
python -m pip install --user <some-package>
```

> I have not try this, but the help said the `--user` flag will install the package in `~/.local/` .  This may not be what I want if I am using **pyenv**.  The reason for this is that with pyenv, the packages are installed in the versions folder. Eg: 
>
> ``` 
> /Users/USER/.pyenv/versions/3.10.4/lib/python3.10/site-packages
> ```
>

