Use the following to ensure potablility between platform:

```bash
sed -i.bak -e 's/foo/bar/' -- "${TARGET}" && rm -- "${TARGET}.bak"
```

REF: https://unix.stackexchange.com/a/381201/62821

