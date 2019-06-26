import React from 'react';
import { updateNewTripForm } from '../actions/newTripForm'
import { connect } from 'react-redux'

const NewTripForm = ({name, startDate, endDate, history}) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewTripForm(name, value)
  }

  const handleSubmit = event => event.preventDefault()

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
  const { startDate, endDate, name } = state.newTripForm
  return {
    startDate,
    endDate,
    name
  }
}

export default connect(mapStateToProps, { updateNewTripForm })(NewTripForm);
