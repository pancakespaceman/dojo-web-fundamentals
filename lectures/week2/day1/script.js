console.log('hello from the js file');

// Arrays use indexes
// JS Objects use key/value pairs
var user1 = {
  firstName: 'Heidi',
  lastName: 'Chen',
  position: 'Instructor',
  classesTaught: 20,
};

var user2 = {
  firstName: 'Christian',
  lastName: 'Land',
  position: 'Senior TA',
  classesTaught: Infinity,
};

user1.position;
user2.firstName;

function foo() {
  alert('You clicked on the button. This ran from the JS file.');
}

function bar(elem) {
  console.log(elem);
}

function foobar(elem) {
  console.log(elem.innerText);
}

function getHTML(elem) {
  console.log(elem.innerHTML);
}

function removeElem(elem) {
  console.log('Removing elem with text of:', elem.innerText);
  elem.remove();
  elem.style;
}

function changeText() {
  var elem = document.querySelector('#dill-pickles');
  console.log(elem);
  elem.innerText = 'General Kenobi';
}

function grabById(id) {
  console.log(id);
  var elem = document.querySelector('#' + id);
  console.log('here is the element:', elem);
  elem.style.backgroundColor = 'blue';
  elem.innerText = 'This is really cool!';
}

function grabBySelector(selector) {
  var elem = document.querySelector(selector);

  elem.style.backgroundColor = 'aqua';
  elem.innerText = '<h2>I am a new h2 tag</h2>';
}

function changeImage(id) {
  var img = document.querySelector('#' + id);
  img.src = 'https://placekeanu.com/500';
}

// asynchronous programming
// code that runs out of order
function message() {
  console.log('Delayed message');
}

console.log('Start');
// the 2nd argument is the time in milliseconds
// the 1st argument is a callback function
// we are NOT invoking the message function
// we are passing it as an argument
setTimeout(message, 3000);
console.log('End');
