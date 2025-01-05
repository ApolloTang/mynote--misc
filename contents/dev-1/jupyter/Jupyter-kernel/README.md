# Jupyter kernel



## What is a Jupyter Kernel?

- A **kernel** is the "engine" that executes code in a Jupyter notebook.  
- It can refer to:  
  - **Language-specific kernels**: For different programming languages (e.g., Python, R, Julia).  
  - **Environment-specific kernels**: For specific Python environments (e.g., virtual environments, Conda environments).  

 You can find list of installable kernel here:  [Updated Jupyter Kernels page](https://gist.github.com/chronitis/682c4e0d9f663e85e3d87e97cd7d1624) 



## Kernel Management with `jupyter kernelspec`

- **List all kernels**:  

  ```bash
  jupyter kernelspec list
  ```

- **Unregister (remove) a kernel**:  

  ```bash
  jupyter kernelspec uninstall <kernel-name>
  ```




## Ipykernel 

**ipykernel** is the default Python kernel (`ipykernel`) is usually installed by default along with Jupyter.  You can see this with `kernelspec list`:  

```
$ jupyter kernelspec list
Available kernels:
  bash       ~/Library/Jupyter/kernels/bash
  python3    ~/.local/pipx/venvs/jupyter/share/jupyter/kernels/python3
```



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



## TOC

 [jupyter-kernel-toread.md](jupyter-kernel-toread.md) 

 [bash-kernel.md](bash-kernel.md) 

 [deno-kernel.md](deno-kernel.md) 
