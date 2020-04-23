//1. When page loads, make GET fetch, render all pokemon
document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM loaded')
  var form = document.querySelector("form")
  form.addEventListener("submit", handleForm)
  fetchAllPokemon()
});

//2. When user submits the form, POST fetch to the server,
//then render the new pokemon onto the DOM
function handleForm(event){
  var obj = {
    name: document.querySelector("#name-input").value,
    sprite: document.querySelector("#sprite-input").value
  }
  event.preventDefault()

  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(obj)
  })
  .then(res => res.json())
  .then(newPokemon => {
    renderPokemon(newPokemon)
  })
}
//POST fetch: method, headers, body

function fetchAllPokemon(){
  fetch("http://localhost:3000/pokemon")
  .then(response => response.json())
  .then(pokemonArray => {
    //do something with pokemonArray
    //iterate through each pokemon in pokemonArray
    //render that pokemon to the DOM
    pokemonArray.forEach((pokemon) => {renderPokemon(pokemon)})
  })
}

function renderPokemon(pokemon){
  //code to render pokemon to the DOM
  // console.log(pokemon)
  var pokemonDiv = document.createElement("div")
  pokemonDiv.classList.add("card")
  pokemonDiv.id = pokemon.id

  pokemonDiv.addEventListener("click", handleDelete)

  var container = document.querySelector("#pokemon-container")
  container.appendChild(pokemonDiv)

  var header = document.createElement("h3")
  header.innerText = pokemon.name

  var image = document.createElement("img")
  image.src = pokemon.sprite

  pokemonDiv.append(header, image)
}

function handleDelete(event){
  var id = event.currentTarget.id

  fetch(`http://localhost:3000/pokemon/${id}`,{
    method: "DELETE"
  }).then(res => res.json())
  .then(data => {
    document.getElementById(id).remove()
  }).catch(error)

}

function error(){
  alert("ERROR: SERVER IS DOWN")
}


//3. When a pokemon card is clicked, I want to make a DELETE fetch,
//and then remove the div from the DOM

//(thing) => {do something with thing}

/*
  <div id="pokemon-container">
    <div class="card">
      <h3>bulbasaur<h3>
      <img></img>
    </div>
  </div>
*/
