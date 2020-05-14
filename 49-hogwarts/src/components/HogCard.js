import React from 'react'
import HogDetails from './HogDetails'

//NEED STATE

class HogCard extends React.Component{
  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }

  toggleDetails = (x) => {
    //update the state of showDetails
    this.setState({showDetails: !this.state.showDetails})

    //alternative way
    // this.setState( (prevState)=>({showDetails: !prevState.showDetails}) )
  }

  render(){
    let filename = this.props.hogObj.name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${filename}.jpg`) //how can we dynamically generate the filename?
    //write an if statement

    return(
      <div className="ui card" onClick={this.toggleDetails}>
        <img alt={this.props.hogObj.name} src={pigImage}/>
        <div className="header">
          {this.props.hogObj.name}
        </div>
        {this.state.showDetails ? <HogDetails data={this.props.hogObj}/> : null}
      </div>
    )
  }
}

export default HogCard
