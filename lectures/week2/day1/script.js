function clickme(elem) {
  console.log(elem)
  // elem.innerText = "Changed by JS"
  // elem.remove()
  elem.style = "background-color: tomato;"
}



var dog = {
  name: "Vicky",
  age: 7,
  hairColor: "Brindle"
}

dog.name


function changeTitle(id) {
  var elem = document.querySelector(id)
  console.log(elem)
  elem.style = "background-color: crimson; font-family:serif; color: forrestgreen;"
}


function over(elem) {
  // i can access any attribute of the html element
  elem.src = "https:/placekeanu.com/200/200"
}

function out(elem) {
  elem.src = "./supercumber.jpg"
}


function dropdown(elem) {
  console.log(elem.value)
}

function input(elem) {
  console.log(elem.value)
}


function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 1000);
console.log("End");
