
# Run interactive bourne shell in Alpine linux container 


Dockerfile:
```
$ cat Dockerfile
FROM alpine:latest
```

Build and run the container: 
```
$ docker build -t alpine-explorer .
$ docker run -it alpine-explorer /bin/sh
```

Rerun the container and shell after the container had stopped:

```
$ docker start <container id>
$ docker attach  <container id>
```



## with default command `CMD`

Dockerfile:
```
$ cat Dockerfile
FROM alpine:latest
CMD ["/bin/sh"]    # default command
```

Build and run the container: 

```
$ docker build -t alpine-explorer .
$ docker run -it alpine-explorer
```

Rerun the container and shell after the container had stopped:

```
$ docker start <container id>
$ docker attach  <container id>
```

