
// Selecting element
  const el = document.getElementById('SomeId');
  const el = document.getElementsByTagName('body')[0];


// Creating element
  const myButton = document.createElement('button');


// Class name
  const container = document.createElement('div');
  container.className='my-classname';
  document.body.append(container) // <-- this will break in IE11
                                  // use document.body.appendChild()
                                  // instead


// Body
  const box = document.createElement('div');
  document.body.appendChild(box);

  const myBox = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(myBox)


// Creating TextNode
  const text ='My Text'
  const container = document.createElement('div');
  const textNode = document.createTextNode(text);
  container.appendChild(textNode)
  document.body.append(container) // <-- this will break in IE11
                                  // use document.body.appendChild()



