async function fetchPokemon() {
  var inputElem = document.querySelector('#pokeName');
  var pokeName = inputElem.value;

  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  var pokeData = await response.json();

  console.log(pokeData)

  var main = document.querySelector('main')
  main.innerHTML = `
    <h1>You caught a: ${pokeData.name}</h1>
    <img src='${pokeData.sprites.front_default}' alt='picture'>
    <p>Poke ID: ${pokeData.id}</p>
    <p>Height: ${pokeData.height}</p>
  `
}
