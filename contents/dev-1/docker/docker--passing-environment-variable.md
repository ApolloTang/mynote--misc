## Example of using `--build-arg` to pass environment variable during build time:

```docker
# file: Dockefile

FROM alpine:3.16.2

# The "ARG" is only available during build time:
ARG MY_ENV

# To persist the environmental variable into
# the image, you must reassign it with "ENV" command:
ENV MY_ENV=${MY_ENV}

# EOF
```

```sh
MY_ENV=myEnv \
  docker build \
  -f Dockerfile \
  -t jupiter \
  --build-arg MY_ENV .
```

```
$ docker run -it jupiter env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=47d2944cfd87
TERM=xterm
MY_ENV=myEnv
HOME=/root
```

:warning: the above will log your environment variable in history (line 3 below); so be careful when using ARG to pass environmental variable:

```
$ docker history jupiter
IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
0a0ee8d62915   2 months ago   ENV MY_ENV=myEnv                                0B        buildkit.dockerfile.v0
<missing>      2 months ago   ARG MY_ENV                                      0B        buildkit.dockerfile.v0
<missing>      2 months ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      2 months ago   /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```

**Reference**
https://vsupalov.com/docker-build-time-env-values/



---



## Example of using `-e` to pass environment variable during container creation time:

The following will pass `SSH_PRIVATE_KEY` into the container (via `-e SSH_PRIVATE_KEY` ) and execute the command `env` to list all shell variable for  alpine linux container:

```
SSH_PRIVATE_KEY=`cat ~/.ssh/id_rsa` \
  docker run \
  -e SSH_PRIVATE_KEY \
  alpine env
```

Result:

`````
$ SSH_PRIVATE_KEY=`cat ~/.ssh/id_rsa` \
>   docker run \
>   -e SSH_PRIVATE_KEY \
>   alpine env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=8d7c1bafcda0
SSH_PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxx (content not shown)
`````

