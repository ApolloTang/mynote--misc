# UMD

From [jamesh fisher: what are UMD modules?](https://jameshfisher.com/2020/10/04/what-are-umd-modules/): 

"Basically, a UMD module is a JavaScript file that tries to guess at runtime which module system it’s being used in, and then it acts as that kind of module. So you can load the file in a plain `<script>`, or you can load it from an AMD module loader, or you can load it as a Node.js module, and it will always do something sensible."

"Despite claiming to be “universal”, there’s one big module system that UMD doesn’t support: ECMAScript modules."

```js
// from: https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js
(
  function (
    root,
    factory
  ) {
    if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["exports", "b"], factory);
    } else if (
      typeof exports === "object" &&
      typeof exports.nodeName !== "string"
    ) {
      // CommonJS
      factory(exports, require("b"));
    } else {
      // Browser globals
      factory((root.myModuleName = {}), root.b);
    }
  })(
    typeof self !== "undefined" ? self : this,
    function (exports, b) {
      // Use b in some fashion.
      // attach properties to the exports object to define the exported module properties.
      exports.action = function () {};
    }
);
```
