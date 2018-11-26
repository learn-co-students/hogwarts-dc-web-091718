import React, { Component } from 'react'
import Details from './Details'


//This will import all the images in the 'hog-imgs' folder

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  };

const images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g)$/));

export default class Hog extends Component {

    constructor (props) {
        super();
        this.state = {
            hog: props.hog,
            details: false
        }
    }

    handleClick = (event) => {
        this.setState({
            details: !this.state.details
        })
    }

    render () {
        return (
        <li onClick={this.handleClick} className="ui eight wide column">
            <h4>{this.state.hog.name}</h4>
            <img src={images[this.state.hog.name.replace(/\s/g, '_').toLowerCase() + ".jpg"]} />
            {this.state.details ? <Details details={this.state.hog} /> : ''}
        </li>
        )}
}