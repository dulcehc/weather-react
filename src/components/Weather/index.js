import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

import Location from '../Location/Location';
import WeatherData from './WeatherData';
import './Weather.css';
import transformWeather from '../../services/transformWeather';

const LOCATION = 'México';
const API_KEY = '7a14a66681fcd335079601f52f72ac59';
const URL_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;

class WeatherLocation extends Component {

  constructor () {
    console.log('constructor');
    super();
    this.state = {
      city: 'México',
      data: null
    }
  }

  loadWeatherData = () => {
    fetch(URL_WEATHER)
      .then(data => data.json())
      .then(weatherData => {
        const data = transformWeather(weatherData);
        this.setState( {data} )
        //console.log(JSON.stringify(weatherData));
      });
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.loadWeatherData();
  }

  /* componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
 */

  render() {
    console.log('render');
    const {city, data} = this.state;
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        { data ? <WeatherData data={ data } /> :
           <CircularProgress style={{ color: purple[300] }} thickness={4} />}
      </div>
    );
  }
}


export default WeatherLocation;