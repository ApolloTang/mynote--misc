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

• Do not call `pip install` directly, instead, always call it as a python parameter of `-m`:

```
python -m pip install <some-package>
```

• Unless you are using **pyenv**, install the package with the user-install (i.e., the `--user` flag) so that the package is not installed on the system, but in an isolated and clean environment:

```
python -m pip install --user <some-package>
```

The `--user` flag will install the package in `~/.local/`. For details see: [https://pip.pypa.io/en/stable/user_guide/#user-installs](https://pip.pypa.io/en/stable/user_guide/#user-installs)
