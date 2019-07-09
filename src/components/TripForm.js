import React from 'react';
// 1.  VVV We first grab the action creator
import { updateTripForm } from '../actions/tripForm'
import { connect } from 'react-redux'


// 3.  This means Redux gives us back a prop called updateTripForm
// which when invoked, Redux will now dispatch
const TripForm = ({ formData, history, updateTripForm, userId, trip, handleSubmit, editMode }) => {

  const { name, startDate, endDate } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    // 4.  This is not an invocation of just the action creator,
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateTripForm(name, value)
  }

  return (
    <form onSubmit={event => {
      console.log("here we are!")
      handleSubmit(event, formData, userId, history)
    }}>
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
        value={editMode ? "Update Trip" : "Create Trip" }
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.tripForm,
    userId
  }
}

// 2.  We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateTripForm })(TripForm);
