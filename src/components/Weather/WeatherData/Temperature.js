import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  THUNDER,
  DRIZZLE
} from '../../../constants/states';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "windy";
    case THUNDER:
      return "thunder";
    case DRIZZLE:
      return "drizzle";
    default:
      return "day-sunny";
  }
};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons
            name={stateToIconName(weatherState)}
            size="3x"
            className="wicon"/>);
};

const Temperature = ({temperature, weatherState}) => {
  return (
    <div className='temperatureCont'>
      {getWeatherIcon(weatherState)}
      <span className='temperature'>{temperature}</span>
      <span className='degrees'>°C</span>
    </div>
  )
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
};


export default Temperature;