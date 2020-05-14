import React from 'react'

const Settings = (props) => {
  console.log("setting props:", props)
  return (
    <div>
      <div className="ui checkbox">
        <input
          type="checkbox"
          name="greased"
          onChange={props.changeFilter}
          />
        <label>Show Greasy pigs only</label>
      </div>

      <div className="grouped fields">
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="sortbyname"
              onChange={props.changeSort}
              checked={props.sortBy === "sortbyname"} 
            />
            <label>Sort By Name</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="sortbyweight"
              checked={props.sortBy === "sortbyweight"}
              onChange={props.changeSort}
            />
            <label>Sort By Weight</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings
