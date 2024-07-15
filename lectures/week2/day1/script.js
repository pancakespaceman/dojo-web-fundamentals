// this keyword
// when inside an object, its how an object refers to itself
var dog1 = {
  name: "Vicky",
  age: 7,
  hairColor: "brindle",
  foo: function () {
    console.log(this.hairColor);
  },
};

var dog2 = {
  name: "Leia",
  age: 3,
  hairColor: "red and white",
  foo: function () {
    console.log(this);
  },
};

// dog2.foo();

// We can also use the this keyword with our HTML

function foo(elem) {
  console.log(elem);

  // i can access any attribute of that HTML element
  // elem.innerText = "Text changed by JS";
  elem.remove();
}

function turnOff(elem) {
  if (elem.innerText === "On") {
    elem.innerText = "Off";
  } else {
    elem.innerText = "On";
  }
}

function bar(id) {
  var elem = document.querySelector(id);

  console.log(elem);
  elem.innerText = "You clicked on the picture!";
  elem.style.backgroundColor = "red";
}

function over(elem) {
  elem.src = "https://placekeanu.com/200/200";
}

function out(elem) {
  elem.src = "./beetman.jpg";
}

function chooseLunch(elem) {
  alert(`You chose ${elem.value} for lunch!`);
}

function foobar(elem) {
  console.log(elem.value);
}

// Async JavaScript
// run code at a later time

function message() {
  console.log("Delayed message");
}

console.log("Start");
setTimeout(message, 5000);
console.log("End");
