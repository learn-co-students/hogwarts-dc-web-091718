import React from 'react'

const Filter = (props) => {
  return(
    <div className="filter">
    Filter by:
    <button onClick={props.sortByName}>name
    </button>

    <button onClick={props.sortByWeight}>weight
    </button>

    Greased?<input checked={props.greased} onChange={props.toggleGreased} type="checkbox"/>
    </div>
  )
}

export default Filter
