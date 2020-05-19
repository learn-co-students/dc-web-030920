import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: '',
        selectedPainting: null
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (event) => {
    let paintingId = event.target.dataset.paintingId
    let selectedPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
    this.setState({
      selectedPainting: selectedPainting
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/paintings" render={() => <PaintingsList
            onSearchHandler={this.onSearchHandler}
            filterTerm={this.state.searchTerm}
            paintings={this.state.paintingsList}
            onSelectPainting={this.onSelectPainting}
          />} />
          <Route exact path="/paintings/:id" render={
            (routerProps) => {
              //get the ID here in this function
              let id = routerProps.match.params.id
              //find the painting object in my paintingsList [] with this id
              let painting = this.state.paintingsList.find(p => p.id == id)
              console.log("what is my painting?", painting)
              return <PaintingDetails painting={painting}/>
            }
          }
          />
          <Route render={() => <div>404 Not Found</div>}/>
        </Switch>
      </div>
    );
  }
}

//no longer going to rely on selectedPainting state
//need to rely on the param in the URL

/*

<About />
<PaintingDetails painting={this.state.selectedPainting}/>
<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintingsList}
  onSelectPainting={this.onSelectPainting}
/>

*/

export default App;
