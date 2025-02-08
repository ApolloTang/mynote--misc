## pipx install

pipx create a virtual environment of a specified python version for each  package that you install: 

```
pipx install --python python3.12 <package_name>
```

Some package have dependencies which you have to include; for that we often need to include the `--include-deps` flag when installing. For example to install jupyter:

```
pipx install --python python3.12 --include-deps jupyter
```

Notice the installed virtual environment folders: 

```
~/.local/pipx/venvs/<package_name>/
```

For example, on my computer I have jupyter and pipenv installed:

```
$ tree -L 2 ~/.local/pipx/venvs
~/.local/pipx/venvs
├── jupyter
│   ├── bin
│   ├── etc
│   ├── include
│   ├── lib
│   ├── pipx_metadata.json
│   ├── pyvenv.cfg
│   └── share
└── pipenv
    ├── bin
    ├── include
    ├── lib
    ├── pipx_metadata.json
    └── pyvenv.cfg
```



## pipx list

```
pipx list
```

This list all the installed virtual environments and its executable.  For example:

```
$ pipx list
venvs are in ~/.local/pipx/venvs
apps are exposed on your $PATH at ~/.local/bin
manual pages are exposed at ~/.local/share/man
   package jupyter 1.1.1, installed using Python 3.12.8
    - debugpy
    - httpx
    - ipython
    - ipython3
    - jlpm
    - jsonpointer
    ...snip...
   package pipenv 2024.4.0, installed using Python 3.13.1
    - pipenv
    - pipenv-resolver
```

It is important to understand  that `pipx list` does not list list all the install package in the specific virtual enviroment. it only list the executable in `~/.local/pipx/venvs/<package_name>/bin/` .  To list all the packages you need the  `pipx runpip` sub command.



## pipx runpip

To list all dependencies (including the injected plugin), you use: 

```
pipx runpip <environment_name> list
```

This will list what is in `~/Users/apollotang~/.local/pipx/venvs/<package_name>/lib/<python_version>/site-packages/`

For example: 

```
$ pipx runpip jupyter list
Package                   Version
------------------------- --------------
anyio                     4.7.0
appnope                   0.1.4
argon2-cffi               23.1.0
argon2-cffi-bindings      21.2.0
arrow                     1.3.0
asttokens                 3.0.0
async-lru                 2.0.4
    ...snip...
```

My guess is `pipx runpip <environment_name> list` is acutally same as:

```
$ ~/.local/pipx/venvs/<environment_name>/bin/<python_version> -m pip list
```

Thus pipx runpip has the following syntax which is not explicitly mentioned in pipx's documentation:

```
pipx runpip [-flags] <environment_name> <pips_subcommand> <pips_subcommand_arguments>
```

For example, the following use the pip subcommand to inspect Jupiter package's metatdata:

```
$ pipx runpip jupyter show jupyter
```



