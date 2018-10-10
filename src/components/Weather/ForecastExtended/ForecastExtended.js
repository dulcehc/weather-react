import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ForecastExtended.css';
import ForecastItem from './ForecastItem/ForecastItem';

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes'
];

class ForecastExtended extends Component {
  renderForecastItemDays() {
    return days.map(day=> (<ForecastItem weekDay={day}/>));
  }
  render() {
    const {city} = this.props;
    return (
      <div>
        <h2 className='forecast-title'>
          Pronóstico Extendido para {city}
        </h2>
        {this.renderForecastItemDays()}

      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;