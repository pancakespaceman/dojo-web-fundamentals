function foo(elem) {
  console.log(elem)
  // elem.innerText = "This text just got changed."
  elem.remove()
}


function bar(idParam) {
  console.log(idParam)
  // querySelector needs a string that is a valid
  // CSS selector
  // #id  or a  .class or a h1  or a .class h2
  // needs to be written as we would in the CSS file
  var elem = document.querySelector(idParam)
  console.log(elem)

  // elem.innerText = "I changed the name"
  // elem.style.backgroundColor = "tomato"
  elem.classList.add("test")
}


function foobar() {
  var elem = document.querySelector('#soup-list3')

  console.log(elem)
  // elem.innerText = "This text just got changed."
  elem.innerHTML = "<li>Here is a new li elem</li>"
}

function chooseLunch(element) {
  alert("You picked " + element.value);
}

function inputText(elem) {
  console.log(elem.value)
}


function message() {
  console.log("Delayed message");    
}
console.log("Start");
// passing the function as an argument
// run this function after a period of time
setTimeout(message, 3000);
console.log("End");
