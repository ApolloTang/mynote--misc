
Array mutation
``````````````

* will not modifiy the array:

  concat()
  slice()

* will modify the original array:

  splice()


Copying array:
``````````````

  // using slice (all 3 syntex are equivalent):

  myArray_copy = Array.prototype.slice.call(myArray);
  myArray_copy = [].slice.call(myArray);
  myArray_copy = myArray.slice(myArray);

  // using concat:

  myArray_copy = Array.proptotype.concat.call(myArray);
  myArray_copy = [].concat(myArray);


Return portion of array (non mutation):
````````````````````````````````````````
  a = [0,1,2,3,4];
  b = a.slice(1,2);
  // index 1 to 2 minus 1
  // [1, 2)

  a // [0,1,2,3,4]  original array not altered
  b // [1]


Remove an element by index
array (non mutation):
``````````````````````````

  a = [0,1,2,3,4];

  // to remove element '2' (index 1)
  a_ = a.slice(0,2).concat( a.slice(3,5) );
  //   ^^^^^^^^^^^^         ^^^^^^^^^^^^
  //   [0,2)                [3,5)

  a  // [0,1,2,3,4]  original array not altered
  a_ // [0,1,3,4]

  ES6 syntax:
  ``````````
  a_ = [
      ...a.slice(0,2),
      ...a.slice(3,5)
  ];


Alter an element by index in
an array (non mutation):
````````````````````````````

  a = [0,1,2,3,4];

  // to alter 2 to 'two' (index 1)
  a_ = a.slice(0,2)
    .concat('two')
    .concat(a.slice(3,5));

  a  // [0,1,2,3,4]  original arry not altered
  a_ // [0,1,'two',3,4]

  ES6 syntax:
  ``````````
  a_ = [
    ...a.slice(0,2),
    'two',
    ...a.slice(3,5)
  ];


Remove an el by value
(non mutation)
``````````````````````

  a = [0,1,2,3,4]

  // remove element w value 2
  a_ = a.filter(d=> d!=='2')

  a  // [0,1,2,3,4] original array not altered
  a_ // [0,1,3,4]


Check is type array
````````````````````

  Object.prototype.toString.call( [] )  // '[object Array]'
  Array.isArray([])  // true

