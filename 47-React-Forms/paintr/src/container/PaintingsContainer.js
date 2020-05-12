import React, {Component} from 'react'
import Painting from '../component/Painting'
import PaintingDetails from '../component/PaintingDetails'
import paintingsData from '../data/paintings'

//paintingsData all 100 paintings periodt

class PaintingsContainer extends Component{

  state = { selectedPainting: paintingsData[99] }

  //this function used to be named callback
  selectPainting = (painting) => {
    this.setState( {selectedPainting: painting } )
  }

  render(){
    console.log("inside PaintingsContainer", this.props.searchTerm)

    //figure out our list of filtered paintings
    let filteredPaintings = paintingsData.filter(painting => painting.title.includes(this.props.searchTerm) )
    console.log(filteredPaintings)

    //only display the filtered paitings in the paintingsContainter
    return (
      <div>
        <PaintingDetails data={this.state.selectedPainting}/>
        {filteredPaintings.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
            func={this.selectPainting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
