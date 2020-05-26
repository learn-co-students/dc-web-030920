import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  componentDidMount(){
    console.log("mounted")
    if(localStorage.getItem("token")){
      fetch("http://localhost:3000/api/v1/decode_token", {
        headers: {
          "Authenticate": localStorage.token
        }
      })
      .then(res => res.json())
      .then(userData => {
        this.updateCurrentUser(userData)
        //if error, don't update the state
      })
    }else{
      console.log("No token found, user is not authenticated")
    }
  }

  render(){
    return (
      <Fragment>
        <Nav user={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/profile" render={() => (
            this.state.currentUser ?  <Profile currentUser={this.state.currentUser}/> : <Redirect to="/login"/>
          ) } />
          <Route exact path="/login" render={() => (
            this.state.currentUser == null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/profile"/>
          )} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
