import React, { Component} from 'react'
import HogDetails from './HogDetails'

export default class Hog extends Component {
  constructor(){
    super()
    this.state = {
      detailsDisplayed: "none",
      hogDisplayed: "block"
    }
  }

  renderImage = () => {
    return 'hello'
  }

  renderImage = () => {
    const name = this.props.hogObj.name.split(" ").join("_").toLowerCase()
    return require(`../hog-imgs/${name}.jpg`)
  }

  displayDetails = (event) => {
    if (event.target.className !== 'button'){
      if (this.state.detailsDisplayed === "none"){
      this.setState({detailsDisplayed: "block"})}
      else {
        this.setState({detailsDisplayed: "none"})
    }}
  }

  displayHog = (event) => {
    if (this.state.hogDisplayed === "none") {
      this.setState({hogDisplayed: "block"})}
    else {
      this.setState({hogDisplayed: "none"})
    }
  }

  render(){
    return (
    <div
      className='ui eight wide column ui card'
      onClick={this.displayDetails}
      style={{display: this.state.hogDisplayed}}>
      <div className="image">
        <img src={this.renderImage()}/>
      </div>
      <div className="content">
        <a className="header"> {this.props.hogObj.name}</a>
        <button
          className="button"
          onClick={() => this.displayHog()}>
          Hide Hog
        </button>
      <div className= "description"><HogDetails
          hogObj={this.props.hogObj}
          onDisplay={this.state.detailsDisplayed}
          />
        </div>
      </div>
  </div>
  )
  }
}
