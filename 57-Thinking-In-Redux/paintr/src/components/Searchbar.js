import React from "react";
import {connect} from 'react-redux'
import {search} from '../redux/actions'

//Searchbar should be able to change the state of searchText
const Searchbar = props => {
  return (
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  )
}
//want to inject Searchbar with a prop called value
//that is mapped to something in the store
const mapStateToProps = (state) => {//state = store.getState()
  return {
    value: state.searchText
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (searchText) => {dispatch( search(searchText) )}
//   }
// }

export default connect(mapStateToProps, {onChange: search})(Searchbar)




//
