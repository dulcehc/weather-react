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
  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null});
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const urlWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    fetch(urlWeather)
      .then(data => data.json())
      .then(weatherData => {
        const forecastData = transformForecast(weatherData);
        this.setState({ forecastData });
      });
  }


  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        weekDay={forecast.weekDay}
        key={`${forecast.weekDay}${forecast.hour}`}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
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
          Extended forecast for {city}
        </h2>
        { forecastData ?
          this.renderForecastItemDays(forecastData):
          this.renderProgress()}

      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;