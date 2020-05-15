import React from 'react'

const Pokemon = (props) => {
  return (
    <div
      onClick={()=>props.scoutPokemon(props.data)}
      onDoubleClick={()=>props.action(props.data)}
      className="pokemon">{props.data.name}</div>
  )
}

export default Pokemon
