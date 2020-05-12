import React from 'react'

const Painting = (props) => {
  return (
    <div onClick={()=>props.func(props.paintingObj)} className="ui card">
      <p>{`${props.paintingObj.title} by ${props.paintingObj.artist.name}`}</p>
    </div>
  )
}

export default Painting
