import React from 'react'
import HogDetails from '../components/HogDetails'

class HogCard extends React.Component{
  constructor(){
    super()
    this.state={
      clicked: false
    }
  }

  showDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    console.log(this.state.clicked)

  }

  getImage = (name) => {
    let formattedName = name.split(" ").join("_").toLowerCase()
    let hogPics = require(`../hog-imgs/${formattedName}.jpg`)
    return hogPics
  }

  render(){
    return(
        <div className="ui card four wide column pigTile" onClick={this.showDetails}>
          <div className="image">
            <img src={this.getImage(this.props.hog.name)} alt="hogPic"/>
          </div>
          <h3 className="name">
            {this.props.hog.name}
          </h3>
          <button className="ui button" onClick={this.props.hideHogs}>Hide Hog</button>
          <div className="details">
            {this.state.clicked ? <HogDetails hog={this.props.hog}/> : null}
          </div>
        </div>
    )
  }
}

export default HogCard
