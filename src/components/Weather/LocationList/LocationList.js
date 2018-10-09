import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../index';
import './LocationList.css';

const LocationList = ({cities, onSelectedLocation}) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  }
  return (
    <div className='locationList'>
      {cities.map(city => (
        <WeatherLocation
          city={city}
          key={city}
          onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>
      ))};
    </div>
  );
}

LocationList.proptTypes = {
  cities: PropTypes.array,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;