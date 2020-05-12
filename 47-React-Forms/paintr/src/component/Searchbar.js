import React from 'react'

function Searchbar(props){
  return (
    <div className="centered" style={ {width: "50%"} }>
      <div className="ui form fluid">
        <input
          onChange={props.changeState}
          value={props.string}
          className="ui search"
          placeholder="Please enter text"
        />
      </div>
    </div>
  )
}

export default Searchbar
