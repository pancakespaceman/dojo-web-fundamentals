function removeButton(elem) {
  elem.remove();
}


function signOut(elem) {
  elem.innerText = "Sign Out";
}

function doStuff() {
  var elem = document.querySelector("#thing");

  elem.innerHTML = elem.innerHTML + "<div class='box'></div>"
}


function rand255() {
  return Math.floor(Math.random() * 256) // number from 0 -255.99999
}


function randColor() {
  // "background-color: rgb(255, 255, 255)"
  // string interpolation using back ticks ``
  return `background-color: rgb(${rand255()}, ${rand255()}, ${rand255()});`
}

var header = document.querySelector(".header")
var main = document.querySelector(".main")

function randomizeBackgroundColor() {
  header.setAttribute("style", randColor());
  main.setAttribute("style", randColor());
}

var timeout = setInterval(randomizeBackgroundColor, 1000);

function stopColors() {
  clearInterval(timeout);
}

