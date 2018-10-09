import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LocationList from './components/Weather/LocationList/LocationList';

import './App.css';
const cities = [
  'Mexico',
  'Washington',
  'Bogota',
  'Madrid',
  'Buenos Aires',
  'Chile'
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleselectionlocation-app ${city}`);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar>
              <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7}>
            <LocationList
              cities={cities}
              onSelectedLocation= { this.handleSelectionLocation } />
          </Col>
          <Col xs={12} md={5}>
            <Paper elevation={5}>
              <div className='detail'>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
