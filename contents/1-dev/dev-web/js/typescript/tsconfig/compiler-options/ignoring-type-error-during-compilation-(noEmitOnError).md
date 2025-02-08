# Typescript - How to compile even if errors

Note that the default behavior when transpile is that the `.js`
will always generate even if there is type error. This is because
`noEmitOnError` is set to `false` by default.
([See documentation](https://www.typescriptlang.org/tsconfig#noEmitOnError)).

Also it is worth mention that if you decide to set `noEmitOnError`
to `true` (meaning: suppress output on type-error), it will not
work unless you specify the `tsconfig.json` with the `-p` flag:

```
tsc -p ./tsconfig.json
```

or use cli flag:

```
tsc --noEmitOnError main.ts
```
See: [[SOLVED] Compiler option noEmitOnError not working with tsc 2.8.1 #23179](https://github.com/microsoft/TypeScript/issues/23179).

Also on [stackoverflow](https://stackoverflow.com/questions/68145142/how-can-i-compile-the-typescript-project-while-ignoring-all-the-errors).

