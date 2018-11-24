import React, { Component } from 'react'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';


class HogsWrapper extends Component {
  constructor() {
    super()
    this.state={
      displayedHogs: this.process(hogs),
      hiddenHogs: []
    }
  }

  hide = (hogId) => {
    let displayedHogs = this.state.displayedHogs.slice()
    let hiddenHogs = this.state.hiddenHogs.slice()

    displayedHogs = displayedHogs.filter(hog => {
      if (hog.id == hogId) {
        hiddenHogs.push(hog)
        return false
      } else {
        return true
      }
    })

    this.setHogs(displayedHogs, hiddenHogs)

  }

  process(hogs) {
    return hogs.map((hog, index) => {
      hog.id = index
      hog.weightRatioToFridge = hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      hog.highestMedalAchieved = hog["highest medal achieved"]
      return hog
    })
  }

  setHogs(displayed, hidden) {
    this.setState({
      displayedHogs: displayed,
      hiddenHogs: hidden
    })
  }

  sortHogsBy = (filter) => {
    let sortedHogs = this.state.displayedHogs.slice()

    switch(filter) {
      case "name":
        sortedHogs = this.filterHogsByName(this.state.displayedHogs)
        break
      case "weight":
        sortedHogs = this.filterHogsByWeight(this.state.displayedHogs)
        break
      default:
        break
    }

    this.setState({
      displayedHogs: sortedHogs
    })
  }

  hideUngreased = () => {
    const greased = []
    const ungreased = []

    for (const hog of this.state.displayedHogs) {
      hog.greased ? greased.push(hog) : ungreased.push(hog)
    }

    this.setState({
      displayedHogs: greased,
      hiddenHogs: ungreased
    })
  }

  filterHogsByName = (hogs) => {
    return hogs.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  }

  filterHogsByWeight = (hogs) => {
    return hogs.sort((a, b) => {
      return b.weightRatioToFridge - a.weightRatioToFridge
    })
  }

  showHogs = () => {
    const allHogs = this.state.displayedHogs.concat(this.state.hiddenHogs)

    this.setState({
      displayedHogs: allHogs,
      hiddenHogs: []
    })


  }

  render() {
    return (
      <div>
        <HogsContainer hogs={this.state.displayedHogs} filter={this.sortHogsBy} filterGreased={this.hideUngreased} showHogs={this.showHogs} hideHog={this.hide}/>
      </div>
    )
  }
}

export default HogsWrapper