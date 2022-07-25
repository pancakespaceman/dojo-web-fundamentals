function sayHello() {
  console.log("Hi");
}

function subscribe(element) {
  console.log(element);

  if (element.innerText == "Subscribe") {
    element.innerText = "UnSubscribe";
  } else {
    element.innerText = "Subscribe";
  }
}

const colors = [
  "blue",
  "rebeccapurple",
  "papayawhip",
  "red",
  "green",
  "magenta",
  "pink",
  "goldenrod",
  "azure",
  "cornflowerblue",
];

function changeColor(elem) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  elem.style.color = color;
  elem.remove();
}

function showDiv(elem) {
  console.log("The mouse hovered over this tag");
}

function hideDiv(elem) {
  console.log("The mouse moved away from this tag");
}

function changeBoxColor(color, elem) {
  const ryanMasterOfColors = document.querySelector("#box");
  const iLikeEvelynsBraclet = document.querySelector("h1")

  console.log(ryanMasterOfColors);
  ryanMasterOfColors.style.backgroundColor = color;
  iLikeEvelynsBraclet.style.backgroundColor = color;


  document.querySelector("h3").style.backgroundColor = color;

  elem.style.backgroundColor = "cyan"
}


// asynchronous programming
// AJAX  asynchronous javascript and xml
function message() {
  console.log("Delayed message");    
}
  
console.log("Start");
setTimeout(message, 3000);
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
console.log("End");
