// Creating
// ========
  const myDivEl = document.createElement('div');
  const textNode = document.createTextNode('my text');



// Inserting
// =========
  document.body.append(myDivEl) // <-- this will break in IE11
                                // use document.body.appendChild()

  document.body.appendChild(myDivEl)

  myDivEl.appendChild(textNode)

  box.innerHTML = 'some text';



// Selecting element
// =================
  const el_withId = document.getElementById('SomeId');
  const el_body = document.getElementsByTagName('body')[0];



// Query
// =====
  const firstEl_input
    = document.querySelector('input')
  const firstEl_input_wContext
    = myDivEl.querySelector('input')

  const allEl_input
    = document.querySelectorAll('input') // <Array>
  const allEl_input_wContext
    = myDivEl.querySelectorAll('input')  //<Array>



// Class name
// ==========
  myDivEl.className='my-classname';



// Styling
// =======
  myDivEl.style.setProperty('background-color', '#008800');



