# Pyenv cheat sheet

Wiki for pyenv: https://github.com/pyenv/pyenv/wiki

Tutorial: https://realpython.com/intro-to-pyenv/

---

## Installing a python version

See all the available [CPython](https://realpython.com/cpython-source-code-guide/) 3.6 through 3.8, you can do this:

```
$ pyenv install --list | grep " 3\.[678]"
```

To install a version used:

```
pyenv install -v 3.7.2
```

To uninstall a version used:

```
pyenv uninstall 2.7.15
```

To list all local versions:

```
$ pyenv versions
* system (set by /Users/<user>/.pyenv/version)
  2.7.15
  3.6.8
  3.8-dev
```

In the above, the `*` indicates that the `system` Python version is active currently. 

## To set a python version

To sets the default version (this will be the version when you open a terminal):

```
pyenv global 3.10.6
```

To override the global (default) versions, you can use `local` or `shell`:

```
pyenv local 2.7.15
```

This command creates a `.python-version` file in your current directory. When you call python, the version specify in this file is used.

The `shell`  command set the `PYENV_VERSION` shell variable. When you call python, the version specify by this variable is used.

```
pyenv shell 3.8-dev 
```

To unset the `pyenv shell` used:

```
pyenv shell --unset
```

The resolution precedence are:

| Description | Version specifier |
| ----------- | -------------- |
| pyenv shell   | $PYENV_VERSION       |
| pyenv local   | .python-version file |
| pyenv global  | ~/.pyenv/version     |
| System Python | ? |

To see the actual path of the current used python, you can run the following:

```
$ pyenv which python
/Users/<user>/.pyenv/versions/3.10.6/bin/python
```