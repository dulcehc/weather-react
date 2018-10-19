import React from 'react';
import PropTypes from 'prop-types';
import Temperature from './Temperature';
import ExtraInfo from './ExtraInfo';


const WeatherData = ({ data }) => {
  const { temperature, weatherState, humidity, wind } = data;
  return (
    <div className='WeatherData'>
      <Temperature temperature={temperature} weatherState={weatherState}/>
      <ExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
};


export default WeatherData;