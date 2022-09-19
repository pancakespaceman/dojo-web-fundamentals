function addStyle() {
  // selecting an element using a css selector and the
  // querySelector function
  var myHeader = document.querySelector("header");

  // console.log(myHeader)

  // changing the style of an element
  myHeader.style.backgroundColor = "blanchedalmond";
  myHeader.style.padding = "20px";

  // adding classes to the element
  myHeader.classList.add("flex");
  myHeader.classList.add("justify-between");
}

function removeStyle() {
  var myHeader = document.querySelector("header");

  console.log("Header before", myHeader);

  // Setting style and class attributes back to empty to remove style
  myHeader.style = "";
  myHeader.classList.remove("flex", "justify-between");

  console.log("Header after", myHeader);
}

function removeMe() {
  var btn = document.querySelector("#btn1");

  btn.remove();
}

function chooseLunch(element) {
  alert("You picked " + element.value);
}

function setName(element) {
  var nameTag = document.querySelector("#name-tag");
  console.log(element.value);
  nameTag.innerText = element.value;
}

function message() {
  console.log("Delayed message");    
}
  
console.log("Start");
setTimeout(message, 3000);
console.log("End");
