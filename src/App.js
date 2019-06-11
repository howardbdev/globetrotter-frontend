import React from 'react';
import './App.css';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      // thnk about refactoring this to a nav bar 
      this.props.currentUser ? <Logout/> : <Login/>
    );

  }
}

// I an do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
// state = { ...,
//   currentUser: {...}
// }
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
