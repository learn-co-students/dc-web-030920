import {createStore} from 'redux'

let initialState = {count: 1000}

const reducer = (currentState=initialState, action) => {
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
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
