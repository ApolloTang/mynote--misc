```
var path = require( "path" );
console.log( path.join( __dirname, "does-not-exist.txt" ) );  

>>  /.../wf/sub/data.txt
```

```
console.log( require.resolve( "./does-not-exist.txt" ) );  

>> Error: Cannot find module './does-not-exist.txt'
```

Note that `require.resolve()` look at the ﬁle system to
make sure the module exists.

Therefore you can not use `require.resolve()` on a file that never exist.
For example if you want to save a new file.


---

Ref:

[https://www.bennadel.com/blog/3243-using-require-resolve-to-calculate-module-relative-file-paths-in-node-js.htm](https://www.bennadel.com/blog/3243-using-require-resolve-to-calculate-module-relative-file-paths-in-node-js.htm)


