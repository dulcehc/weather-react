import React, { Component } from 'react';
import LocationList from './components/Weather/LocationList/LocationList';

import './App.css';
const cities = [
  'Mexico',
  'Washington',
  'Bogota',
  'Madrid',
  'Buenos Aires',
  'Chile'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
