import React, { Component } from 'react';
import '../App.css';

import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HogContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
