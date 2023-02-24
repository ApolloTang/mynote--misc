# How to inspect object in node-cli

## TL;DR

### Use JSON.stringify:

```js
console.log(JSON.stringify(myObj, null, 2))
```

### If the object contains a circular reference use `console.dir`:

```js
console.dir(myObject, {showHidden: true, depth: null, colors: true});
```

Useful options:
- showHidden: If `true` then show the object's non-enumerable properties (default to false).
- depth: If `null` make it recurse indefinitely (default to 2).
- colors: If `false` supress ANSI color code (default to true).


### Use a logger 3rd party library:

[pino](https://getpino.io/#/)


---

## Problem with console.log()

If the object is nested deeper than 3 levels it is hidden.

```
var myObject = {
  a: {
    b: {
      c: { d: { e: 'e' } } }
  }
}
console.log(myObject)
```

*Result:*

```js
{ a: { b: { c: [Object] } } }
```

To show nested levels greater than 3, you can use `JSON.stringify`:

```js
console.log(JSON.stringify(myObject, null, 2))
```
*Result:*

```js
{
  "a": {
    "b": {
      "c": {
        "d": {
          "e": "e"
        }
      }
    }
  }
}
```

## Problem with `JSON.stringify`

If the object contains a circular reference `JSON.stringify` will fail:

  ```js
  var d = {}; d.d = d // <--- this is a circular referencing object [1]
  var circular = {
    a: {
      b: {
        c: { d: d }
      }
    }
  }
  console.log(JSON.stringify(circular, null, 2))
  ```

 *Result:*

  ```js
  TypeError: Converting circular structure to JSON
  ```

To get around this you can use `console.dir`:

```js
console.dir(circular, {depth:null})
```

*Result:*
```js
{
  a: {
    b: { c: { d: <ref *1> { d: [Circular *1] } } }
  }
}
```

The drawback of `console.dir` is that the output is only partially formatted:

```js
var myObject = {
  a: {
    b: {
      c: { d: { e: 'e' } } }
  }
}
console.dir(myObject, {depth: null})
```

*Result:*
```js
{
  a: {
    b: { c: { d: { e: 'e' } } }
  }
}
```


`console.dir` takes an option in the second argument:

```js
console.dir(myObject, options);
```

This option is the same as that used in configuring the `util.inspect()`. See [nodejs.org/api/util.html#utilinspectobject-options](https://nodejs.org/api/util.html#utilinspectobject-options) for details

### Should you use util.inspect() ?

  There is no need to use `util.inspect()` because `console.dir(obj, opt)` in most cases is equivalent to `console.log(util.inspect(obj, opt))`.

### Inspecting object's non-enumerable properties


```js
const obj = { enumerable: 'enumerable' }
const protoObj = { nonEnumerable: 'nonEnumerable' }
Object.setPrototypeOf(obj, protoObj)

console.dir(obj)
console.dir(obj, {showHidden: true})
```
*Result:*
```js
{ enumerable: 'enumerable' }
{ enumerable: 'enumerable', nonEnumerable: 'nonEnumerable' }
```



### Note:

Passing `JSON.stringify` to `console.dir` will return a formatted string.

```js
console.dir(JSON.stringify(myObject,null, 2))
```

*Result:*

```js
'{\n' +
  '  "a": {\n' +
  '    "b": {\n' +
  '      "c": {\n' +
  '        "d": {\n' +
  '          "e": "e"\n' +
  '        }\n' +
  '      }\n' +
  '    }\n' +
  '  }\n' +
  '}'
```



---
*Ref:*

[1] https://stackoverflow.com/a/26813465 <br>
[2] https://stackoverflow.com/a/27534731 <br>

*Related:*

https://nodejs.org/en/knowledge/getting-started/how-to-use-util-inspect/ <br>
https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object/32866532#32866532 <br>



