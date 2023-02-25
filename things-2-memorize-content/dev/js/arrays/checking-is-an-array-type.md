# How do you determine if an entity is an array?


```js
  Array.isArray([])  // true
```


```js
  Object.prototype.toString.call([])  // '[object Array]'
```