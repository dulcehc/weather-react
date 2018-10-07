import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ExtraInfo = ({humidity, wind}) => (
  <div className='extraInfo'>
    <span className='extraInfoText'>{`Humidity: ${humidity} %`}</span>
    <span className='extraInfoText'>{`Wind: ${wind}`}</span>
  </div>
);

ExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}
export default ExtraInfo;