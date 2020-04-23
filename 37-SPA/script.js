//1. When page loads, make GET fetch, render all pokemon
document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM loaded')
  fetchAllPokemon()
});

function fetchAllPokemon(){
  fetch("http://localhost:3000/pokemon")
  .then(response => response.json())
  .then(pokemonArray => {
    //do something with pokemonArray
    //iterate through each pokemon in pokemonArray
    //render that pokemon to the DOM
    pokemonArray.forEach( (pokemon) => {renderPokemon(pokemon)} )
  })
}

function renderPokemon(pokemon){
  //code to render pokemon to the DOM
  console.log(pokemon)
  var pokemonDiv = document.createElement("div")
  pokemonDiv.classList.add("card")
  var container = document.querySelector("#pokemon-container")
  container.appendChild(pokemonDiv)

  var header = document.createElement("h3")
  header.innerText = pokemon.name

  var image = document.createElement("img")
  image.src = pokemon.sprite
  
  pokemonDiv.append(header, image)
}



//(thing) => {do something with thing}

/*
  <div id="pokemon-container">
    <div class="card">
      <h3>bulbasaur<h3>
      <img></img>
    </div>
  </div>
*/
