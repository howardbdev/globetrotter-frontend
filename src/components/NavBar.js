import React from 'react'
import { connect } from 'react-redux'

//
const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser ? <strong>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}</strong> : "" }
    </div>
  )
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

export default connect(mapStateToProps)(NavBar)
