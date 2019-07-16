import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyTrips from './components/MyTrips.js'
import TripCard from './components/TripCard.js'
import NewTripFormWrapper from './components/NewTripFormWrapper.js'
import EditTripFormWrapper from './components/EditTripFormWrapper.js'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, trips } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/trips' component={MyTrips}/>
          <Route exact path='/trips/new' component={NewTripFormWrapper}/>
          <Route exact path='/trips/:id' render={props => {
              // I need to get ???
              const trip = trips.find(trip => trip.id === props.match.params.id)
              console.log(trip)
              return <TripCard trip={trip} {...props}/>
            }
          }/>
          <Route exact path='/trips/:id/edit' render={props => {
              // I need to get ???
              const trip = trips.find(trip => trip.id === props.match.params.id)
              // dispatch updateForm -> trip
              return <EditTripFormWrapper trip={trip} {...props}/>
            }
          }/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    trips: state.myTrips
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
