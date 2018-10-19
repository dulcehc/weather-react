import React from 'react';
import PropTypes from 'prop-types';


const Location = (props) => {
  return (
    <div className='Location'>
      <h1 className='Location__title'>{props.city}</h1>
    </div>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;