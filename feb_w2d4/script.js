let pokeName = ""

function setName(elem) {
  pokeName = elem.value.toLowerCase()
  console.log(pokeName)
}

function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  // JS Promise
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const display = document.querySelector("#display")
    display.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Type: ${data.types[0].type.name}</p>
      <img src="${data.sprites.front_default}" >
    `
  })
}

// getPokemon()