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

  



## TOC

 [jupyter-kernel-toread.md](jupyter-kernel-toread.md) 

 [bash-kernel.md](bash-kernel.md) 

 [deno-kernel.md](deno-kernel.md) 

 [where-is-the-command-jupyter-run-its-kernel.md](where-is-the-command-jupyter-run-its-kernel.md) 
