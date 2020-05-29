import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {vote} from '../redux/actions'

class PaintingDetail extends React.Component {
  render() {
    console.log("PaintingDetail's props: ", this.props)
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {this.props.vote(this.props.painting.id)}}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(p => p.id ===
      ownProps.match.params.paintingId)
    //prop: state
  }
}
//onclick of Vote => dispatch an action => reducer => newState
// const mapDispatchToProps = (dispatch) => {
//   return {
//     //props: fuction
//     vote: (paintingId) => { dispatch( vote(paintingId) ) }
//   }
// }

// const EnhancedPaintingDetail = connect(mapStateToProps, mapDispatchToProps)(PaintingDetail)
// export default withRouter(EnhancedPaintingDetail);
export default withRouter(connect(mapStateToProps, {vote} )(PaintingDetail))



//
