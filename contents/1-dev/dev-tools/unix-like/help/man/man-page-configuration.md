## Man page configuration information

To get manpage's infomation of a command, use the -d (debug) optons

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
