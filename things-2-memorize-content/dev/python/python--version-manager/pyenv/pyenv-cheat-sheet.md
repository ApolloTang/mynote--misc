# Pyenv cheat sheet

Wiki for pyenv: https://github.com/pyenv/pyenv/wiki

Tutorial: https://realpython.com/intro-to-pyenv/

---



## List all local versions:

```
$ pyenv versions
* system (set by /Users/<user>/.pyenv/version)
  2.7.15
  3.6.8
  3.8-dev
```

In the above, the `*` indicates that the `system` Python version is active currently.



## List the available python versions to install

For example, to see all the available [CPython](https://realpython.com/cpython-source-code-guide/) 3.6 through 3.8, you can do this:

```
$ pyenv install --list | grep " 3\.[678]"
```



## Installing a python version

To install a version used:

```
pyenv install -v 3.7.2
```

To uninstall a version used:

```
pyenv uninstall 2.7.15
```



## To set a python version for terminal

To set the default version of python in the terminal, use the `global` subcommand, for example:

```
pyenv global 3.10.6
```

There are two ways to override this default version: the `local` and `shell` subcommands:

```
pyenv local 3.8-dev
```

```
pyenv shell 3.8-dev
```

The `pyenv local <version>` creates a `.python-version` file in your current directory and the version of python to use is specified within.

The `pyenv shell <version>` simply set the `PYENV_VERSION` shell variable.  The shell variable can be unset with:

```
pyenv shell --unset
```

So whenever you open a terminal, the python version is resolved in the following order:

| Description | Version specifier |
| ----------- | -------------- |
| pyenv shell   | $PYENV_VERSION       |
| pyenv local   | .python-version file |
| pyenv global  | ~/.pyenv/version     |
| System Python | ? |



## Path to current python

To see the actual path of the currently used python, you can run the following:

```
$ pyenv which python
/Users/<user>/.pyenv/versions/3.10.6/bin/python
```

