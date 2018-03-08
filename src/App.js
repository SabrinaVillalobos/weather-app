import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import { createStore } from 'redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions/index.js';
//import { store } from './store';
import './App.css';

const cities = [
	'Buenos Aires,ar',
	'Bogotá, col',
	'Santiago,scl',
	'Ciudad de México,mx',
	'Madrid,es',
	'Rio de Janeiro,br',
 
];



//antes de crear la carpeta store

/*const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());*/


class App extends Component {

  constructor() {
    super();
   
    this.state = { city: null};
    
  }
 
  //esto se hace despues del constructor y la ultima optimizacion del render
  handleSelectionLocation = city => {
      this.setState({ city });
      console.log(`hadlerSelectionLocation ${city}`);

      /*store.dispatch(setCity(city));*/
      this.props.setCity(city);
  }

  render() {
    const { city } =this.state;
    return (
    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title='Weather App' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={ cities } onSelectedLocation={this.handleSelectionLocation}> </LocationList>
          </Col>
         <Col xs={12} md={6}>
          <Paper zDepth={4}>
            <div className= 'detail'>
              {
                city ? 
                <ForecastExtended city={ city }></ForecastExtended> :
                null
              }

            </div>
          </Paper>
         </Col>
        </Row>
        </Grid>
       
     
      </MuiThemeProvider>
      
    );
  }

}



/*const mapDispatchToPropsActions = () => {};*/
/*const componentConnected = connect(null, mapDispatchToPropsActions)(App)*/



const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))


});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;