# Null in javascript

## Determine if a value is null

`null` is a primitive type. For a primitive type, you can determine the type with the operator `typeof`. However, this strategy does not work for `null`. Using `typeof` on a variable with `null` value returns `"object"`:

```js
console.log(typeof null); // "object"
```

In practice, if you want to find out whether the type of a value is `null`, you compare the value to the `null` itself.

```js
const maybeNull = null;
console.log(maybeNull === null);  // true
```

## Discussion

 `null` is a primitive type in javascript therefore you would expect the operator `typeof` to return a string `"null"` instead of reference type `"object"`. After all, the expected behaviour of other primitive type is to return the name of the type (for example a string type would return `"string"`).  Although this is considered a mistake in the javascript community, you could reason that `null` is and empty object pointer.

## Interesting Read

[https://2ality.com/2013/10/typeof-null.html](https://2ality.com/2013/10/typeof-null.html)

[https://web.archive.org/web/20160727234604/https://kiro.me/blog/typeof_null.html](https://web.archive.org/web/20160727234604/https://kiro.me/blog/typeof_null.html)

