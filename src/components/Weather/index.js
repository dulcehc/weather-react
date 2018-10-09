import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import Location from '../Location/Location';
import WeatherData from './WeatherData';
import './Weather.css';
import transformWeather from '../../services/transformWeather';

const API_KEY = '7a14a66681fcd335079601f52f72ac59';

class WeatherLocation extends Component {

  constructor (props) {
    super();
    this.state = {
      city: props.city,
      data: null
    }
  }

  componentWillMount() {
    const { city } = this.state;
    const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    fetch(urlWeather)
      .then(data => data.json())
      .then(weatherData => {
        const data = transformWeather(weatherData);
        this.setState( {data} )
        //console.log(JSON.stringify(weatherData));
      });
  }

  render() {
    const { onWeatherLocationClick } = this.props;
    const {city, data} = this.state;
    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city} />
        { data ? <WeatherData data={ data } /> :
          <CircularProgress style={{ color: purple[300] }} thickness={4} />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;