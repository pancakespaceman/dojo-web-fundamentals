function properGreeting() {
  var whateverIWant = document.querySelector("h1")

  if (whateverIWant.innerText === "Hello There") {
    whateverIWant.innerText = "General Kenobi"
  } else {
    whateverIWant.innerText = "Hello There"
  }
}


// function properGreeting(whateverIWant) {
//   console.log(whateverIWant)
//   whateverIWant.innerText = "something else"
// }

function buttonChange1() {
  // document.querySelector("button").style.backgroundColor = "red"
  document.querySelector("button").classList.add("amazing")
  
}
function buttonChange2() {
  document.querySelector("button").style.backgroundColor = "blue"
}

function foo() {
  var div = document.querySelector("#main")

  div.innerHTML = "<h1>I AM NEW TO THIS PAGE</h1>"
}

function message() {
  console.log("Delayed message");    
}
  
console.log("Start");
setTimeout(message, 1000);
console.log("End");