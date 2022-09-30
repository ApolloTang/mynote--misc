# python3 playground in Docker container



Create a file called "Dockerfile-python3" with the following contents:

```
FROM alpine:3.15
RUN apk update
RUN apk upgrade
Run apk add python3
Run python3 -m ensurepip --upgrade
```

Create an image from the above

```
$ docker build -f Dockerfile-python3 -t name1 .
                                          #   ^-- important, don't 
                                          #       forget the 'dot'
```

The above create an image called 'name1'.

To see the images has been created:

```
$ docker images | grep name1
name1        latest    6ff7a4cd159c   36 minutes ago   71MB
```
To run a terminal from this images, do the following:

```
$ docker run -it name1 sh
/ #
```

To exit without stopping the container type the following in the terminal: 

```
^P^Q    # [control-p][control-q]
```

To attach the terminal again; first, get the id of container with: 

```
docker ps
```

Then attach:

```
docker attach <container-id>
```

To get another terminal from the container, in another terminal, type:

```
docker exec -it <container-id> sh
```



