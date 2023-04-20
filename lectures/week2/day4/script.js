var pokeName = '';

function changePokeName(elem) {
  // now that I have the input element
  // I can grab the value
  // console.log(elem.value);
  pokeName = elem.value;
}

// async means that this function will run in the background
// once invoked
async function getPokemon() {
  // fetch is the way we can make a HTTP Request in our JS
  // fetch is asynchronous, like setTimeout()
  // await keyword says, wait for the function to finish before moving on
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  console.log(response);
  // json() function converts the response into a js object
  var data = await response.json();

  console.log(data.name);

  // create an image element
  var img = document.createElement('img');
  img.src = data.sprites.front_shiny;
  img.alt = 'poke image';

  var p = document.createElement('p');
  p.innerText = data.name;

  // grab the main element
  var main = document.querySelector('main');
  // set the html to that img element
  main.innerHTML = '';
  main.append(img, p);
}
