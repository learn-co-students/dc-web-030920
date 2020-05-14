import React, {Component} from 'react'
import HogCard from './HogCard'

class HogsContainer extends Component{
  render(){
    return (
      <div className="ui cards">
        {
          this.props.hogsData.map(hog => <HogCard
            hogObj={hog}
            key={hog.name}
          />)
        }
      </div>
    )
  }
}

export default HogsContainer
