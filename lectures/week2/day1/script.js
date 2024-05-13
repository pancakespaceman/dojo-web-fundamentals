function foo(elem) {
  console.log(elem)
  // elem.innerText = "Magical Unicorns" // this is how we change text
  // elem.remove()
  elem.style = "background-color: red; color: orange;"
  // alert('Ninja was liked')
}

function changePic(elem) {
   // elem contains the entire element
   // which means we can change anything (any attribute) of the element
   elem.src = "https://placekeanu.com/150/150"
}

function changeBack(elem) {
  // console.log('mouse moved away from element')
  // console.log(elem);
  elem.src = "./supercumber.jpg"
}


function bar() {
  var elem = document.querySelector("#supercumber-soups");

  elem.innerHTML = "<li>Sinegan</li><li>Pho</li><li>udon</li>"

}


function chooseLunch(element) {
    alert("You picked " + element.value);
}

function foobar(elem) {
  console.log(elem.value)
}


// Asynchoronous Programming
function message() {
    console.log("Delayed message");    
}


function greet(name) {
  console.log("Hello there,", name);
}
    
console.log("Start");
setTimeout(greet, 3000);
console.log("End");
// more code


// what if we wanted parameters
// anonymous function
setTimeout(function() {greet("Kevin")}, 3000)

// setTimeout(() => {message("string")}, 3000)