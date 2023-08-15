function remove(elem) {
  elem.remove();
}

function myAlert() {
  var elem = document.querySelector("#searchbar");
  alert('Searching for "' + elem.value + '"...');
}

function like(id) {
  var elem = document.querySelector(id);

  console.log(elem);
  elem.innerText++;
}

function dislike(id) {
  var elem = document.querySelector(id);

  console.log(elem);
  elem.innerText--;
}
