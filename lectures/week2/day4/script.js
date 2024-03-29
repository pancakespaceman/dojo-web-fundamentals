async function fetchPokemon() {
  const inputElem = document.querySelector('#pokeName');
  const pokeName = inputElem.value;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  // const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
  const pokeData = await response.json();

  const main = document.querySelector('main');

  main.innerHTML = `
    <h1>You caught a: ${pokeData.name}</h1>
    <img src="${pokeData.sprites.front_default}" alt="pokemon">
    <p>Poke ID: ${pokeData.id}</p>
    <p>Height: ${pokeData.height}</p>
  `;
}

// string interpolation
// inserting variable values directly into a string as opposed to concatenating

var name1 = 'David';
var name2 = 'Sacco';

var nameStr = 'The names are ' + name1 + ' and ' + name2 + '.';

var nameStrWithInter = `The names are ${name1} and ${name2}.`;
