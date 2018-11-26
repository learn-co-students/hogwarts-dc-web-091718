import React from 'react'

const HogDetails = (props) => {
  return(
    <div>
      <p className="specialty">
      Specialty: {props.hog.specialty}
      </p>

      <p className="specialty">
      Highest medal achieved: {props.hog["highest medal achieved"]}
      </p>

      <p className="weight">
      Weight: {props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      </p>

      <p className="greased">
      Greased: {props.hog.greased ? 'true' : 'false'}
      </p>
    </div>
  )
}

export default HogDetails
