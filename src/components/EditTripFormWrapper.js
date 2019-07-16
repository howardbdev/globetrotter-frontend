import React from 'react';
import TripForm from './TripForm'
import { updateTrip, deleteTrip } from '../actions/myTrips'
import { setFormDataForEdit, resetTripForm } from '../actions/tripForm'
import { connect } from 'react-redux'

class EditTripFormWrapper extends React.Component {
  componentDidMount(){
    this.props.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  componentDidUpdate(prevProps) {
    this.props.trip && !prevProps.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  componentWillUnmount() {
    this.props.resetTripForm()
  }

  handleSubmit = (formData) => {
    const { updateTrip, trip, history } = this.props
    updateTrip({
      ...formData,
      tripId: trip.id
    }, history)
  }

  render() {
    const { history, deleteTrip, trip } = this.props
    const tripId = trip ? trip.id : null
    return  <>
              <TripForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteTrip(tripId, history)}>Delete this trip</button>
            </>
  }
};

export default connect(null, { updateTrip, setFormDataForEdit, resetTripForm, deleteTrip })(EditTripFormWrapper);
