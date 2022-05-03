// alert("Here is an alert!")


// function foobar(elem) {
//   // console.log("This is from my foobar function.")
//   console.log("The element that was pressed is", elem);
//   // elem.innerText = "This is a changed text!"
//   elem.remove();
// }

// function mouseOver(elem) {
//   // console.log(elem);
//   elem.src = "./images/holoCharizard.jpeg"
// }

// function mouseOut(elem) {
//   // console.log(elem);
//   elem.src = "./images/cardBack.jpeg"
// }

function foobar(id) {
  // var element = document.querySelector("#title")
  var element = document.querySelector("#" + id)
  console.log(element)
  element.style = "background-color: red;"
  element.style.backgroundColor = "blue";
  element.innerText = "General Kenobi"
}

function addHTML(id) {
  // string interpolation
  // adding variable values into strings
  var elem = document.querySelector(`#${id}`)
  elem.innerHTML = "<h1>I really like burgers</h1> <h1>I really like pasta</h1>"
  // elem.innerHTML = "<h1>I really like pasta</h1>"
  elem.innerHTML = `
    <h1>Here is html being added using back tics for a string</h1>
    <img src="https://placedog.net/200/200">
    <button onclick="removeMe('${id}')">DELETE</button>
  `

}

function removeMe(id) {
  var elem = document.querySelector(`#${id}`)
  elem.remove();
}

function chooseLunch(element) {
  alert("You picked " + element.value);
}


var name = ""

function validateName(elem) {
  console.log(elem.value)
  if (elem.value.length <= 2) {
    var nameTag = document.querySelector("#name")
    // nameTag.innerHTML = nameTag.innerHTML + "<h1 style='color: red;' class=>NOT A VALID NAME</h1>"
    var h1 = document.createElement("h1")

    h1.innerText = "NOT A VALID NAME"
    h1.style.color = "red"
    h1.className = "error"
    

    nameTag.append(h1)
  } else {
    var h1 = document.querySelectorAll(".error")
    console.log(h1)
    for (const thing of h1) {
      thing.remove();
    }
  }
}

function deleteThePage() {
  var body = document.querySelector("body")
  body.remove()
}

// setTimeout(deleteThePage, 3000)
