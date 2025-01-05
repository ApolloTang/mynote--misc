# Bash-kernel



## Installation (important)

#### Update: Jan 2025 

[bash_kernel is not working with python@3.13](https://github.com/takluyver/bash_kernel/issues/146#ref-pullrequest-2756142735) because imghdr module has been removed. So make sure you install jupyter with python@3.12

   ```
   pyenv shell 3.12
   pipx install --python /Users/apollotang/.pyenv/shims/python --include-deps jupyter
   ```

Otherwise pipx will install jupyter with the latest python (ie., 3.13)



### Installation:

1. Install jupyter with pipx, it is better to install jupyter as an app in a global location:
   ```
   pyenv shell 3.12
   pipx install --python /Users/apollotang/.pyenv/shims/python --include-deps jupyter
   ```
   The above will install jupyter at: 
   ```
   ~/.local/pipx/venvs/jupyter/
   ```

2. Make sure your bash_kernal is installed in the pipx's  jupyter venv. To do this you use the pipx's `inject` command: 

   ```
   pipx inject --include-apps --include-deps jupyter bash_kernel
   ```

   The will install bash_kernel at this location: 

   ```
   ~/.local/pipx/venvs/jupyter/lib/python3.12/site-packages/bash_kernel
   ```

3. Then activate bash_kernel with the same python that you use to run jupyter: 

   ```
   cd ~/.local/pipx/venvs/jupyter/
   source bin/activate
   python -m bash_kernel.install
   deactivate
   ```
   



After activation (step 3 above) bash kernel will be registered to the kernel registry.  To check:

   ```
   $ jupyter kernelspec list
   Available kernels:
     bash       ~/Library/Jupyter/kernels/bash
     python3    ~/.local/pipx/venvs/jupyter/share/jupyter/kernels/python3
   ```

Note above, the location of bash kernel registration: 

   ```
   ~/Library/Jupyter/kernels/bash
   ```

 To check:

   ```
   $ ls ~/Library/Jupyter/kernels/bash
   kernel.json  logo-svg.svg
   
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

Note argv passing python in `~/.local/pipx/venvs/jupyter/bin/python` to execute bash_kernel: 

```
~/.local/pipx/venvs/jupyter/bin/python -m bash_kernel -f {connection_file}
```



