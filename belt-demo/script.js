function removeElem(elem) {
  elem.remove();
}

// JS feature input display

// Method 1 - use a variable to hold the input data and access in a fucntion
var inputString = '';

function inputData(elem) {
  inputString = elem.value;
}

// Method 2 - query select the input tag to get the value
// function showInputData() {
//   var elem = document.querySelector('#search')
//   alert(elem.value)
// }



function showInputString() {
  alert(`Searching for "${inputString}"...`);
}

function increaseLikes(elemId) {
  console.log('The elem id is', elemId);
  var elem = document.querySelector('#' + elemId);
  console.log('The elem is', elem);
  elem.innerText++;
}
