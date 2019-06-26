// sync actions

export const updateNewTripForm = (name, value) => {
  console.log(name, value)
  return {
    type: "UPDATE_NEW_TRIP_FORM",
    formData: { name, value }
  }
}
