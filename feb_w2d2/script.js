function cartAlert() {
  alert("You are cart are empty.")
}

function acceptCookies() {
  var cookie = document.querySelector("#cookies")

  cookie.remove()
}


function changePicture(elem, path) {
  elem.setAttribute("src", path)
  // elem.setAttribute("alt", "here is a change in alt")
}

