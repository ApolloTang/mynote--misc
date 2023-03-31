# Multi stage build

Example: 

```
# file: Dockefile

# Stage One
# -----------
FROM alpine:3.16.2 AS stage_one
WORKDIR /wf
RUN echo 'this is stage one' | cat > 'foo.txt'

# Stage Two
# -----------
FROM alpine:latest
COPY --from=stage_one /wf/foo.txt ./

# EOF
```

```
docker build -t jupiter .
```

```
$ docker run jupiter cat foo.txt
this is stage one
```

**Reference**:
https://docs.docker.com/build/building/multi-stage/
