# AMD


[Jamesh Fisher: What are AMD modules? ](https://jameshfisher.com/2020/10/03/what-are-amd-modules/):

"You know you’re looking at AMD (or something like it) if you see calls to a `define` function, or the inclusion of an AMD loader script, like `<script src="lib/require.js"></script>`."

```js
// This is https://example.com/modules/printCounter.js
define(                         // the function `defined` is  injected via `<script src="lib/require.js"></script>`
  ['./counter', 'print'],       // names of dependencies
  function (counter, print) {   // the dependency modules passed in
    return {                    // our module object, with one function
      printAndIncrement: () => {
        print(counter.get());
        counter.increment();
      }
    }
  }
);
```

"An AMD module like this assumes a global define function, which is provided by an AMD loader like RequireJS. The AMD loader knows how to load a module given its name. For example, the name `./counter` might map to the file `https://example.com/modules/counter.js`. The AMD loader loads this, e.g. by inserting `<script src='/modules/counter.js'></script>`into the document."


