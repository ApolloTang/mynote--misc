# How do you determine if an entity is an array?

## Use ES6 `isArray()` method:

```js
  Array.isArray([])  // true
```

## Call object's `toString()` method on an array:


```js
  Object.prototype.toString([])  // '[object Array]'
```

Similarly:

```js
  Object.prototype.toString.call([])  // '[object Array]'
```