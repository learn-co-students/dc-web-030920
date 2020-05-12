import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Header from '../component/Navbar'
import Searchbar from '../component/Searchbar'

class App extends Component {

  state = {
    inputValue: "Woman"
  }

  //if i want to change the state of inputValue
  //state changing callback HERE inside App
  changeInput = (event) => {
    //value of this is already binded
    this.setState( {inputValue: event.target.value} )
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Searchbar
          changeState={this.changeInput}
          string={this.state.inputValue}
        />
        <PaintingsContainer searchTerm={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
