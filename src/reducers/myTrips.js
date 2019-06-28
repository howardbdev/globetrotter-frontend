const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
    case "CLEAR_TRIPS":
      return initialState
    default:
      return state
  }
}
