const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>

// <div class="card" data-id="${trainer.id}">
//   <p>${trainer.name}</p>
//   <button data-trainer-id="${trainer.id}">Add Pokemon</button>
//   <ul>
//     <li>${pokemon.name} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
//   </ul>
// </div>

document.addEventListener("DOMContentLoaded", function() {

  fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainers => trainers.forEach(trainer => renderTrainer(trainer)))
    // .then(trainers => trainers.forEach(renderTrainer))

})

function renderTrainer(trainer) {
  // NOTE: Building up our render function

  const trainerCardDiv = document.createElement("div")
  trainerCardDiv.classList.add("card")
  // trainerCardDiv.className = "card" NOTE: Alternative to the above for this example

  trainerCardDiv.dataset.id = trainer.id
  // trainerCardDiv.setAttribute("data-id", trainer.id) NOTE: Alternative to the above for this example

  const trainerNameP = document.createElement("p")
  trainerNameP.innerText = trainer.name

  const addButton = document.createElement("button")
  addButton.addEventListener("click", handleAddPokemon)
  addButton.innerText = "Add Pokemon"
  addButton.dataset.trainerId = trainer.id
  // addButton.setAttribute("data-trainer-id", trainer.id) NOTE: Alternative to the above for this example

  const pokemonList = document.createElement("ul")

  trainer.pokemons.forEach(pokemon => {
    const pokemonLi = document.createElement("li")
    pokemonLi.innerText = `${pokemon.nickname} (${pokemon.species})`

    const removeButton = document.createElement("button")
    removeButton.addEventListener("click", handleReleasePokemon)
    removeButton.classList.add("release")
    removeButton.dataset.pokemonId = pokemon.id
    removeButton.innerText = "Release"

    pokemonLi.append(removeButton)
    pokemonList.append(pokemonLi)
  });

  trainerCardDiv.append(trainerNameP, addButton, pokemonList)

  document.querySelector("main").append(trainerCardDiv)
}

function handleAddPokemon(e) {
  // Clicking on the "Add button" next to a trainer's name

  const trainerId = e.target.dataset.trainerId
  const trainerPokemonsList = e.target.parentElement.querySelector("ul")

  if (trainerPokemonsList.children.length < 6) {
    fetch(POKEMONS_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ trainer_id: trainerId })
    }).then(resp => resp.json())
      .then(pokemon => {
        const pokemonLi = document.createElement("li")
        pokemonLi.innerText = `${pokemon.nickname} (${pokemon.species})`

        const removeButton = document.createElement("button")
        removeButton.addEventListener("click", handleReleasePokemon)
        removeButton.classList.add("release")
        removeButton.dataset.pokemonId = pokemon.id
        removeButton.innerText = "Release"

        pokemonLi.append(removeButton)
        e.target.parentElement.querySelector("ul").append(pokemonLi)
      })
  } else {
    // nothing needs to go here
  }
}

function handleReleasePokemon(e) {
  // #=> Example Request
  // DELETE /pokemons/:pokemon_id

  const pokemonId = e.target.dataset.pokemonId

  fetch(POKEMONS_URL + "/" + pokemonId, {
    method: "DELETE"
  }).then(() => {
    e.target.parentElement.remove()
  })
}
