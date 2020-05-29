import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

let initialState = {
  count: 1000
}

const reducer = (currentState=initialState, action) => {
  console.log("currentState: ", currentState, "action:", action)
  //write logic on how the state should be updated
  let newState
  switch(action.type){
    case "INCREMENT":
      newState = {count: currentState.count + action.payload}
      return newState
    case "DECREMENT":
      newState = {count: currentState.count - action.payload}
      return newState
    default:
      return currentState
  }

  // if(currentState === undefined){
  //   let initialState = {count: 1000}
  //   return initialState
  // }
}

//create a store for our application
let store = createStore(reducer)
console.log("what is state?", store.getState() )

class App extends Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  //idea of having a playload
  decrement = (num) => {
    store.dispatch( {type: "DECREMENT", payload: num} )
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
      </header>
    );
  }
}

class Counter extends Component {

  renderDescription = () => {
    const remainder = store.getState().count % 5
    const upToNext = 5 - remainder
    return `The current count is less than ${store.getState().count + upToNext}`
  };

  increment = (num) => {
    //dispatch an action are JS objects WITH a type
    store.dispatch( {type: "INCREMENT", payload: num} )
  };


  render() {
    return (
      <div className="Counter">
        <h1>Count: { store.getState().count }</h1>
        <h3>{this.renderDescription()}</h3>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
