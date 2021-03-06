import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/Weather/LocationList';

class LocationListContainer extends Component {
  handleSelectionLocation = city => {
    this.props.setCity(city);
  }

  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation= { this.handleSelectionLocation } />

    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);