import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Settings from './Settings'
import HogsContainer from './HogsContainer'
import hogs from "../porkers_data";
// hogs = [{name: 'Mudblood', showDetails: false, specialty: 'Magic', greased: false, weight: 1, 'highest medal achieved': 'bronze'}

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogsData: hogs, //our forever 13 hogs
      showGreased: false, //determine wheter or not to show 13 hogs or only the 5
      sortBy: "sortbyname"
    }
  }

  changeFilter = (event) => {
    this.setState({showGreased: event.target.checked})
  }

  changeSort = (event) => {
    let sortedArray
    console.log(event.target.name)
    if(event.target.name === "sortbyname"){
      sortedArray = this.state.hogsData.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) )
      console.log(sortedArray)
      // this.setState({hogsData: this.state.hogsData.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) ) })
    }else if(event.target.name === "sortbyweight"){
      sortedArray = this.state.hogsData.sort( (hog1, hog2) => hog1.weight - hog2.weight)
      console.log(sortedArray)
    }
    this.setState({
      hogsData: sortedArray,
      sortBy: event.target.name
    })
    //when radio button clicked
    //this.setState({hogsData})
  }

  //PLAN: when clicked, change the state of showGreased
  //change the DOM by derived the list of hogsToShow
  //shownHogs = hogsData.filter( ... )

  render() {
    let hogsToShow
    if(this.state.showGreased){
      hogsToShow = this.state.hogsData.filter(pig => pig.greased)
    }else{
      hogsToShow = this.state.hogsData
    }
    //if(this.state.sortBy === "weight"){ hogsToShow.sort(...sortByWeight) }
    return (
      <div className="App">
        <Nav />
        <Settings
          sortBy={this.state.sortBy}
          changeFilter={this.changeFilter}
          changeSort={this.changeSort}
        />
        <HogsContainer hogsData={hogsToShow}/>
      </div>
    );
  }
}

export default App;
