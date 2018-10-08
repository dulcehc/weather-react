import React, { Component } from 'react';
import WeatherLocation from './components/Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
