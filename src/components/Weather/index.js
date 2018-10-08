import React, {Component} from 'react';
import Location from '../Location/Location';
import WeatherData from './WeatherData';
import './Weather.css';
import { SUN, WINDY } from '../../constants/states';

const LOCATION = 'México';
const API_KEY = '7a14a66681fcd335079601f52f72ac59';
const URL_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;

const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

const data2 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '19 m/s',
};


class WeatherLocation extends Component {

  constructor () {
    super();
    this.state = {
      city: 'México',
      data: data1
    }
  }

  getWeatherState = weather => {
    return SUN;
  }

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);
    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    }
    return data;
  }

  handleUpdateClick = () => {
    fetch(URL_WEATHER)
      .then(data => data.json())
      .then(weatherData => {
        const data = this.getData(weatherData);
        this.setState( {data} )
        //console.log(JSON.stringify(weatherData));
      });
  }
  render() {
    const {city, data} = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={ data } />
        <button onClick={ this.handleUpdateClick }>Update</button>
      </div>
    );
  }
}


export default WeatherLocation;