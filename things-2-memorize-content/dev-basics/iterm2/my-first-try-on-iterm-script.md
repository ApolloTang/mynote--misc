# My first try on scripting

Following is my first attempt at writing a script. The script will launch iTerm and open vim in it:

*file: my_first_iterm2_script.py*

```python
#!/usr/bin/env python3

import sys
import iterm2
# To install, update, or remove packages from PyPI, use Scripts > Manage > Manage Dependencies...

# The following is wip. I am still trying to figure out how to handle parameter
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

In the function arguments of `iterm2.Window.async_create`, I passed in a command to instruct vim to use a configuration file called `my-vimrc`

To execute `my_first_iterm2_script.py`, I use a `.command` file:

*file: clickme-to-open-in-vim.command*
```bash
#!/usr/bin/env bash
cd -- $(dirname "$0")
rcfile="$(pwd)/my-vimrc"
echo "$rcfile"

~/Library/ApplicationSupport/iTerm2/iterm2env/versions/3.10.4/bin/python3 ~/Library/ApplicationSupport/iTerm2/Scripts/my_first_iterm2_script/my_first_iterm2_script/my_first_iterm2_script.py -u "$rcfile" main.txt
```
With the `.command` file, I can simply click the file in finder to instruct Terminal to run bash script in the file (see [this](https://stackoverflow.com/questions/5125907/how-to-run-a-shell-script-in-os-x-by-double-clicking)).

The script `my_first_iterm2_script.py` works. However, the vimScript in `my-vimrc` does not work. The plugin directory was not created:

*file: my-vimrc*
```vimscript
"\ Use vim-plug as plugin system
if !filereadable(DIR.'/dot-vim/plug.vim')
  echom 'executing curl...'
  silent !curl --insecure -fLo ./dot-vim/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif

call plug#begin(DIR.'/dot-vim/plugged')
  Plug 'ApolloTang/theme-vim--snow'
  Plug 'mg979/vim-visual-multi', {'branch': 'master'}
call plug#end()
```
I think the problem is `curl` is missing in the execution environment. I need more time to investigate this.


