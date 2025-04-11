# How to Change macOS Default Shell to Bash

Default shell in macOs is zsh, but if you prefer Bash.  This note show you how to change your default shell from zsh to Bash. 

The version of Bash that comes pre-installed with macOS, located at `/bin/bash`, is outdated. While it is functional, it lacks features and updates available in newer versions (e.g., Bash 5.x). To use a modern version of Bash, you need to install it via Homebrew.

Homebrew's installation of Bash is typically located at:

```zsh
$ brew --prefix bash
/opt/homebrew/bin/bash  # For Apple Silicon Macs
/usr/local/bin/bash    # For Intel Macs
```

Once you have installed Bash, you can change the default shell using the following command:

```zsh
$ chsh -s /opt/homebrew/bin/bash  # For Apple Silicon
# OR
$ chsh -s /usr/local/bin/bash     # For Intel
```

For the above command to work, you must add the new Bash path to the file `/etc/shells`. This is because `chsh` will only accept shells listed in that file.

However, `/etc/shells` is a protected system file, and you cannot edit it directly. To work around this, you can append the new shell path to `/etc/shells` using the following command:

```bash
$ sudo sh -c "echo $(which bash) >> /etc/shells"  # Adds the new Bash path
$ chsh -s $(which bash)
```

In the above commands, `$(which bash)` resolves to `/opt/homebrew/bin/bash` (or `/usr/local/bin/bash`) because the Homebrew-installed Bash has been added to your `PATH` environment variable.

For more details, see: [Changing Default Shell from Zsh to Bash on macOS (Catalina and Beyond)](https://stackoverflow.com/questions/77052638/changing-default-shell-from-zsh-to-bash-on-macos-catalina-and-beyond).

---

### Alternative Method: Using System Settings
Another way to change the default shell is through the graphical interface:

1. Go to **System Settings** (` > System Settings > Users & Groups`).
2. **Control-click** your username or user picture in the list of users on the right to reveal **Advanced Options**.
3. In GUI,  manually load the path to the new Bash binary.

However, this method has limitations. Since `/opt` is a hidden directory in Finder, navigating to `/opt/homebrew/bin/bash` is not straightforward. As a result, the `chsh` approach is generally preferred for advanced users.

---

### Additional Resources
For further information, see:

- [Use Zsh as the Default Shell on Your Mac - Apple Support](https://support.apple.com/en-us/102360)
- [How to Change the Default Shell to Bash on macOS](https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/#:~:text=cat%20/etc/shells-,Change%20from%20Zsh%20to%20Bash%20In%20System%20Settings,OK%22%20to%20save%20your%20changes.)
- [Can't Access /etc Folder in OS X Mountain Lion - Ask Different](https://apple.stackexchange.com/questions/76611/cant-access-etc-folder-in-os-x-mountain-lion#:~:text=2%20Answers,kind%20of%20access%20he%20need.)
