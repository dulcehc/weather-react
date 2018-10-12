import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ForecastExtended.css';
import ForecastItem from './ForecastItem/ForecastItem';
import transformForecast from './../../../services/transformForecast';

/* const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes'
];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal',
}; */

const API_KEY = '7a14a66681fcd335079601f52f72ac59';

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  componentWillMount() {
    console.log(this.props.city);
    const { city } = this.props;
    const urlWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    console.log(urlWeather);
    fetch(urlWeather)
      .then(data => data.json())
      .then(weatherData => {
        console.log(JSON.stringify(weatherData));
        const forecastData = transformForecast(weatherData);
        console.log(forecastData);
        this.setState({ forecastData });
      });
  }


  renderForecastItemDays() {
    return <h1>Render items</h1>;
    /* return days.map(day => (
      <ForecastItem
        weekDay={day}
        key={day}
        hour={10}
        data={data}
      />
    )); */
  }
  renderProgress = () => {
    return <h3>loading forecast extended...</h3>
  }
  render() {
    const {city} = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className='forecast-title'>
          Pronóstico Extendido para {city}
        </h2>
        { forecastData ? this.renderForecastItemDays():
          this.renderProgress()}

      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;