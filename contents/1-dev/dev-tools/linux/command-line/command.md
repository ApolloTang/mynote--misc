# What is the command command? 

[https://askubuntu.com/questions/512770/what-is-the-bash-command-command](https://askubuntu.com/questions/512770/what-is-the-bash-command-command)

when you execute a command on Linux, say foo:

```
$ foo
```

it will search for a bash function or alias of the same name. But if you run:

```
$ command foo
```

it will bypass both functions and aliases and run the one it encouther in your $PATH or builtin.
