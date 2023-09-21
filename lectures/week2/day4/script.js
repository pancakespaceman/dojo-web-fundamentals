var pokeName = '';

function changePokeName(elem) {
  pokeName = elem.value;
}

async function getPokemon() {
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  var data = await response.json()

  console.log(data.abilities);

  var main = document.querySelector('main')

  main.innerHTML = `
    <h1>Pokemon Name: ${data.name}</h1>

    <img src="${data.sprites.front_default}" alt="pokemon image" >
    <p>Type: ${data.types[0].type.name}</p>
  `
}
