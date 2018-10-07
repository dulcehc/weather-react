import React from 'react';
import Location from '../Location/Location';
import WeatherData from './WeatherData';
import './Weather.css';
import { SUN } from '../../constants/states';

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

const WeatherLocation = () => (
  <div className="weatherLocationCont">
    <Location city={'México'} />
    <WeatherData data={ data } />
  </div>

);

export default WeatherLocation;