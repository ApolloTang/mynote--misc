# pidof



## To read:

[Master the Linux pidof Command: A Comprehensive Guide | by Peter Hou | Medium](https://hopeness.medium.com/master-the-linux-pidof-command-a-comprehensive-guide-fe519f7114c5) 





## `pidof`  on OSX

`pidof` is not included on macOS (OSX) because it is a utility found in Linux distributions.

you can install it via a package manager like Homebrew:

```
brew install pidof
```

This will allow you to use `pidof` on macOS as you would on Linux.

On macOS, the same functionality that `pidof` provides—finding the process ID (PID) of a running program—can be achieved using different commands like `pgrep` or `ps`.

on macOS:

1. **Using `pgrep`:**

   ```
   pgrep process_name
   ```

2. **Using `ps` with `grep`:**

   ```
   ps aux | grep process_name | grep -v grep
   ```

   This command lists all processes, searches for the process name, and filters out the `grep` command itself from the results.