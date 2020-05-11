import React from 'react'

//functional component
const Card = ({painting: {artist: {name}, dimensions: {height, width}, image, title}}) => {
  // console.log("Card's props:", props)
  // var {artist: {name}, dimensions: {height, width}, image, title} = props.painting
  // var {painting: {artist: {name}, dimensions: {height, width}, image, title}} = props

  return <div className="ui card">
    <div>
      <img alt="painting" src={image} />
    </div>
    <p>{title} by {name}</p>
    <p>Height: {height}
        x Width: {width}</p>
  </div>
}

export default Card
