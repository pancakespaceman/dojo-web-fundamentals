function removeButton(elem) {
  elem.remove();
}

function like(id) {
  var elem = document.querySelector(id)

  elem.innerText++;
}


var input = '' 

function searchInput(elem) {
  input = elem.value
}

function search() {
  alert(`Searching for "${input}"`)
}

function search2(id) {
  var elem = document.querySelector(id) 

  alert(`Searching for "${elem.value}"`)
}