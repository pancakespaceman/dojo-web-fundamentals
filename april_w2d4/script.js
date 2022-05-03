var pokeName = "";

function changeName(elem) {
  pokeName = elem.value;

  // console.log(pokeName)
}

function search() {
  // Fetch function returns Promise
  // Promise that well get something back
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then(response => response.json()) // make an anonymous function
  .then(data => {
    console.log(data);

    var display = document.querySelector("#display")

    display.innerHTML = `
      <h1>${data.name}</h1>
      <img src="${data.sprites.front_shiny}" >
      <h3>First Type: ${data.types[0].type.name}</h3>
    `

    document.querySelector("input").value = ""
  })
}