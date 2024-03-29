function hide(elem) {
  elem.remove();
}

function like(id) {
  var elem = document.querySelector(id);

  elem.innerText++;
}

var searchText = '';

function changeSearchText(elem) {
  searchText = elem.value;
  console.log(searchText);
}

function displayAlert() {
  alert(`Searching for ${searchText}...`);
}
