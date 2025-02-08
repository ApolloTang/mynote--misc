# sed examples



## Using sed togather with ripgrep to edit many files:

```bash
sed -i '' -e 's/needle/pin/' -- $(rg needle -l)
```


## Replace simver in package.json

In this example we are using `#` as the delimiter (instead of the  default delimeter `/`)

```bash
sed -i '' -e 's#"@apollotang\/my-3rd-party-package": "1\.0\.0"#"@apollotang\/my-3rd-party-package": "3.0.0"#g'
```

The above replace:

```
"@apollotang/my-3rd-party-package": "1.0.0"
```
with
```
"@apollotang/my-3rd-party-package": "3.0.0"
```

## Replace localhost with ip address in all package.json in a sub-directory:

```bash
for FILE in ./demo-packages/**/package.json; do  echo "$FILE" | xargs gsed -i 's/localhost/127.0.0.1/' ; done
```

Ref:
- https://stackoverflow.com/questions/10445934/change-multiple-files
- https://www.digitalocean.com/community/tutorials/workflow-loop-through-files-in-a-directory



---eof---
