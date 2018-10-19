import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
  const handleWeatherLocationClick = city => {
    onSelectedLocation(city);
  }
  return (
    <div className='LocationList'>
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