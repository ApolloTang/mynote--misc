# Exploring pipenv

cheatsheet: https://gist.github.com/theskinnycoder/c8f9aa7b5172f28d9f4268867ae60bfd



## Installation

:warning: The [official pipenv document](https://pipenv.pypa.io/en/latest/#install-pipenv-today) discourages installing pipenv with brew. The [recomended](https://pipenv.pypa.io/en/latest/install/#isolated-installation-of-pipenv-with-pipx) way of installation is with  `pipx` or use [pip user install](https://pip.pypa.io/en/stable/user_guide/#user-installs) so that the installation is isolated in its own environment. 

On my computer, I installed it with `pipx`:
```
pipx install pipenv
```

 

## What is pipenv?

The concept of **pipenv** for python is similar to that of **npm** for nodeJs.  It is used to manage the packages your project depended on.  

Pipenv uses two files, [Pipfile](https://github.com/pypa/pipfile) and `Pipfile.lock`.  They are analogous to `package.json` and `package-lock.json` in nodeJs. 

To initialize a new project and thus create a `pipfile` and a `pipfile.lock` you simply use the command: 

```
$ pipenv install
```

Here is a simple exmple project called `example--pipenv` running a simple test with pytest:

```
$ mkdir example--pipenv && cd $_            # create a director
$ pipenv install                            # initialize project
$ pipenv install pytest --dev               # install pytest as a development dependency 
$ jq .develop.pytest.version Pipfile.lock   # use jq to check version of pytest
$ cat << EOF > test_example.py              # create a simple test
def incr(x):
    return x + 1

def test_incr():
    assert incr(3) == 4
EOF
$ pipenv run pytest                         # run test
======================== test session starts =========================
platform darwin -- Python 3.10.8, pytest-7.2.0, pluggy-1.0.0
rootdir: /Users/apollotang/Desktop/lab-pipenv/example--pipenv
collected 1 item

test_example.py .                                              [100%]

========================= 1 passed in 0.01s ==========================    
```



## Where is the location of installed package?

For npm, location of dependencies are located in `node_modules/`.  For pipenv, denpendencies are  located in a virtual environment folder.  By default, the location of this virtual environment folder is located in a central location in your computer.  You can get the path to This virtual environement with: 

```
$ pipenv --venv
```

If you want the virtual environment folder located inside the project folder,  you need to set the shell variable:

```
PIPENV_VENV_IN_PROJECT=1 pipenv install
```

You should try set this variable so that the virtual environment folder is located inside the project and avoid using the default central location. This is because pipenv uses your project's file-path to locate you virtual environment -- if you move you project folder you will lose your virtual environment mapping (see: [How does pipenv know the virtualenv for current project ? #796](https://github.com/pypa/pipenv/issues/796).)

Also, another reason not to use the central location is that pipenv does not do garbage collection. You can use the command inside your project: 
```
$ pipenv --rm
```

to remove the virtual environment folder; however; if you delete your project folder, removing the virtual environment folder will be a pain (see: [How to remove all pipenv virtualenvs when the directory was deleted?](https://stackoverflow.com/questions/65126606/how-to-remove-all-pipenv-virtualenvs-when-the-directory-was-deleted) ).



## Using pipenv on a classical pip venv

If you have a project created previously using the classical `pip -m venv venv`,  you can use pipenv on this project. Simply type: 

```
PIPENV_VENV_IN_PROJECT=1 pipenv install
```

Pipenv will read the content of the previous `./venv/` folder and create the `Pipfile` , `Pipfile.lock` file. Pipenv will also create another environment folder called `./.venv` for used by pipenv itself. You can then activate this new virtual environment with:

```
pipenv shell
```

Pipenv can also generate a requiements.txt file for `pip's venv` , 

```
pipenv requirements > requirements.txt  
```

With the generated `requirements.txt` file, this project can be recreated in another computer without pipenv installed: 
```
python -m venv venv
python -m pip install -r requirements.txt
```

Note: Prior to pipenv version v2022.8.13, instead of using the command `pipenv requirements > requirements.txt `, you use `pipenv lock -r > requirements.txt` [Ref](https://stackoverflow.com/a/73352657).



 



## To Read:

https://mattgosden.medium.com/pipenv-for-easier-virtual-environments-69e1e520cde8








