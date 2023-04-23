## TL;DR

```
// @ts-ignore       <-- ignore next line
// @ts-expect-error <-- suppress error with explanation 
 
// @ts-nocheck      <-- ignore the entire file
// @ts-check        <-- force tsc to check *.js file
```

## `//@ts-expect-error` (suppress error with explanation)

REF: [typescript-3-9.html#-ts-expect-error-comments](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)


## Ignoring the entire file
Add `// @ts-nocheck` comments to the top of TypeScript files to disable semantic checks.

REF: [ts-nocheck-in-typescript-files](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#-ts-nocheck-in-typescript-files)

## Enable syntax in js file

Add `// @ts-check` to the first line in your .js files to have TypeScript raise it as an error.

REF: [ts-check](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check)


## Ignoring a block

  At the point (2020.11.27) you cannot
  ref: https://github.com/Microsoft/TypeScript/issues/19573


## Ignoring a TSX attribute

```
  <Foo
    /*
    // @ts-ignore */
    id="foo does not have IdType"
    baz="foo Have bazType"
  />
```

  ref: https://stackoverflow.com/a/61308263/3136861

## Workaround to ignore TSX error in jsx property

```
  -  <CardMedia
  -    component="img"
  -    src={imageUrl}
       ^^^----------- tsc error in 'src' property
  -    className={classes.media}
  -    title="foo"
  -  />

  +  {React.createElement(CardMedia, {
  +    // @ts-ignore
  +    src: imageUrl,
  +    component: 'img',
  +    className: classes.media,
  +  })}
```
  ref: https://stackoverflow.com/a/40245490/3136861


