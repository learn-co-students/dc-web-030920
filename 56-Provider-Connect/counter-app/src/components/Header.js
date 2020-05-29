import React, {Component} from 'react'
import logo from '../logo.svg'
import {connect} from 'react-redux'

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.countValue % 5
    const upToNext = 5 - remainder
    return `The current count is less than ${this.props.countValue + upToNext}`
  };
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: this.props.text}}>Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => { //state = store's state
  return {
    countValue: state.count
  }
  //prop: how's its mapped to state
}

// let withCount = connect(mapStateToProps)
// const EnhancedHeader = withCount(Header);
// export default EnhancedHeader //has a props called counterValue

export default connect(mapStateToProps)(Header)



// function withCount(SomeComponent){
//   class EnhancedComponent extends React.Component{
//     render(){
//       return <SomeComponent {...this.props} countValue={store.getState()}/>
//     }
//   }
//   return EnhancedComponent
//   //EnhancedComponent is an exact copy BUT has blue text
// }
//const EnhancedHeader = withCount(Header);

//specifices HOW how this component map state to this component's props

//EnhancedHeader that has a prop countValue mapped to th Store's state
