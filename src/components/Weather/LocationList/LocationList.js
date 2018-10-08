import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../index';

const LocationList = ({cities}) => {
  return (
    <div>
      {cities.map(city => <WeatherLocation city={city} key={city}/>)};
    </div>
  );
}

LocationList.proptTypes = {
  cities: PropTypes.array,
}

export default LocationList;