# How to launch an item2 from a terminal and run a shell command

I have set up an alias that launches an iterm2 from a terminal: 

```bash
alias iterm='open -a iTerm .
```
However, I am not sure how to pass parameters into iTerm using the `open` command thus unable to run a shell command in the iTerm opened

This [stack overflow answer](https://stackoverflow.com/a/56862822/3136861) shows you how to write a bash script with Applescript embedded to run iterm2. However, Applescript is being [deprecated](https://iterm2.com/documentation-scripting.html). The recommended way is using the [python API](https://iterm2.com/python-api/) provided by iterm2. 

## iTerm2 python's virtual environment:

Iterm2's ApplicationSupport comes with python's virtual environment located at: 

```
~/Library/ApplicationSupport/iTerm2/iterm2env
```
This virtual environment has helper pip packages preinstalled for iTerm2's python scripting. To use them you simply import them: 

```python
import iterm2
```

iterm2 is a Python module (available on PyPI) that provides an interface to communicate with iTerm2 ([ref](https://iterm2.com/python-api/tutorial/example.html)).
You can find the document [here](https://iterm2.com/python-api/).

The iterm2 package includes [pyobjc](https://github.com/ronaldoussoren/pyobjc) package as a dependency.  The **pyobjc** package provides a bridge between the Python and Objective-C programming languages on macOS ([repo](https://github.com/ronaldoussoren/pyobjc), [documentation](https://pyobjc.readthedocs.io/en/latest/index.html)). 


## iTerm2 python's scripting UI

The virtual environment also has various versions of python preinstalled, you should use them to execute your python script: 

```bash
~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ./my-python-script.py
```

However, instead of placing your script in an arbitrary location, you should let iTerm2 organize your scripts in a predefined location:

```bash
~/Library/ApplicationSupport/iTerm2/Scripts/
```

To add scripts to this location you use the iTerm menu dropdown: 

```
Scripts > Manage > New Python Script
```

A window will open to guide you on the type of script to add. For more information see: [Creating a New Script](https://iterm2.com/python-api/tutorial/index.html#creating-a-new-script)

## Running your script

After creation, your script is listed under iTerm's Apple menu dropdown: 

```
Scripts >
```

Or you can call using the `open quickly` shortcut:

```
shift-command-o
```

Of cause you can still execute it manually with:

```bash
~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ~/Library/ApplicationSupport/iTerm2/Scripts/my_first_iterm2_script/my_first_iterm2_script/my_first_iterm2_script.py
```

More information on script execution see [Running a Script](https://iterm2.com/python-api/tutorial/running.html)
