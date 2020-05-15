import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header'
import DisplayCard from '../components/DisplayCard'
import PokemonContainer from './PokemonContainer'


class App extends Component {

  constructor(){
    super()
    this.state = {
      pokemonTeam: [],
      availablePokemon: [],
      currentDisplayedPokemon: null
    }
  }

  //When page loads, make GET fetch, update availablePokemon, update DOM
  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000")
    .then(res => res.json())
    .then(data => {
      this.setState({availablePokemon: data.results})
    })
  }

  //state changing callback in App
  addPokemon = (pokemon) => {
    if(this.state.pokemonTeam.length < 6){
      var state = this.state
      //add the clicked pokemon to pokemonTeam
      //create new array for the new team
      var newTeam = [...state.pokemonTeam, pokemon]

      //remove the clicked pokemon from avaliablePokemon
      //create a new array for the new "left over" pokemon
      var leftOvers = state.availablePokemon.filter(poke => poke.name !== pokemon.name)

      this.setState({
        pokemonTeam: newTeam,
        availablePokemon: leftOvers
      })
    }else{
      alert("Cannot have more than 6 pokemon on a team")
    }
  }

  removePokemon = (pokemon) => {
    var newTeam = this.state.pokemonTeam.filter(poke => poke.name !== pokemon.name)
    //update teams to not have this pokemon update avaliablePokemon

    var leftOvers = [...this.state.availablePokemon, pokemon]

    this.setState({
      pokemonTeam: newTeam,
      availablePokemon: leftOvers
    })
  }

////When single click on Pokemon => make GET fetch to that pokemon
  scoutPokemon = (pokemon) => {
    //update currentDisplayedPokemon
    fetch(pokemon.url)
    .then(res => res.json())
    .then(data => {
      this.setState({currentDisplayedPokemon: data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <PokemonContainer
          title="Team"
          pokemon={this.state.pokemonTeam}
          action={this.removePokemon}
          scoutPokemon={this.scoutPokemon}
        />
        {
          this.state.currentDisplayedPokemon ?
          <DisplayCard pokemon={this.state.currentDisplayedPokemon}/> : null
        }
        <PokemonContainer
          title="Pokemon"
          pokemon={this.state.availablePokemon}
          action={this.addPokemon}
          scoutPokemon={this.scoutPokemon}
        />
      </div>
    );
  }
}

export default App;
