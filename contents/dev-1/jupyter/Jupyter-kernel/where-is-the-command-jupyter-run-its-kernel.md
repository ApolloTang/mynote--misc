### Where is the command jupyter run its kernel?

`kernelspec list`  show the location where jupyter find the command to run its kernal.  And you can see the location is inconsistent:

```
$ jupyter kernelspec list
Available kernels:
  bash       ~/Library/Jupyter/kernels/bash
  python3    ~/.local/pipx/venvs/jupyter/share/jupyter/kernels/python3
```

for bash it is located in:

```
$ cat ~/Library/Jupyter/kernels/bash/kernel.json | jq
{
  "argv": [
    "~/.local/pipx/venvs/jupyter/bin/python",
    "-m",
    "bash_kernel",
    "-f",
    "{connection_file}"
  ],
  "codemirror_mode": "shell",
  "display_name": "Bash",
  "env": {
    "PS1": "$"
  },
  "language": "bash"
}
```

for Ipykernel:

```
$ cat ~/.local/pipx/venvs/jupyter/share/jupyter/kernels/python3/kernel.json | jq
{
  "argv": [
    "python",
    "-m",
    "ipykernel_launcher",
    "-f",
    "{connection_file}"
  ],
  "display_name": "Python 3 (ipykernel)",
  "language": "python",
  "metadata": {
    "debugger": true
  }
}
```



Note that in the above, location of kernel for the default python3 kernel (ipykernel) is located in a virtual environment inside a virtual environment in pipx.  