import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import CardContainer from './CardContainer'

//class syntax:
//write a class called App and extends React.Component
//instance method called render which returns som JSX

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header
          color="red"
          title="Object Browns"
        />
        <CardContainer />
      </div>
    );
  }
}

export default App;
