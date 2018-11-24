import React from 'react'

const HogFilterButton = (props) => {
  return(
    <button className={"ui " + (props.active ? "active" : "" )+ "button"} onClick={props.action}>{props.text}</button>
  )
}

export default HogFilterButton