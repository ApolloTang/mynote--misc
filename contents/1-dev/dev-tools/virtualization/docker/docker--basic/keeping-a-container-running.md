# Keeping a container running



If you want to keep a container running in the background, you can use a long-running process like:

 `tail -f /dev/null` 

or

 `sleep infinity`

Here is an example:

Dockerfile:

```
$ cat Dockerfile
FROM alpine:latest
CMD ["echo", "hello world"]
```

Build the container: 

```
docker build -t alpine-explorer .
```

Keep it running with a long-running process:

```
docker run -d --name my-running-container alpine-explorer  tail -f /dev/null
```

or 

```
docker run -d --name my-running-container alpine-explorer sleep infinity
```

These containers will be detached (run in the background). 

Of course, running a `<command>` with `docker run` will override your default command in the image, which is`CMD ["echo", "hello world"]` in this example.  But you can start a shell with `docker exec` to run your default command manually: 

```
docker exec -it my-running-container /bin/sh
/# echo hello world
/# exit
```

The above `/bin/sh` has exited but the container is still running.  You can stop it if you want to:

```
docker stop 
```

Then restart again:

```
$ docker start <container id>
```

But you shouldn't attach it:

```
$ docker attach  <container id>
```

Because this will bring it to the foreground and you will lose your cursor.

