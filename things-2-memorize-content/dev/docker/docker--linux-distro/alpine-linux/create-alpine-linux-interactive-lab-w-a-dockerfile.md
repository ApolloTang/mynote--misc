

# Create Alphine linux interactive lab with a Dockerfile


Create a file called "Dockerfile-alpine" with the following contents:


```
FROM alphine:latest
```

Create an docker images

```
$ docker build -f Dockerfile-alpine -t my-alpine-lab .
                                                  #  ^--- important, don't forget the 'dot'
[+] Building 0.8s (6/6) FINISHED
 => [internal] load build definition from Dockerfile-alpine                                                                                       0.0s
 => => transferring dockerfile: 198B
...
```

The above create an image called 'my-alpine-lab'. To see the created image:

```
$ docker images | grep my-alpine-lab
my-alpine-lab   latest    1f78d2bdd91d   7 weeks ago   5.59MB
```

To spawn a container from this image and launch shell commands:

```
$ docker run -it my-alpine-lab sh
/ #
```

First make sure the database is up-to-date:

```
/ # apk update
fetch https://dl-cdn.alpinelinux.org/alpine/v3.15/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.15/community/x86_64/APKINDEX.tar.gz
v3.15.6-86-ge28658f257 [https://dl-cdn.alpinelinux.org/alpine/v3.15/main]
v3.15.6-86-ge28658f257 [https://dl-cdn.alpinelinux.org/alpine/v3.15/community]
OK: 15857 distinct packages available
```

Now you can install package:

```
/ # apk add --no-cache vim
fetch https://dl-cdn.alpinelinux.org/alpine/v3.15/main/x86_64/APKINDEX.tar.gz
....
/ # which vim
/usr/bin/vim
```

## To open another shell on a running container:

First, get the ID of the running container (in a new terminal) :

```:
$ docker ps
CONTAINER ID   IMAGE            COMMAND   CREATED          STATUS          PORTS     NAMES
ab45a1d96f91   my-alphine-lab   "sh"      15 minutes ago   Up 15 minutes             xenodochial_gauss
```

Then use the `Docker exec` command

```
$ Docker exec -it ab45a1d96f91 sh
/ #
```

## To exit without stopping the container:

Type in the terminal: `^P^Q`

