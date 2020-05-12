import React from 'react'
//CHILD
class PaintingDetails extends React.Component {
  render(){
    return (
      <div className="ui card">
      	<div>
      		<img src={this.props.data.image} />
      	</div>
      	<p>{this.props.data.title} by {this.props.data.artist.name}</p>
      	<p>Height: {this.props.data.dimensions.height} x Width: {this.props.data.dimensions.width}</p>
      </div>
    )
  }
}

export default PaintingDetails
