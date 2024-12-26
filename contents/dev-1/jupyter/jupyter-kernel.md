# Jupyter kernel



## About Jupyter Kernel

The default Python kernel (`ipykernel`) is usually installed by default along with Jupyter

To see the available kernels, in the terminal, you can run 

```
jupyter kernelspec list
```

 You can find list of installable kernel here:  [Updated Jupyter Kernels page](https://gist.github.com/chronitis/682c4e0d9f663e85e3d87e97cd7d1624) 



## To removed an installed kernel:

```
# List all kernels and grab the name of the kernel you want to remove
jupyter kernelspec list
# Remove it
jupyter kernelspec remove <kernel_name>
```



## Installing Bash-kernel

To add Bash kernel to you `pipenv` managed Jupyter projects, you first activate the `pipenv shell` and install the `bash-kernel` package:

```
pipenv shell 
pipenv install bash-kernel
```

Then run the following script to added bash kernel:
```
python -m bash_kernel.install
```

After the above, if you now list the kernel, you will see a new entry for Bash:
```
$ jupyter kernelspec list
Available kernels:
  bash       /Users/apollotang/Library/Jupyter/kernels/bash
  python3    /Users/apollotang/Desktop/xxxx/.venv/share/jupyter/kernels/python3
```

Now run the jupyter lab you will see Bash notebook avaialber to your launcher:

```
pipenv run jupyter lab
```









## Deno kernel for Jupyter

 [Bringing Modern JavaScript to the Jupyter Notebook | by Kyle Kelley | Jupyter Blog](https://blog.jupyter.org/bringing-modern-javascript-to-the-jupyter-notebook-fc998095081e) 

 [Jupyter Kernel for Deno | Deno Docs](https://docs.deno.com/runtime/manual/tools/jupyter) 



## Reading

 [r - Remove the kernel on a Jupyter Notebook - Stack Overflow](https://stackoverflow.com/questions/42635310/remove-the-kernel-on-a-jupyter-notebook) 

 [What is the Jupyter kernel, and how does it work? | Hex](https://hex.tech/blog/jupyter-kernel-overview/) 