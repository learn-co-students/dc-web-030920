class Trainer{
  constructor(id, name, pokemons){
    this.id = id
    this.name = name
    this.pokemons = pokemons.map(pokemon => new Pokemon(pokemon))
  }

  addPokemon(){
    //invoke this.pokemonValidation()
    //if true
    //all the logic to make a POST fetch to the back end and add pokemon to the front end
    //else false
    //alert the user that they cannot add another pokemon
  }

  pokemonValidation(){
    //return true if trainer can add pokemon, false if team is already full
  }

  render(){
    let pokemonHTML = this.pokemons.map(pokemon => pokemon.render()).join("")
    return `
    <div class="card" data-id="${this.id}"><p>${this.name}</p>
      <button data-trainer-id="${this.id}">Add Pokemon</button>
      <ul>
        ${pokemonHTML}
      </ul>
    </div>`
    }

}
