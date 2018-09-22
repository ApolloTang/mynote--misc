
// Creating element
var box = document.createElement('div');
box.style.setProperty('background-color', '#008800');
box.style.setProperty('width', '100px');
box.style.setProperty('height', '100px');
box.className = "some-class-name";
box.innerHTML = 'some text';
document.body.appendChild(box);


// Append button to body
const myButton = document.createElement('button');
myButton.innerHTML = 'button text';
const body = document.getElementsByTagName('body')[0];
body.appendChild(myButton)





