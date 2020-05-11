import React from 'react'
import Card from './Card'
import paintingsData from '../data/paintings'

//paintingsData = [{}, {}, {}] => [<Card/> ...]

//functional component
function CardContainer(){
  console.log(paintingsData)
  return (
    <div className="card-container">
      {
        paintingsData.map( (paintingsObj)=>{return <Card
          painting={paintingsObj}
          key={paintingsObj.id}
        />} )
      }
    </div>
  )
}

export default CardContainer
