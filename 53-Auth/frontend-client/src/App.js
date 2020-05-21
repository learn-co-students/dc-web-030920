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

  //If the URL is /login
  //show the LogInForm component currentUser null
  //redirect to /profile if currentUser is NOT null

  //If the URL is /profile and there is a currentUser => Profile
  //If the URL is /profile and there is NO currentUser => redirect back to /login
  render(){
    return (
      <Fragment>
        <Nav />
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
