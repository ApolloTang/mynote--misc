
# Pyenv-virtualenv

[pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) is a [pyenv](https://github.com/pyenv/pyenv)'s plug-in. It is used to create a python virtual environment. 

A virtual environment act like a sandbox and it has it has an isolated version of python and pip storage.

Unlike the virtual enviroment created with `python -m venv <name>` , the vitural enviornment created by `pyenv-virtualenv` is  *share-able* or *reused-able*.

The virtual environments create by this plugin is listed among the python versions when you called `pyenv versions` .   

The listed names can be used with the pyenv commands `local`or `shell`. Both which can be activated  via `pyenv activate`.



Ref: [https://towardsdatascience.com/python-environment-101-1d68bda3094d](https://towardsdatascience.com/python-environment-101-1d68bda3094d)



## Example of usage


The following are the python versions installed on my computer by pyenv:

```
$ pyenv versions
  system
  2.7.18
  3.9.13
* 3.10.6 (set by /Users/<user>/.pyenv/version)
```

Let's create a virtual environment with pyenv-virtualenv:
```
$ pyenv virtualenv 3.9.13 ven3.9.13
```

The signature of the above command is:
```
pyenv virtualenv <python-version> <name-of-the-environment>
```

List the sandboxes again, you will see two new entries ( `ven3.9.13` and `3.9.13/envs/ven3.9.13` ):

```
$ pyenv versions
  system
  2.7.18
  3.9.13      
  3.9.13/envs/ven3.9.13   <---
* 3.10.6 (set by /Users/<user>/.pyenv/version)
  ven3.9.13               <---
```

Lets create a folder and cd into it:

```
$ mkdir my-python-sandbox && cd $_

$ pwd
.../my-python-sandbox

$ ls -a
.  ..
```

Set this folder to the virtual environment `ven3.9.13`:

```
$ pyenv local ven3.9.13
```

This create the file `.python-version` with name of the virtual environment in it:

```
$ ls -a
.               ..              .python-version

$ cat .python-version
ven3.9.13
```
To activate the environment specified in the file `.python-version`:

```
$ pyenv activate

(ven3.9.13) $
```

To delete this virtual environment: 

```
$ pyenv uninstall ven3.9.13
pyenv: remove /Users/apollotang/.pyenv/versions/ven3.9.13? [y|N] y
pyenv-virtualenv: remove /Users/apollotang/.pyenv/versions/3.9.13/envs/ven3.9.13? (y/N) y
(ven3.9.13)

$ pyenv versions
pyenv: version `ven3.9.13' is not installed (set by PYENV_VERSION environment variable)
  system
  2.7.18
  3.9.13
  3.10.6
(ven3.9.13) ~/Desktop
```







