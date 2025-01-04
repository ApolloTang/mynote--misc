# Structure of pipx's  folder

```
$ tree -L 4 -Fa /Users/apollotang/.local/pipx
/Users/apollotang/.local/pipx/
├── .cache/
├── logs/
├── py/
├── shared/
│   ├── bin/
│   │   ├── Activate.ps1
│   │   ├── activate
│   │   ├── activate.csh
│   │   ├── activate.fish
│   │   ├── pip*
│   │   ├── pip3*
│   │   ├── pip3.13*
│   │   ├── python -> python3.13*
│   │   ├── python3 -> python3.13*
│   │   └── python3.13 -> /opt/homebrew/opt/python@3.13/bin/python3.13*
│   ├── include/
│   │   └── python3.13/
│   ├── lib/
│   │   └── python3.13/
│   │       └── site-packages/
│   └── pyvenv.cfg
└── venvs/
    ├── jupyter/
    └── pipenv/
```



### Observations:

pipx is using python@3.13 because it is installed by brew with active python is 3.13.



