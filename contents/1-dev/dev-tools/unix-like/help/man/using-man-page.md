# Using man page

The `(1)` you often see after a command like `printf(1)` refers to the **section of the manual** in which the command is documented. It is a way to distinguish between different types of topics in the manual pages (man pages). 

Here are the typical sections in a Unix-like system's manual:

| Section | Description                           |
| ------- | ------------------------------------- |
| 1       | User commands (executables)           |
| 2       | System calls (kernel-level functions) |
| 3       | Library functions (C library, etc.)   |
| 4       | Special files (devices, etc.)         |
| 5       | File formats and conventions          |
| 6       | Games and screensavers                |
| 7       | Miscellaneous (e.g., standards)       |
| 8       | System administration commands        |

For example:

`printf(1)` refers to the shell command (`/usr/bin/printf` or built-in).

`printf(3)` refers to the C library function `printf()` used in programming.

### Viewing Specific Sections:

To view the manual page for a specific section, use:

```
man 1 printf  # View the user command
man 3 printf  # View the C library function
```

If you run `man printf` without specifying a section, the `man` command will display the first matching manual page it finds based on the **default section search order**.

### Default Section Search Order

The default search order varies slightly between Unix-like systems, but typically it is:

1. **Section 1 (User Commands)**: Commands you can run in the shell.
2. **Section 8 (System Administration Commands)**: Commands intended for administrative tasks.
3. **Other sections in numerical order** (e.g., 2, 3, 4, etc.).



## Show the available manual files:


- `-w`:  Display the location of the manual page instead of the contents of the manual page.
- `-a`:  Display all manual pages instead of just the first found for each page argument.

```
$ man -aw printf
/usr/share/man/man1/printf.1
/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man/man1/printf.1
/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man/man3/printf.3
```

Then you can use the man command direcrectly on the file:

```
$ man /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man/man3/printf.3
```

## Man page configuration information

To get manpage's infomation of a command, use the `-d` (debug) optons

Using `ls` as example:

```
$ man -d ls
-- Using pager: /usr/bin/less -s
-- Searching PATH for man directories:
--   Adding /Users/apollotang/.local/share/man to manpath
--   Adding /opt/homebrew/share/man to manpath
--   Adding /usr/share/man to manpath
--   Adding /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man to manpath
--   Adding /Library/Developer/CommandLineTools/usr/share/man to manpath
-- Adding default manpath entries
-- Parsing config file: /etc/man.conf
-- Using manual path: /Users/apollotang/.local/share/man:/opt/homebrew/share/man:/usr/share/man:/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man:/Library/Developer/CommandLineTools/usr/share/man
-- Using manual sections: 1:1p:8:2:3:3p:4:5:6:7:9:0p:tcl:n:l:p:o
-- Using locale paths: en_US.UTF-8:en.UTF-8:.
-- Using non-standard page width: 108
-- Searching for ls
--     Found manpage /usr/share/man/man1/ls.1
--     Skipping catpage: non-standard page width
--     Found manpage /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/share/man/man1/ls.1
--     Skipping catpage: non-standard page width
-- Command: cd "/usr/share/man" && /usr/bin/zcat -f "/usr/share/man/man1/ls.1" | /usr/bin/mandoc -O width=108 | /usr/bin/less -s
```
