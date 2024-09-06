console.log('hello from the js file')

function foo() {
  console.log("the function foo ran and here is the console.log output")
  alert("alert from the foo function")
}


function changeColor(elem) {
  // using the this keyword as an argument, we now have the element from the HTML file
  // which is an object
  // elem.innerText
  // we can target any attribute of the element like its a key/value pair
  console.log(elem.innerText)

  elem.innerText = "Hahaha this was changed by JS"

  elem.style = "background-color: dodgerblue;"
  
}

function removeButton(elem) {
  console.log(elem)
  elem.remove()
}


function makeRed(elem) {
  elem.style = "background-color: red;"
}
function removeRed(elem) {
  elem.style = "background-color: white;"
}