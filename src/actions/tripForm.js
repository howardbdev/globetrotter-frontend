// sync actions

export const updateTripForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_TRIP_FORM",
    formData
  }
}

export const resetTripForm = () => {
  return {
    type: "RESET_NEW_TRIP_FORM",
  }
}

export const setFormDataForEdit = trip => {
  const tripFormData = {
    name: trip.attributes.name,
    startDate: trip.attributes.start_date,
    endDate: trip.attributes.end_date
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    tripFormData
  }
}
