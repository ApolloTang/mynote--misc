How to inspect object in node-cli
=================================

TL:DR
-----

#### Problem with console.log():

  If object is nested deeper than 3 level it is hidden.

##### Solution:

  Use JSON.stringify:

    console.log(JSON.stringify(myObj, null, 2))

#### Problem with JSON.stringify

  If object container circular reference it will fail.

##### Solution:


  Use:

    console.dir(myObject, { depth: null });

  `console.dir` takes an options object in second argument.
  This option object is the same one that used in configuring the `util.inspect()`.


#### Should you use util.inspect() ?

  There is no need to use `util.inspect()` b/c for most use case
  it’s already included in `console.dir()`:

    console.dir(obj, opt)

  in most case is equivalent to:

    console.log(util.inspect(obj, opt))

#### Note:

  Passing `JSON.stringify` to `console.dir` will return formated string.

  `console.log` a map does not work, you must use `console.dir`




Details
-------

Node's "Console.log" only show 3 levels:

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

To see a formated nested object use `JSON.stringify`:

  `console.log(JSON.stringify(myObject,null, 2))`

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

However, `JSON.stringify` does not work with object with circular reference:

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

To suppress the error you can use `console.dir`:

  ```js
  console.dir(circular, {depth:null})
  ```

  *Result:*
  ```js
  {
    a: {
      b: { c: { d: { e: 'e' } } }
    }
  }
  ```


The drawback of `console.dir` is that the output is only partially formated.

#### Extra Note:

  ###### Note

  Using `JSON.stringify` with `console.dir` will print formated string string:

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

  ###### Note

  You cannot use `console.log` to inspect `map`.


---
*Ref:*

[1] https://stackoverflow.com/a/26813465 <br>
[2] https://stackoverflow.com/a/27534731 <br>

*Related:*

https://nodejs.org/en/knowledge/getting-started/how-to-use-util-inspect/ <br>
https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object/32866532#32866532 <br>



