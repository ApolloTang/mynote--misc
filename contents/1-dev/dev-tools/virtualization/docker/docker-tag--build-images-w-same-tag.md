# Docker tag: 

## What happened if we build the image with the same tag?

Build a simple image without a tag: 

```
$ cat Dockerfile
FROM alpine:latest
CMD ["echo", "red"]

$ docker build .
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
<none>       <none>    eadf9d51841d   2 weeks ago   8.17MB
```

Continue from previous, we edit the Dockerfile and build with a  tag:

```
$ cat Dockerfile 
FROM alpine:latest
CMD ["echo", "green"]

$ docker build -t green . 
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
<none>       <none>    eadf9d51841d   2 weeks ago   8.17MB
green        latest    f8c62363423a   2 weeks ago   8.17MB
```

Continue from previous, we edit the Dockerfile and build with same tag:  

```
$ cat Dockerfile 
FROM alpine:latest
CMD ["echo", "green 2"]

$ docker build -t green . 
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
<none>       <none>    f8c62363423a   2 weeks ago   8.17MB
green        latest    6f13ac284ee6   2 weeks ago   8.17MB
<none>       <none>    eadf9d51841d   2 weeks ago   8.17MB
```

Repeat with the same tag:

```
$ cat Dockerfile 
FROM alpine:latest
CMD ["echo", "green 3"]

$ docker build -t green .  
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
green        latest    5a1507e7a832   2 weeks ago   8.17MB
<none>       <none>    eadf9d51841d   2 weeks ago   8.17MB
<none>       <none>    f8c62363423a   2 weeks ago   8.17MB
<none>       <none>    6f13ac284ee6   2 weeks ago   8.17MB
```

**Conclusion**: 

When we recycle tag, previously image with the same tag become annoymous. and the tag is given to the most recent images that we just build 