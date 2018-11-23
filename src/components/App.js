import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'

class App extends Component {

  constructor () {
    super();
    this.state = {
      allHogs: hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <ul className="ui grid container">
            {this.state.allHogs.map(hogDetails => <Hog hog={hogDetails} />)}
          </ul>
      </div>
    )
  }
}

export default App;
