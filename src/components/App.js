import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Filter from './Filter';
import HogsContainer from './HogsContainer';
import hogs from '../porkers_data';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sortBy: "name",
      greased: false,
      showHidden: false,
      hiddenHogs: []
    }
  }

  filterHidden = () => {
    if (this.state.hiddenHogs.length > 1) {
      return hogs.filter(hog => {
        return this.state.hiddenHogs.indexOf(hog) === -1;
      });
    } else {
      return hogs;
    }
  };

  filterGreased = () => {
    let shownHogs = this.filterHidden();
    if (this.state.greased) {
      return shownHogs.filter(hog => hog.greased);
    } else {
      return shownHogs;
    }
  };

  sortHogs = () => {
    let filteredHogs = this.filterGreased();
    switch(this.state.sortBy) {
      case "weight":
        return filteredHogs.sort((a, b) => {
          const prop =
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
          return a[prop] - b[prop];
        });
      case "name":
        return filteredHogs.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      default:
        return filteredHogs;
    }
  };

  hideHog = (hog) => {
    this.setState({hiddenHogs: [...this.state.hiddenHogs, hog]});
  };

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          < Nav />
        </div>
        <div className="sixteen wide column centered">
          < Filter
              sortBy={this.state.sortBy}
              onSortByChange={(value) => this.setState({sortBy: value})}
              greased={this.state.greased}
              onGreasedChange={() => this.setState({greased: !this.state.greased})}
              showHidden={this.state.showHidden}
              onShowHiddenChange={() => this.setState({showHidden: !this.state.showHidden})}/>
        </div>
        <div className="sixteen wide column centered">
          <HogsContainer
            onHideHog={(hog) => this.hideHog(hog)}
            hogs={this.sortHogs()}
          />
        </div>
      </div>
    )
  }

}

export default App;
