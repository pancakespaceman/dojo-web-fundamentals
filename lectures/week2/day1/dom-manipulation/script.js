var alPastorImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tacos-al-Pastor.jpg/800px-Tacos-al-Pastor.jpg"
var cabezaImg = "https://travelfoodatlas.com/wp-content/uploads/2021/02/tacos-de-cabeza-720x405.jpg"


console.log("Start")
setTimeout(myMessage, min(5))
console.log("End")

function minToMili(min) {
  return min * 60 * 1000
}

function foo() {
  // console.log(document.querySelector(".test1"))
  // console.log(document.querySelectorAll("p"))
  var elem = document.querySelector("#p1")

  console.log(elem)
  elem.innerText = "hiiiiiiiiiiiiiiiiii"
  elem.style.backgroundColor = "crimson"
}

function cabeza(elem) {
  // console.log(elem)
  elem.src = cabezaImg
}

function pastor(elem) {
  elem.src = alPastorImg
}

function replaceMe() {
  var div = document.querySelector("#myBox")

  div.innerHTML= "<h1>I HAVE THE POWER!!!!</h1>"
}

function blah(elem) {
  console.log(elem.value)
}

function myMessage() {
  console.log("I really like tacos")
}



// var tortilla = "soft corn tortilla";
// var protein = "tinga chicken";
// var cheese = "cotija cheese";
// var toppings = ["lettuce", "pico de gallo", "guacamole"];

// // var taco1 = [tortilla, toppings, cheese, protein]
// // console.log(taco1)

// // taco1["tortilla"]

// var thing = {
//   thing1: "test"
// }

// var taco1 = {
//   "tortilla": "soft corn tortilla",
//   "protein":  "tinga chicken",
//   "cheese":   "cotija cheese",
//   "toppings": ["lettuce", "pico de gallo", "guacamole"]
// }

// console.table(taco1)
