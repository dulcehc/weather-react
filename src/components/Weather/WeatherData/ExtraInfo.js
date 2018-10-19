import React from 'react';
import PropTypes from 'prop-types';

const ExtraInfo = ({humidity, wind}) => (
  <div className='ExtraInfo'>
    <span className='ExtraInfo__text'>{`Humidity: ${humidity} %`}</span>
    <span className='ExtraInfo__text'>{`Wind: ${wind}`}</span>
  </div>
);

ExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}
export default ExtraInfo;