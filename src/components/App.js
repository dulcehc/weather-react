import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationList from './Weather/LocationList';
import ForecastExtended from './Weather/ForecastExtended/ForecastExtended';

const cities = [
  'Mexico,mx',
  'Washington,us',
  'Bogota,co',
  'Madrid,es',
  'Buenos Aires,ar',
  'Chile'
];


class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handleSelectionLocation = city => {
    this.setState({
      city
    });
  }

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar>
                <Toolbar >
                  <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon/>
                  </IconButton>
                  <Typography variant="h5" color="inherit">
                    Weather App
                  </Typography>
                </Toolbar>
              </AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <LocationList
                cities={cities}
                onSelectedLocation= { this.handleSelectionLocation } />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Paper elevation={5}>
                <div className='detail'>
                  { city && <ForecastExtended city={city} /> }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
