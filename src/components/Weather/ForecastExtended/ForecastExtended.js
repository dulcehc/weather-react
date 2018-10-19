import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../../../services/transformForecast';
import API_KEY from '../../../constants/api-key';

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
    const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
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
      <div className='ForecastExtended'>
        <h2 className='ForecastExtended__title'>
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