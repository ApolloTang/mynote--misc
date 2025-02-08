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



## Transpile to commonjs and run with node.  

To run the code with node, you have to transpile it with tsc and rename the output file extension to .cjs: 

1. Open a terminal window and navigate to the directory containing the code.
2. Run the command `tsc <filename>.ts` to transpile the code.
3. Rename the output file extension from .js to .cjs.
4. Run the command `node <filename>.cjs` to execute the code.

```
nvm use 18
cd my-code
tsc foo.ts
mv foo.js foo.cjs  # Rename the output file extension to `.cjs
node foo.cjs
```

Renaming to `*.cjs` is neccessary because for two reasons: 

1. we cannot use `tsc --outFile <filename.cjs>`: 

```
$ tsc foo.ts --outFile foo.mjs
foo.ts:1:1 - error TS6131: Cannot compile modules using option 'outFile' unless the '--module' flag is 'amd' or 'system'.
```

2. We cannot force node to run `.js` as commonjs. See: https://github.com/nodejs/node/discussions/37857