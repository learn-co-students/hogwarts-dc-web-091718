import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav /><br />
          <div>
            <HogContainer hogs={hogs} key={Date.now()}/>
          </div>
      </div>
    )
  }
}

export default App;
