
# Docker's default command: ENTRYPOINT and CMD - Understanding the Differences

## ENTRYPOINT

The `ENTRYPOINT` instruction defines the primary executable that the container will run.  It specifies the main command that the container is designed to execute.

```dockerfile
# Example: Exec Form ENTRYPOINT
FROM alpine:latest
ENTRYPOINT ["echo", "hello"]
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest
hello
```

## CMD

### Using CMD with ENTRYPOINT

A common use of `CMD` is to provide default arguments to the `ENTRYPOINT` command.

```dockerfile
# Example: ENTRYPOINT with CMD providing arguments (Exec Form)
FROM alpine:latest
ENTRYPOINT ["echo", "hello"]
CMD ["world!"]
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest
hello world!
```

If an argument is passed to `docker run <image:tag> <argument>` *after* the image name, this argument will *override* the `CMD` values, but they are still passed *to* the `ENTRYPOINT` executable:

```dockerfile
# Example: Overriding CMD with docker run arguments
FROM alpine:latest
ENTRYPOINT ["echo", "hello"]
CMD ["world!"]
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest Susie
hello Susie
```

### Using CMD without ENTRYPOINT

If `ENTRYPOINT` is not defined, `CMD` specifies an *overridable* executable and its arguments to be run:

```dockerfile
# Example: CMD acting as the executable
FROM alpine:latest
CMD ["echo", "hello"]
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest
hello
```

To override this executable, you simply specify a command as an argument to the `docker run <image:tag> <command>`:

```dockerfile
#Example: Overriding the entire CMD when no ENTRYPOINT is present
FROM alpine:latest
CMD ["echo", "hello"]
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest printf "bye Susie"
bye Susie
```

## Exec and Shell Form

The `ENTRYPOINT` and `CMD` we discussed above use the **Exec Form**:

```dockerfile
ENTRYPOINT ["executable", "param1", "param2", ...]
CMD ["param3", "param4", ...]
```

There is another form called the **Shell Form**:

```dockerfile
ENTRYPOINT executable param1 param2 ...
CMD param3 param4...
```

*   **Exec Form:** Executes the command directly, without a shell. This is preferred for better signal handling and predictability.
*   **Shell Form:** Executes the command through a shell (`/bin/sh -c` on Linux). This can have implications for argument overriding and signal handling.  **Crucially, when using the Shell form for `ENTRYPOINT`, arguments passed to `docker run` are *not* treated as overrides to `CMD` in the same way as the exec form.**

```dockerfile
# Example: Shell Form - CMD *cannot* be overridden as in the exec form.
FROM alpine:latest
ENTRYPOINT echo "hello"  # Shell form
CMD "world!"         # Shell form
```

```bash
$ docker build -t my-echo-app .
$ docker run my-echo-app:latest Susie
hello world! Susie  # "Susie" becomes an additional argument, not an override.
```



## Without CMD or ENTRYPOINT:

If neither CMD nor ENTRYPOINT is specified in the Dockerfile, the container will start and immediately exit because there is no default command to run.



## Key Takeaway

*   Use the **exec form** (`["executable", "arg1"]`) for `ENTRYPOINT` and `CMD` whenever possible for predictable behavior and proper signal handling.
*   Understand that the shell form executes commands through `/bin/sh -c`, which can affect how arguments are processed and how signals are handled.
*   `CMD` provides default arguments to `ENTRYPOINT` *and* defines the default executable/arguments if `ENTRYPOINT` is absent.
*   Arguments to `docker run` override `CMD` when used with an exec form `ENTRYPOINT`, but become additional arguments when used with a shell form `ENTRYPOINT`.
