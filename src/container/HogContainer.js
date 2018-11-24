import React, { Component } from 'react';
import Hog from '../components/Hog'

export default class HogContainer extends Component {

  constructor(props) {

    super(props)
    this.state = {
      orderOfHogs: this.props.hogs,
    }
  }

  hideHog = (id) => {
    console.log(id)
  }

  sortHogs = (sortWord) => {
    const hogNames = this.props.hogs.map(
      hog => hog[sortWord]
    )

    const sortedHogNames = hogNames.sort()
    const sortedHogs = []
    sortedHogNames.forEach( name =>
      {this.state.orderOfHogs.forEach(hog => {
        if (name === hog[sortWord]) {
          sortedHogs.push(hog)
        }
      })}
    )
    this.setState({orderOfHogs: sortedHogs})
  }

  filterHogs = () => {
    const filteredHogs = this.state.orderOfHogs.filter(hog =>
      hog.greased === true)
    this.setState({orderOfHogs: filteredHogs})
  }

  render() {
    return (
      <div>
      <button
        className = "button"
        onClick={() => this.sortHogs('name')}>
        Sort Hogs By Name
      </button> <br />
      <button
        className = "button"
        onClick={() => this.sortHogs('weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water')}>
        Sort Hogs By Weight
      </button> <br />
      <button
        className = "button"
        onClick={() => this.filterHogs()}>
        Filter Hogs By Grease
      </button> <br />
      <br /><br />
      <div className='ui grid container'>
        {this.state.orderOfHogs.map(hog =>
        <Hog hogObj={hog} id={Date.now()} hideHog={(id) => this.hideHog(id)}/>)}
      </div>
      </div>
    )
  }
}
