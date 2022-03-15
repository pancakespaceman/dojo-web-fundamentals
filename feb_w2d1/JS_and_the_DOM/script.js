function magicalUnicorns() {
  alert("This alert ran inside of my magicalUnicorns function!");
}


function over(element) {
  // console.log("mouseover");    
}
  
function out(element) {
  // console.log("mouseout");    
}

function remove(elem) {
  console.log(elem);
  // elem.innerText = "magical unicorns";
  elem.setAttribute("style", "background-color: red;")
}

function login(elem) {
  elem.innerText = "Sign Out!"
}