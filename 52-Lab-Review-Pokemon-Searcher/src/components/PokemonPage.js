import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    // put all pokemon in state in the PokemonPage component
    // PokemonForm will write to pokemon and PokemonCOllection will read  pokemon
    this.state = {
      searchTerm: '',
      pokemons: []
      // set equal to an empty array becuase we will map over the pokemon array later and mapping over an empty array does not cause errors.
    }
  }

  // when should we grab our pokemon objects from the database?
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({ pokemons })) // 👈 syntactic sugar for { pokemons: pokemons }
  }

  // define the state-changing callback function in the same scope where the change state is defined.
  changeSearchTerm = e => {
    this.setState({ searchTerm: e.target.value })
  }

  // derive our filtered pokemon from the pokemon and searchterm stored in state. This gets invoked in the render on line 50 because we want the RETURN of this function to be passed down to our PokemonCollection
  filteredPokemons = () => this.state.pokemons.filter(p => p.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

// we pass back this function as a OBJECT because we want this function to invoke ONLY WHEN the event happens. In this case, when the submit button is clicked
  createPokemon = pokemonObj => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(res => res.json())
    .then(pokemon => {
      const updatedPokemons = [pokemon, ...this.state.pokemons] // use the spread operator to copy over the pokemon objects in the new array
      this.setState({ pokemons: updatedPokemons })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search onChange={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemons()} />
      </Container>
    )
  }
}

export default PokemonPage
