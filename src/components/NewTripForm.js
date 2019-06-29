import React from 'react';
// 1.  VVV We first grab the action creator
import { updateNewTripForm } from '../actions/newTripForm'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'


// 3.  This means Redux gives us back a prop called updateNewTripForm
// which when invoked, actually Redux will now dispatch
const NewTripForm = ({ formData, history, updateNewTripForm, createTrip, userId }) => {
  const { name, startDate, endDate } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    // 4.  This is not an invocation of just the action creator,
    // it's not Redux dispatching the action built by the actions
    // creator with the appropriate arguments
    updateNewTripForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createTrip({
      ...formData,
      userId
    })

    // formData: {
    //   name: ""
    //   startDate: ""
    //   endDate: ""
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="start date"
        name="startDate"
        onChange={handleChange}
        value={startDate}
      /><br/>
      <input
        placeholder="end date"
        name="endDate"
        onChange={handleChange}
        value={endDate}
      /><br/>
      <input
        type="submit"
        value="Create Trip"
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : "" 
  return {
    formData: state.newTripForm,
    userId
  }
}

// 2.  We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateNewTripForm, createTrip })(NewTripForm);
