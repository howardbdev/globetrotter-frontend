
// synchronous actions
export const setMyTrips = trips => {
  return {
    type: "SET_MY_TRIPS",
    trips
  }
}

export const clearTrips = () => {
  return {
    type: "CLEAR_TRIPS"
  }
}

// async actions

export const getMyTrips = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/trips", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response.data)
          dispatch(setMyTrips(response.data))
        }
      })
      .catch(console.log)
  }
}
