import React, { Component} from 'react'

export default class HogDetails extends Component {

  getWeight = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return this.props.hogObj[weight]
  }

  isGreased = () => {
    if (this.props.hogObj.greased === true) {
      return "oh heck yeah"
    }
    else {
      return "not in the slightest"
    }
  }

  render(){
    return(
      <div
        style={{display: this.props.onDisplay}}>
        Specialty: {this.props.hogObj.specialty}<br />
      Weight: {this.getWeight()} <br />
    Highest Medal Achieved: {this.props.hogObj['highest medal achieved']} <br />
    Greased?: {this.isGreased()}
      </div>
    )
  }
}
