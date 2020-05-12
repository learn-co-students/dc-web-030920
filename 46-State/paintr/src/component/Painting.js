import React from 'react'
//CHILD
const Painting = (props) => {
  return (
    <div onClick={()=>props.func(props.paintingObj)} className="ui card">
      <p>{`${props.paintingObj.title} by ${props.paintingObj.artist.name}`}</p>
    </div>
  )
}
//no access to this.state or this.setState()

export default Painting

//
