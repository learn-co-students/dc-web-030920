import React, {Component} from 'react'
import {connect} from 'react-redux'

let name = "Ann"

class Counter extends Component {
  increment = (num) => {
    this.props.dispatch( {type: "INCREMENT", payload: num} )
  };

  decrement = (num) => {
    //fetch to update the back end

    //update the store's state in the front end
    this.props.dispatch( {type: "DECREMENT", payload: num} )
  };

  render() {
    console.log("What are the props inside Counter:", this.props.counterValue)
    return (
      <div className="Counter">
        <h1>Count: { this.props.counterValue }</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}
//sumggle in a prop called counterValue
const mapStateToProps = (state) => {
  return {
    counterValue: state.count
  }
  //prop: mapped to state
}

// let withCount = connect(mapStateToProps)
// let EnhancedCounter = withCount(Counter)
// export default EnhancedCounter

export {name}
export default connect(mapStateToProps)(Counter)
















//
