# How to open item2 from terminal and run a command

We can open iterm2 from the terminal with: 

```bash
open -a iTerm .
```
(Note that I have set up an alias for this: `alias iterm='open -a iTerm .'`). However, I am not sure how to pass parameters into iTerm using the `open` command shown above.

This [stack overflow answer](https://stackoverflow.com/a/56862822/3136861) shows you how to write a bash script with Applescript embedded to run iterm2. However, Applescript is being [deprecated](https://iterm2.com/documentation-scripting.html). The recommended way is using the [python API](https://iterm2.com/python-api/) provided by iterm2. 

## iTerm2 python's virtual environment:

Iterm2's ApplicationSupport comes with python's virtual environment located at: 

```
~/Library/ApplicationSupport/iTerm2/iterm2env
```
The virtual environment is preinstalled with pip packages you need for your iTerm2's python scripting. To use them you simply import them: 

```python
import iterm2
import AppKit
```

## iTerm2 python's scripting UI

You should use the preinstalled python3 version in the virtual environment to execute your python script: 

```
~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ./my-python-script.py
```

However, instead of placing your script in an arbitrary location, you should let iTerm2 organize your scripts in a predefined location:

```
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

```
~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ~/Library/ApplicationSupport/iTerm2/Scripts/my_first_iterm2_script/my_first_iterm2_script/my_first_iterm2_script.py
```

More information on script execution see [Running a Script](https://iterm2.com/python-api/tutorial/running.html)

## My first try on scripting

Following is my first attempt in writing a script. My script will launch iTerm and open vim in it:

*file: my_first_iterm2_script.py*

```python
#!/usr/bin/env python3

import sys
import iterm2
# To install, update, or remove packages from PyPI, use Scripts > Manage > Manage Dependencies...

# The following is wip, trying to figure out how to handle parameter
args = sys.argv
del args[0]
argsJoined  = " ".join(args)
print('cmd entry:', argsJoined)
command = "/bin/bash -l -c 'vim " + argsJoined + "'"
print('command:', command)


async def main(connection):
    await iterm2.Window.async_create(connection, command="/usr/local/bin/bash -l -c \'vim -u /Users/me/path/to/vim/sandbox/my-vimrc /Users/me/path/to/vim/sandbox/main.txt\'")
iterm2.run_until_complete(main, True)
```

I execute the above python script via a `.command` file:

*file: clickme-to-open-in-vim.command*
```bash
#!/usr/bin/env bash
cd -- $(dirname "$0")
rcfile="$(pwd)/my-vimrc"
echo "$rcfile"

~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ~/Library/ApplicationSupport/iTerm2/Scripts/my_first_iterm2_script/my_first_iterm2_script/my_first_iterm2_script.py -u "$rcfile" main.txt
```
With the `.command` file, I can simply click the file in finder to execute the bash script inside.

The script `my_first_iterm2_script.py` works. Clicking on the file  `clickme-to-open-in-vim.command` in finder will launch an iTerm with vim in it. 
However, the vimScript in my-vimrc does not work. I think `curl` is missing in the execution environment. 



