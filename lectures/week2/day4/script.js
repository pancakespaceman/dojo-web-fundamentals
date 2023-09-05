var pokename = ""

function changePokeName(elem) {
  pokename = elem.value
  // console.log(pokename)
}

async function findThatPokemon() {
  // var name = document.querySelector("section input").value
  // var elem = document.querySelector("section input")
  // var name = elem.value

  // var apiData = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokename)
  // string interpolation - put a variable value directly in a string
  var apiData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
  var data = await apiData.json()

  var div = document.querySelector("main");

  div.innerHTML = `
    <h1>${data.name}</h1>

    <img src="${data.sprites.front_default}" alt="pokemon image">
    <p>Type: ${data.types[0].type.name}</p>
  `
}


