import React from 'react'

const HogCardDetail = (props) => {
  let {hog: {name, specialty, weightRatioToFridge, highestMedalAchieved, greased}} = props

  return(
    <div className="content hog-card-detail" style={{display: "none"}}>
      <a className="header">{name} {greased ? <i className="eye dropper icon"></i> : null}</a>
      <div className="meta">
        <span>Specialty: {specialty}</span>
      </div>
      <div className="description">
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatioToFridge}</p>
        <p>Highest Medal Achieved: {highestMedalAchieved}</p>
      </div>
    </div>
  )
}

export default HogCardDetail


