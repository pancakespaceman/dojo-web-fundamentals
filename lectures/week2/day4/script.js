async function fetchPokemon() {
  // get the value from the input field
  var elem = document.querySelector("#pokeName");
  var pokeName = elem.value;
  var main = document.querySelector("main");

  // get the api data
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  if (response.status !== 200) {
    console.log("invalid pokemon name");
    main.innerHTML = "<h1>You entered an incorrect pokemon name</h1>";
    return;
  }
  var data = await response.json();

  // set the innerHTML property for main
  // if i use back ticks instead of quotes, i can do
  // string interpolation AND multi line strings
  // main.innerHTML = `
  //   <h1>You caught a: ${data.name}</h1>
  //   <img src="${data.sprites.front_default}" alt="pokepic" />
  //   <p>Poke ID: ${data.id}</p>
  //   <p>Height: ${data.height}</p>
  // `;

  // what if i want to display a list of the pokemon i searched for
  // we can create a new div and append it to main
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <h1>You caught a: ${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="pokepic" />
    <p>Poke ID: ${data.id}</p>
    <p>Height: ${data.height}</p>
  `;

  main.appendChild(newDiv);
}
