## Running ts-node with nodemon

Make sure `ts-node` and `nodemon` is installed globally.

```
nodemon -w ./foo.ts -x ts-node ./foo.ts
```

### To run ts-node despite of type error: 

**To execute despite of typescript error:**  add`--logError` before your entry file:

```
nodemon -w ./foo.ts -x ts-node --logError ./foo.ts
```

**To execute but silence typescript error:**  add`-T` before your entry file:

```
nodemon -w ./foo.ts -x ts-node -T ./foo.ts
```

The `-T ` is short for `--transpileOnly

Reference:

[https://stackoverflow.com/questions/60726445/how-to-use-ts-node-regardless-of-errors](https://stackoverflow.com/questions/60726445/how-to-use-ts-node-regardless-of-errors)