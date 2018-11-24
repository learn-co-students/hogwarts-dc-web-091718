import React, {Component} from 'react'
import HogCard from './Hog'
import HogFilterButton from './HogFilterButton'

class HogsContainer extends Component {
  constructor() {
    super()
    this.state={
      filterGreased: false
    }
  }

  render(){
    return(

      <div className="ui grid">
          <div className="ui fluid buttons">
            <HogFilterButton action={this.handleNameSortClick} text="Name" />
            <HogFilterButton action={this.handleWeightSortClick} text="Weight" />
            <HogFilterButton action={this.handleGreasedSortClick} text="Greased" />
            <HogFilterButton action={this.handleShowHiddenHogs} text="Show all Hogs" />
          </div>

        <div className="ui grid container">
          {this.props.hogs.map(hog => <HogCard hog={hog} key={hog.id} hide={this.props.hideHog}/>)}
        </div>
      </div>
    )
  }

  handleNameSortClick = (event) => {
    this.props.filter('name')
  }

  handleWeightSortClick = (event) => {
    this.props.filter('weight')
  }

  handleGreasedSortClick = (event) => {
    this.props.filterGreased()
  }

  handleShowHiddenHogs = () => {
    this.props.showHogs()
  }

}

export default HogsContainer