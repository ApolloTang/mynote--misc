# Cloning Private Repositories in Dockerfile Without Exposing SSH Keys



## (1) The following is insecure

```
# file: Dockefile--insecure

FROM alpine:3.16.2

RUN apk update
RUN apk upgrade
RUN apk add --no-cache git openssh-client
ARG SSH_KEY

RUN mkdir /root/.ssh/ && \
  echo "${SSH_KEY}" > /root/.ssh/id_rsa && \
  chmod 600 /root/.ssh/id_rsa

RUN touch /root/.ssh/known_hosts && \
  ssh-keyscan github.com >> /root/.ssh/known_hosts

WORKDIR work_dir

RUN git clone git@github.com:ApolloTang/my-3rd-party-package.git
# EOF
```

```
SSH_KEY=`cat ~/.ssh/id_ed25519_for_use_in_read_only_repo` \
  docker build \
  -f Dockerfile--insecure \
  -t insecure \
  --build-arg SSH_KEY .
```

```
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
insecure     latest    fe3962cfdd8f   9 minutes ago   27MB
```

```
$ docker run -it insecure sh
/work_dir # ls -F
my-3rd-party-package/
/work_dir # exit
```

```
$ docker history insecure
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
fe3962cfdd8f   10 minutes ago   RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   23.4kB    buildkit.dockerfile.v0
<missing>      10 minutes ago   WORKDIR /work_dir                               0B        buildkit.dockerfile.v0
<missing>      22 minutes ago   RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   656B      buildkit.dockerfile.v0
<missing>      22 minutes ago   RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   419B      buildkit.dockerfile.v0
<missing>      22 minutes ago   ARG SSH_KEY                                     0B        buildkit.dockerfile.v0
<missing>      8 hours ago      RUN /bin/sh -c apk add --no-cache git openss…   19MB      buildkit.dockerfile.v0
<missing>      8 hours ago      RUN /bin/sh -c apk upgrade # buildkit           66.6kB    buildkit.dockerfile.v0
<missing>      8 hours ago      RUN /bin/sh -c apk update # buildkit            2.46MB    buildkit.dockerfile.v0
<missing>      8 weeks ago      /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      8 weeks ago      /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```



## (2) The is a better way by using [multi stage build](https://docs.docker.com/build/building/multi-stage/):

```
# file: Dockerfile--better

# First Stage
# ````````````
FROM alpine:3.16.2 AS base
RUN apk update
RUN apk upgrade
RUN apk add --no-cache git openssh-client
ARG SSH_KEY

RUN mkdir /root/.ssh/ && \
  echo "${SSH_KEY}" > /root/.ssh/id_rsa && \
  chmod 600 /root/.ssh/id_rsa

RUN touch /root/.ssh/known_hosts && \
  ssh-keyscan github.com >> /root/.ssh/known_hosts

WORKDIR work_dir

RUN git clone git@github.com:ApolloTang/my-3rd-party-package.git

# Second stage
# ````````````
FROM alpine:3.16.2
WORKDIR deploy
COPY --from=base /work_dir ./
#EOF
```

```
SSH_KEY=`cat ~/.ssh/id_ed25519_for_use_in_read_only_repo` \
  docker build \
  -f Dockerfile--better \
  -t better \
  --build-arg SSH_KEY .
```

```
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED              SIZE
better       latest    9b63ec166188   About a minute ago   5.57MB
```

```
$ docker run -it better sh
/deploy # ls -F
my-3rd-party-package/
/deploy # exit
```

```
$ docker history better
IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
9b63ec166188   About a minute ago   COPY /work_dir ./ # buildkit                    23.4kB    buildkit.dockerfile.v0
<missing>      8 hours ago          WORKDIR /deploy                                 0B        buildkit.dockerfile.v0
<missing>      8 weeks ago          /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      8 weeks ago          /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```



#### Reference

readonly deploy key

https://docs.github.com/en/developers/overview/managing-deploy-keys

https://superuser.com/questions/1314064/read-only-access-to-github-repo-via-ssh-key