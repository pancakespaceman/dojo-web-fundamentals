function foo(element) {
  // element.innerText = '<li>New list item</li>';
  element.innerHTML = '<li>New list item</li>';
  // element.remove()

}

function bar(idToSelect) {
  var elem = document.querySelector(idToSelect);
  
  console.log(elem)
  // elem.remove()
  // elem.src = 'https://placekeanu.com/200/200'
  // elem.style.border = '5px solid red';
  elem.classList.add('dynamic')
}


function chooseLunch(element) {
  alert("You picked " + element.value);
}


function setName(element) {
  console.log(element.value);
}


function message() {
  console.log("Delayed message");    
}
  
console.log("Start");
// asynchronous programming
setTimeout(message, 500);
console.log("End");