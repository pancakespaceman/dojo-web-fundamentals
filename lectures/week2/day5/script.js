var pokeName = ""

function setSearch(element) {
  pokeName = element.value
}


async function getPokemon() {
  console.log('test')
  var res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  var pokeRes = await res.json()

  // console.log(pokeRes)
  // var pokeList = pokeRes.results

  var div = document.querySelector("#display")

  div.innerHTML += `
      <div>
        <h3>Your pokemon is: ${pokeRes.name}</h3>
        <img src="${pokeRes.sprites.front_shiny}">
        <p>${pokeRes.moves[0].move.name}</p>
      </div>
    `


  // for (const pokemon of pokeList) {
  //   console.log(pokemon)
  //   var res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  //   var poke = await res.json()
    // var div = document.querySelector("#display")
    // div.innerHTML += `
    //   <div>
    //     <h3>Your pokemon is: ${poke.name}</h3>
    //     <img src="${poke.sprites.front_normal}">
    //     <p>${poke.moves[0].move.name}</p>
    //   </div>
    // `
  // }

}

getPokemon();