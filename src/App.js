import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyTrips from './components/MyTrips.js'
import NewTripForm from './components/NewTripForm.js'
import MainContainer from './components/MainContainer.js'
import { Route, Switch, withRouter, Link } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/trips' component={MyTrips}/>
          <Route exact path='/trips/new' component={NewTripForm}/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
