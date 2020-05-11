//class component
import React from 'react'

class Header extends React.Component{
  render(){
    return (
        <div className={`ui inverted ${this.props.color} menu navbar`}>
          <h2 className="ui header">
            <i className="paint brush icon"></i>
            <div className="content">{this.props.title}</div>
            <div className="sub header">List of Paintings</div>
          </h2>
      </div>
    )
  }
}

export default Header
