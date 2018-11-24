import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsWrapper from './HogsWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <HogsWrapper />
      </div>
    )
  }
}

export default App;
