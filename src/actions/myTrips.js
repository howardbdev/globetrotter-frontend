import { resetTripForm } from './tripForm'
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

export const addTrip = trip => {
  return {
    type: "ADD_TRIP",
    trip
  }
}

export const deleteTripSuccess = tripId => {
  return {
    type: "DELETE_TRIP",
    tripId
  }
}

export const updateTripSuccess = trip => {
  return {
    type: "UPDATE_TRIP",
    trip
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
          dispatch(setMyTrips(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createTrip = (tripData, history) => {
  return dispatch => {
    const sendableTripData = {
      start_date: tripData.startDate,
      end_date: tripData.endDate,
      name: tripData.name,
      user_id: tripData.userId
    }
    return fetch("http://localhost:3001/api/v1/trips", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableTripData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addTrip(resp.data))
          dispatch(resetTripForm())
          history.push(`/trips/${resp.data.id}`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }
}

export const updateTrip = (tripData, history) => {
  return dispatch => {
    const sendableTripData = {
      start_date: tripData.startDate,
      end_date: tripData.endDate,
      name: tripData.name
    }
    return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableTripData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateTripSuccess(resp.data))
          history.push(`/trips/${resp.data.id}`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }
}

export const deleteTrip = (tripId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/trips/${tripId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteTripSuccess(tripId))
          history.push(`/trips`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }

}
