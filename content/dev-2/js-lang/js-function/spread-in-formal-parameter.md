A study of spread in formal-parameters
=========================================

```js
function f(a, ...b)      { console.log(b) };
function g(   ...b)      { console.log(b) };

  f(1,2,3) // [ 2, 3 ]
  g(1,2,3) // [ 1, 2, 3 ]

function m(a, ...[b])    { console.log(b) };
function n(   ...[b])    { console.log(b) };

  m(1,2,3) // 2
  n(1,2,3) // 1

function p(a, ...[...b]) { console.log(b) };
function q(   ...[...b]) { console.log(b) };

  p(1,2,3) // [ 2, 3 ]
  q(1,2,3) // [ 1, 2, 3 ]


function x(a, ...[b,c]) { console.log(a,b,c) };
function y(...[a,b,c])  { console.log(a,b,c) };

  x(1,2,3) // 1 2 3
  y(1,2,3) // 1 2 3
```

