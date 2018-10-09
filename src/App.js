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
  handleSelectionLocation = city => {
    console.log(`handleselectionlocation-app ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation= { this.handleSelectionLocation } />
      </div>
    );
  }
}

export default App;
