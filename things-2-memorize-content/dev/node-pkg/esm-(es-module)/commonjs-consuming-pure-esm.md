# Consuming ESM in commonjs

CommonJs **cannot** consume ESM, but you can use import, here is an example using Chalk@5

```js
async function chalk() {
  return (await import("chalk")).default;
}

chalk().then(c=>console.log(c.red('adsf')))

```



```js
async function chalk() {
  return (await import("chalk")).default;
}
async function main(){
  console.log((await chalk()).red(">"));
}
main()
```



```js
const c = import('chalk')
c.then(c=>console.log(c.default.red('asdfs')))
```

Ref: 

- [(stackoverflow) chalk - Error [ERR_REQUIRE_ESM]: require() of ES Module](https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module)
- [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
