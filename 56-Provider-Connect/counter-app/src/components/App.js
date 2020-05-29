import React, {Component} from 'react'
import Header from './Header'
import Counter, {name} from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        {name}
        <Header/>
        <Counter/>
      </div>
    );
  }
}

export default App
