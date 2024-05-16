async function fetchPokemon() {
  // get the value to search for from the input
  var elem = document.querySelector("#pokeName");
  var pokeName = elem.value;

  // get the api data
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  // turn the data from JSON to a js object
  var data = await response.json();

  // grab the element where we want to put the data
  var main = document.querySelector("main");

  // set the inner HTML for the main
  // if I use backtics instead of quotes, I can do string iterpolation
  // as well as multi line strings
  // main.innerHTML = `
  //   <h1>You caught a: ${data.name}</h1>
  //   <img src="${data.sprites.front_default}" alt="pokepic" >
  //   <p>Poke ID: ${data.id}</p>
  //   <p>Height: ${data.height}</p>
  // `

  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <h1>You caught a: ${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="pokepic" >
    <p>Poke ID: ${data.id}</p>
    <p>Height: ${data.height}</p>
    `;

  main.appendChild(newDiv);
}
