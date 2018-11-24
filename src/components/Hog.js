import React, {Component} from 'react'
import HogCardFront from './HogCardFront'
import HogCardDetail from './HogCardDetail'


class HogCard extends Component {

  constructor() {
    super();
    this.state = {
      displayDetails: false
    }
  }

  convertNameToImgUrl = (name) => {
    const convertedName = name.toLowerCase().split(" ").join("_")
    return process.env.PUBLIC_URL + "/hog-imgs/" + convertedName + ".jpg"
  }

  handleHideHog = (event) => {
    this.props.hide(event.target.parentElement.parentElement.parentElement.dataset.id)
    // console.log(event.target.parentElement.parentElement.parentElement)
  }

  toggleDetails = (event) => {
    const target = event.target.parentElement.parentElement.parentElement.children[1]
    target.style.display === "none" ? target.style.display = "block" : target.style.display = "none"
  }

  render() {
    let {hog: {name, id}, hog} = this.props
    return(
      <div className="ui four wide column">
        <div className="ui cards">
          <div className="ui card" data-id={id}>
            <HogCardFront image={this.convertNameToImgUrl(name)} alt={"Image of " + name} />
            <HogCardDetail hog={hog}/>
            <div className="extra content">
              <div className="ui fluid buttons">
                <div className="ui button" onClick={this.toggleDetails}>Details</div>
                <div className="ui button" onClick={this.handleHideHog}>Hide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )  
  }
  
}


export default HogCard
