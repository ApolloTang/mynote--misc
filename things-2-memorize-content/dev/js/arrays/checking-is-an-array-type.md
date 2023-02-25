# How do you determine if an entity is an array?

## Use ES6 `isArray()` method:

```js
  Array.isArray([])  // true
```

## Call object's `toString()` method on an array:



Similarly:

```js
  Object.prototype.toString.call([])  // '[object Array]'
```

###  💣💣 Becareful!

Make sure you invoke `toString` with `call()`, otherwise you get `[object Object]`:

```js
  Object.prototype.toString([])  // '[object Object]'
```