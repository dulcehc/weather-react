import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationListContainer from '../containers/LocationListContainer';
import ForecastExtendedContainer from '../containers/ForecastExtendedContainer';


const cities = [
  'Mexico City,mx',
  'Washington,us',
  'Bogota,co',
  'Madrid,es',
  'Buenos Aires,ar',
  'Chile'
];


class App extends Component {

  render() {
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
              <LocationListContainer
                cities={cities} />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Paper elevation={5}>
                <div className='detail'>
                  <ForecastExtendedContainer />
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
