import React from 'react'

const DisplayCard = (props) => {
  console.log(props.pokemon.stats)
  return (
    <div className="card details">
      <div>
        <div className="row">{props.pokemon.name.toUpperCase()}</div>
        <div className="row">
          <div><img alt="" src={
            props.pokemon.sprites.front_default
          } /></div>
          {
            props.pokemon.stats.map(stat => (
              <div className="block">{stat.stat.name}: {stat.base_stat}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayCard
