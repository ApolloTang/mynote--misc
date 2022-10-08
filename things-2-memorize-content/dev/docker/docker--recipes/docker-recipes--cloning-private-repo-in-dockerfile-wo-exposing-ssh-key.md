# Cloning Private Repositories in Dockerfile Without Exposing SSH Keys

#deployment #ssh-key #docker



## Summary

Dockerfile recipe for cloning private repositories (go to  [⚓recipe](#recipe)).



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

RUN git clone git@github.com:ApolloTang/my-private-package.git
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
insecure     latest    94e0493f959c   2 minutes ago   27MB
```

The image works as expected, and the private repo is available in the container:

```sh
$ docker run -it insecure sh
/work_dir # ls -F
my-private-package/
/work_dir # exit
```

However, there is a problem: the SSH key is exposed in the docker history:

```sh
$ docker history insecure
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
94e0493f959c   3 minutes ago   RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   23.8kB    buildkit.dockerfile.v0
<missing>      3 hours ago     WORKDIR /work_dir                               0B        buildkit.dockerfile.v0
<missing>      3 hours ago     RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   656B      buildkit.dockerfile.v0
<missing>      3 hours ago     RUN |1 SSH_KEY=-----BEGIN OPENSSH PRIVATE KE…   419B      buildkit.dockerfile.v0
<missing>      3 hours ago     ARG SSH_KEY                                     0B        buildkit.dockerfile.v0
<missing>      11 hours ago    RUN /bin/sh -c apk add --no-cache git openss…   19MB      buildkit.dockerfile.v0
<missing>      11 hours ago    RUN /bin/sh -c apk upgrade # buildkit           66.6kB    buildkit.dockerfile.v0
<missing>      11 hours ago    RUN /bin/sh -c apk update # buildkit            2.46MB    buildkit.dockerfile.v0
<missing>      8 weeks ago     /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      8 weeks ago     /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```

This problem can be avoided if we use [multi stage build](https://docs.docker.com/build/building/multi-stage/). Which we will show you in the next section.



## (2) A better way by using [multi stage build](https://docs.docker.com/build/building/multi-stage/):

<a name="recipe">⚓recipe</a>


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

RUN git clone git@github.com:ApolloTang/my-private-package.git

# Second Stage
# ````````````
FROM alpine:3.16.2
WORKDIR deploy
COPY --from=temporary /work_dir ./
#EOF
```

The above Dockerfile has two stages each of which creates a separate image under the hood. The one in the first stage is called `temporary`. The second image in the second stage does not have a name. An SSH key is passed into the first stage for cloning the private repo.  The cloned repository (the artifact) is then copied into the second stage via the following:

```docker
COPY --from=temporary /work_dir ./
```

Only the second stage goes to become the resulting image. Everything in the first stage is discarded.

```sh
SSH_KEY=`cat ~/.ssh/id_ed25519_for_use_in_read_only_repo` \
  docker build \
  -f Dockerfile--better \
  -t better \
  --build-arg SSH_KEY .
```

```sh
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
better       latest    67677e0b811f   52 seconds ago   5.57MB
```

```sh
$ docker run -it better sh
/deploy # ls -F
my-private-package/
/deploy # exit
```

Examining the history, you can see that the SSH key is not present:

```sh
$ docker history better
IMAGE          CREATED              CREATED BY                                      SIZE      COMMENT
67677e0b811f   About a minute ago   COPY /work_dir ./ # buildkit                    23.8kB    buildkit.dockerfile.v0
<missing>      11 hours ago         WORKDIR /deploy                                 0B        buildkit.dockerfile.v0
<missing>      8 weeks ago          /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      8 weeks ago          /bin/sh -c #(nop) ADD file:2a949686d9886ac7c…   5.54MB
```

In addition, the final image is only 5.54MB in size (compared to 27MB, in the first case).

### :warning: Becareful

In your second stage, make sure you start a new build stage with the `alpine:latest` image as its base:

```docker
# Second Stage
# ````````````
FROM alpine:3.16.2
```

The following is a mistake:

```dockerfile
# Second Stage
# ````````````
# FROM alpine:3.16.2  # <-- commented out
FROM temporary        # <-- base this build on the previous stage
```

The above is insecure because you are not starting the new build stage, instead, it is based on previously built image layers which contain the layer where you pass in your SSH key.

### :white_check_mark: Additional good practice (deploy SSH key)

Instead of using the SSH key you normally use to push code to Github. [Create](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key) a separate SSH key for deployment purpose:

```
$ ssh-keygen -t ed25519 -C "your_email@example.com Deployment READ ONLY"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/joe/.ssh/id_ed25519): /Users/joe/.ssh/id_ed25519_for_use_in_read_only_repo
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Do not add a passphrase (line 4 above) because you won't be available to type the passphrase during build automation.

Add this  deploy SSH key to the specific private repo in the setting, for example:

```txt
https://github.com/joe/my-private-package/settings/keys
```

:warning: Note that this is the setting of a specific private repo; it is not the setting for your Github account (`https://github.com/settings/keys`).

**Reference**

https://docs.github.com/en/developers/overview/managing-deploy-keys

https://superuser.com/questions/1314064/read-only-access-to-github-repo-via-ssh-key
