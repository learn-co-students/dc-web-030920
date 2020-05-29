import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {updatePaintingInfo} from '../redux/actions'

class PaintingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.painting.title,
      name: this.props.painting.artist.name,
      birthday: this.props.painting.artist.birthday,
      deathday: this.props.painting.artist.deathday
    };
  }

  onSave = e => {
    e.preventDefault();
    let info = {
      paintingId: this.props.painting.id,
      title: this.state.title,
      name: this.state.name,
      birthday: this.state.birthday,
      deathday: this.state.deathday
    };
    this.props.updatePaintingInfo(info);
  };

  render() {
    return (
      <div className="ui centered card">
        <div>
          <img
            alt={this.props.painting.title}
            src={this.props.painting.image}
          />
        </div>
        <form className="ui form" onSubmit={this.onSave}>
          <input
            className="ui field"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            className="ui field"
            name="artists-name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            className="ui field"
            name="birthday"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
          <input
            className="ui field"
            name="deathday"
            value={this.state.deathday}
            onChange={e => this.setState({ deathday: e.target.value })}
          />
          <Link to={`/paintings/${this.props.painting.id}`}>
            <button className="ui button" type="button">
              Cancel
            </button>
          </Link>
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(p => p.id ===
      ownProps.match.params.paintingId)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updatePaintingInfo: (info) => { dispatch( updatePaintingInfo(info) ) }
//   }
// }

export default withRouter(connect(mapStateToProps, {updatePaintingInfo})(PaintingForm));


//
