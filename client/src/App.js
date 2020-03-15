import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Currency_index from './components/currency_index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bitcoin</h1>
        </header>
        <Currency_index />
      </div>
    );
  }
}

export default App;
