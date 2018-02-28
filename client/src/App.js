import React, { Component } from 'react';
import expressjsLogo from './expressjsLogo.png';
import logo from './logo.svg';
import './App.css';
import Responsibilities from './components/responsibilities/responsibilities.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={expressjsLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boilarplate for React + Express Server</h1>
        </header>
        
        <Responsibilities />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
