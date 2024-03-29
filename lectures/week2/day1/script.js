function foo(elem) {
  // console.log(elem);
  // elem.innerText = 'Hello there';
  // elem.remove();
  elem.style = 'background-color: red;';
}

function changePicture(elem) {
  elem.src = 'https://placekeanu.com/200/200';
}

function changeBack(elem) {
  elem.src = './supercumber.jpg';
}

function foobar() {
  var elem = document.querySelector('#supercumber-soups');
  var elem = document.getElementById('supercumber-soups');

  console.log(elem);

  elem.innerHTML = '<li>New Item</li>';
}

function chooseLunch(elem) {
  alert(`You chose ${elem.value} for lunch!`);
}

function bar(elem) {
  console.log(elem.value);
}

// Asynchronous JS programming
function message() {
  console.log('Delayed message');
}

console.log('Start');
setTimeout(message, 3000);
console.log('End');
