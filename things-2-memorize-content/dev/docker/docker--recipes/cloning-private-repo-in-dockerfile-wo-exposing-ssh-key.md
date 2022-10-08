# Cloning Private Repositories in Dockerfile Without Exposing SSH Keys



## (1) The following is insecure

The following Dockerfile attempts to create an image that can clone a pivate repositories into a running container:  

```dockerfile
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

The SSH key from the host computer is passed in during build time via setting a shell variable `SSH_KEY`.  This is acheived with the `--build-arg` flag during build: 

```sh
SSH_KEY=`cat ~/.ssh/id_ed25519_for_use_in_read_only_repo` \
  docker build \
  -f Dockerfile--insecure \
  -t insecure \
  --build-arg SSH_KEY .
```

```sh
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
insecure     latest    fe3962cfdd8f   9 minutes ago   27MB
```

The image works as expected, and the private repo is available in the container:

```sh
$ docker run -it insecure sh
/work_dir # ls -F
my-3rd-party-package/
/work_dir # exit
```

However, there is a problem: the SSH key is exposed in the docker history:

```sh
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

This problem can be avoided if we use [multi stage build](https://docs.docker.com/build/building/multi-stage/). Which we will show you in the next section.



## (2) A better way by using [multi stage build](https://docs.docker.com/build/building/multi-stage/):

```dockerfile
# file: Dockerfile--better

# First Stage
# ````````````
FROM alpine:3.16.2 AS temporary
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

# Second Stage
# ````````````
FROM alpine:3.16.2
WORKDIR deploy
COPY --from=temporary /work_dir ./
#EOF
```

The above Dockerfile has two stages each of them creates a separate images under the hood. The one in first stage is called `temporary` . The second images in second stage does not have a name. SSH key is pass into first stage for cloning the private repo.  The cloned repos is then copy into the second stage. Only the second stage goes to become the resulting image. Everything in the first stage is discarded.    

```sh
SSH_KEY=`cat ~/.ssh/id_ed25519_for_use_in_read_only_repo` \
  docker build \
  -f Dockerfile--better \
  -t better \
  --build-arg SSH_KEY .
```

```sh
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED              SIZE
better       latest    9b63ec166188   About a minute ago   5.57MB
```

```sh
$ docker run -it better sh
/deploy # ls -F
my-3rd-party-package/
/deploy # exit
```

Examining the history, you can see the that SHH key is not present: 

```sh
$ docker history better
IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
9b63ec166188   About a minute ago   COPY /work_dir ./ # buildkit                    23.4kB    buildkit.dockerfile.v0
<missing>      8 hours ago          WORKDIR /deploy                                 0B        buildkit.dockerfile.v0
<missing>      8 weeks ago          /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      8 weeks ago          /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```

In addition, the final image is only 5.57MB in size (compare to 27MB, in the first case). 



#### Reference

readonly deploy key

https://docs.github.com/en/developers/overview/managing-deploy-keys

https://superuser.com/questions/1314064/read-only-access-to-github-repo-via-ssh-key