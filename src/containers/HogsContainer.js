import React, {Component} from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data';
import Filter from '../components/Filter'


class HogsContainer extends Component{
  constructor(){
    super()
    this.state={
      hogs: hogs,
    }
  }

  sortByName = () => {
    let newHogs = hogs.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      hogs: newHogs
    })
  }

  sortByWeight = () => {
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let newHogs = hogs.sort((a, b) => a[weight] - b[weight])
    this.setState({
      hogs: newHogs
    })
  }

  toggleGreased = (e) => {
    let newHogs = hogs.filter(hog=> hog.greased === e.currentTarget.checked)
      this.setState({
        hogs: newHogs,
      })
    }

  hideHogs = () => {

  }

  render(){
    return(
      <div>
      <Filter sortByName={this.sortByName} sortByWeight={this.sortByWeight}  toggleGreased={this.toggleGreased} greased={this.state.greased}/>
        <div className="ui grid container">
        {this.state.hogs.map(hog => <HogCard key={hog.name} hog={hog} hideHogs={this.hideHogs}/>)}
        </div>
      </div>
    )
  }
}

export default HogsContainer
