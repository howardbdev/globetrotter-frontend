import React from 'react';
import TripForm from './TripForm'
import { updateTrip } from '../actions/myTrips'
import { setFormDataForEdit } from '../actions/tripForm'
import { connect } from 'react-redux'

class EditTripFormWrapper extends React.Component {

  componentDidMount(){
    this.props.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  handleSubmit = (event, formData, userId, history) => {
    const { updateTrip, trip } = this.props
    event.preventDefault()
    console.log("in handleSubmit, event is ", event)
    updateTrip({
      ...formData,
      tripId: trip.id,
      userId
    }, history)
  }

  render() {
    const { history, handleSubmit } = this.props
    return  <TripForm editMode history={history} handleSubmit={handleSubmit} />
  }
};

export default connect(null, { updateTrip, setFormDataForEdit })(EditTripFormWrapper);
