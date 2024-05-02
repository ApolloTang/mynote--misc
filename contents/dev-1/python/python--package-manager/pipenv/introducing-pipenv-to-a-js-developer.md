# Introducing pipenv to a javascript programer


## Useful:

**cheatsheet**: [gist.github.com/theskinnycoder/c8f9aa7b5172f28d9f4268867ae60bfd](https://gist.github.com/theskinnycoder/c8f9aa7b5172f28d9f4268867ae60bfd)

**official CLI reference:**  [pipenv.pypa.io/en/latest/cli.html](https://pipenv.pypa.io/en/latest/cli.html#pipenv) 

**Issues page on github:** [github.com/pypa/pipenv/issues](https://github.com/pypa/pipenv/issues)


## What is pipenv?

pipenv creates an isolated environment for your project and manages the dependency packages your project uses. This concept is similar to that of **npm**'s node modules in nodeJs eco-system. 

Using the npm analogy, npm uses `package.json` to specification dependencies and `package-lock.json` to describe the dependency graph; pipenv uses [Pipfile](https://github.com/pypa/pipfile) and `Pipfile.lock`.

 
## Installing pipenv

:warning: The [official pipenv document](https://pipenv.pypa.io/en/latest/#install-pipenv-today) discourages installing pipenv with brew. The [recommended](https://pipenv.pypa.io/en/latest/install/#isolated-installation-of-pipenv-with-pipx) way of installation is with  [`pipx`](https://github.com/pypa/pipx) (I think `pipx` is analogous to `npx` in the javascript world?)

On my computer, I installed it with `pipx`:

```
pipx install pipenv 
```

Another recommended way to install pipenv is using [pip user install](https://pip.pypa.io/en/stable/user_guide/#user-installs).  This method isolates the installation in its own environment. 


## Working with pipenv, an example:

To initialize a new project, we use the following command to create a `pipfile` and a `pipfile.lock`: 

```
$ pipenv install
```

Here is a simple example project called `example--pipenv` that runs a simple test with pytest:

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


## Where is the location of the installed package?

The dependencies are stored in the `node_modules/` folder for npm.  For pipenv, dependencies are  located in a virtual environment folder.  By default, this folder is located in a central location on your computer.  You can get the path to This virtual environment with: 

```
$ pipenv --venv
```

If you want the virtual environment folder located inside the project folder (similar to the location of `node_modules/` in a project folder), you can set the shell variable `PIPENV_VENV_IN_PROJECT` during installation:

```
PIPENV_VENV_IN_PROJECT=1 pipenv install
```
By setting this variable, a folder `.venv/` is created inside your project folder to store your project dependencies.

:Warning: When you delete your project folder, your project dependencies in the central virtual environment are now cleaned up; this results in a clattering of unused Python dependency on your computer (see: 
[How to remove all pipenv virtualenvs when the directory was deleted?](https://stackoverflow.com/questions/65126606/how-to-remove-all-pipenv-virtualenvs-when-the-directory-was-deleted)
). 

To avoid clattering, I set `PIPENV_VENV_IN_PROJECT=1` in my `.bashrc`.  This way, my dependencies are always located locally in the project, and when I delete my project folder, they are removed. 

:warning: Another thing you should be aware of is that pipenv internally uses your project folder's file path to locate its virtual environment folder. That means if you relocate your project folder, you will lose your virtual environment mapping (see: [How does pipenv know the virtualenv for current project ? #796](https://github.com/pypa/pipenv/issues/796).). To fix the mapping, remove the `.venv/` folder with:  

```
$ pipenv --rm
```

Then reinstall again with `pipenv install` to regenerate the `.venv/` folder:


## Do not add  .venv/ folder to your git repo

Since the `.venv/` folder can be recreated by `pipenv install`, it is unnecessary add it to git repo. In fact, when you created your pipenv project, a `.gitignore` is created automatically in the `.venv/` folder: 

```
$ cat ./.venv/.gitignore
# created by virtualenv automatically
*
```


## Using pipenv on a classical pip venv

If you have a previously created project using the classical `pip -m venv venv`,  you can use install this project with pipenv. Simply type: 

```
PIPENV_VENV_IN_PROJECT=1 pipenv install
```

Pipenv will read the content of the previous `./venv/` folder to create `Pipfile`, `Pipfile.lock` and a `./.venv/` folder. You can then activate this new virtual environment with:

```
pipenv shell
```

Pipenv can also generate a requiements.txt file: 

```
pipenv requirements > requirements.txt  
```

With the generated `requirements.txt` file, this project can be recreated in another computer without pipenv installed: 

```
python -m venv venv
python -m pip install -r requirements.txt
```

Note: Prior to pipenv version v2022.8.13, instead of using the command `pipenv requirements > requirements.txt `, you use `pipenv lock -r > requirements.txt` [see this Ref](https://stackoverflow.com/a/73352657).


## To Read:

https://mattgosden.medium.com/pipenv-for-easier-virtual-environments-69e1e520cde8







