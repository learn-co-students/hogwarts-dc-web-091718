import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import HogsContainer from './HogsContainer'
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HogsContainer />
      </div>
    )
  }
}

export default App;
