import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'
import PaintingDetails from '../component/PaintingDetails'
//PARENT

//this.state AND this.setState
class PaintingsContainer extends Component{

  state = { selectedPainting: paintingsData[99] }
  // constructor(){
  //   super() //called tine constructor in the Component clas
  //   this.state = { selectedPainting: paintingsData[99] }
  // }

  callback = (painting) => {
    console.log(painting)
    //GOAL: when i click Painting => change state of selectedPainting
    this.setState( {selectedPainting: painting } )
    //some code
    //this.setState() update selectedPainting to be what was clicked
  }

  render(){
    return (
      <div>
        <PaintingDetails data={this.state.selectedPainting}/>
        {paintingsData.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
            func={this.callback}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
