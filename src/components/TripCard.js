import React from 'react'

const TripCard = ({ trip }) => {
  return (
    <p>{trip.attributes.name}</p>
  )
}

export default TripCard
