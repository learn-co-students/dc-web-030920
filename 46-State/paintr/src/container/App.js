import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Header from '../component/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
