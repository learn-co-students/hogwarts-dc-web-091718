import React, { Component } from 'react';

export default class Hog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  getImg = () => {
    const name_slug = this.props.hog.name.replace(/\s+/g, '_').toLowerCase();
    return require(`../hog-imgs/${name_slug}.jpg`);
  }

  getDetails = () => {
    const greased = this.props.hog.greased;
    const medal = this.props.hog['highest medal achieved'];
    const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    return (
      <div className="description">
        <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
        <p>Highest medal achived: <strong>{medal}</strong></p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
				with Thru-the-Door Ice and Water: <strong>{weight}</strong></p>
      </div>
    );
  };

  render() {
    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src={this.getImg()} alt="Hog Pic" />
        </div>
        <div className="content">
          <h3 className="header">{this.props.hog.name}</h3>
          <div className="description">Specialty: {this.props.hog.specialty}</div>
        </div>
        <div className="extra content">
          {this.state.showDetails ? this.getDetails() : null}

          <button className="ui button"
              onClick={(event) => this.setState({showDetails: !this.state.showDetails})}>
            {this.state.showDetails ? "Hide Details" : "Show Details" }
          </button>
          <button className="ui button"
              onClick={(event) => this.props.onHideHog(this.props.hog)}>
            Hide Me!
          </button>
        </div>
      </div>
    );
  }
}
