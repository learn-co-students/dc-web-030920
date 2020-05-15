import React from 'react'
import Pokemon from '../components/Pokemon'

const PokemonContainer = (props) => {
  return(
    <div>
      <h3>{props.title}:</h3>
      {props.pokemon.map(pokemon => {
        return <Pokemon
          data={pokemon}
          action={props.action}
          scoutPokemon={props.scoutPokemon}
          key={pokemon.name}/>
      })}
    </div>
  )
}

export default PokemonContainer

//Add to team:
//When double click on Pokemon => change state of
//pokemon Team AND change state of avaliablePokemon
