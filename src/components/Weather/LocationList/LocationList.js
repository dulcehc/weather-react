import React from 'react';
import WeatherLocation from './../index';

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city={'México'}/>
      <WeatherLocation city={'Argentina'}/>
      <WeatherLocation city={'Bogota'}/>
    </div>
  );
}

export default LocationList;