import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../components/Weather/ForecastExtended/ForecastExtended';

class ForecastExtendedContainer extends Component {

  render() {
    return (
      <div>
      {this.props.city &&
        <ForecastExtended city={this.props.city} />}
      </div>

    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);