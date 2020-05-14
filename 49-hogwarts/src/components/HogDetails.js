import React from 'react'

function HogDetails(props){
  return(
    <div>
      Weight: {props.data.weight}
      <br/>
      Specialty: {props.data.specialty}
      <br/>
      Greased: {props.data.greased ? "true" : "false"}
      <br/>
      Highest Medal Achieved: {props.data["highest medal achieved"]}
    </div>
  )
}

export default HogDetails
