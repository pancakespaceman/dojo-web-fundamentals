// When working with APIs, we need a async function
// because talking to APIs takes a very long time (for a computer)


async function fetchPokemon() {
  var elem = document.querySelector("#pokeName")
  var name = elem.value

  // I need to make my HTTP request to the API
  // we use the fetch function
  // await means wait for the fetch to finish before moving on
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  var data = await response.json()
  console.log(data)

  // grab the main element, and set the inner HTML
  var main = document.querySelector("main")
  // back ticks allow us to make multiline strings
  main.innerHTML = `
    <h1>You caught a: ${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="pokepic">
    <p>Poke ID: ${data.id}</p>
    <p>Height: ${data.height}</p>
  `
}