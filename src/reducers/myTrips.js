const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
    case "ADD_TRIP":
      return state.concat(action.trip)
    case "UPDATE_TRIP":
      console.log("in UPDATE TRIP action is", action)
      return state
    case "CLEAR_TRIPS":
      return initialState
    default:
      return state
  }
}
