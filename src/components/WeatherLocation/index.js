import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import Location from './Location.js';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather.js';
import {CLOUD, 
        CLOUDY, 
        SUN, 
        RAIN, 
        SNOW, 
        WINDY,
        THUNDER,
        DRIZZLE
      } from './../../constant/weathers.js';
import './styles.css'


//creando const para llamar a la api//
const api_key = "373e97ad7230750dc3e40b68c342781d";
//const location = 'Santiago,scl'//
const url = `http://api.openweathermap.org/data/2.5/weather`;
//const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;


class WeatherLocation extends Component {
  constructor({ city }) {
    super(); //dentro del constructor
    this.state = {
      city,
      data: null
    }
  }


//antes del render
  componentWillMount() {

    const { city } = this.state
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

    fetch (api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data})
    });

    }

  

    render = () => {
  const { onWeatherLocationClick } = this.props;
  const { city, data } = this.state; //estoy ahorrando poner this.state dos veces//
  //de la forma de papel en -MUI
  const style = {
  height: 150,
  width: 350,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

      return (
           <div className='weatherLocation' onClick={onWeatherLocationClick}>
           <Paper style={style} zDepth={2}>
     <Location city = { city }/>
     {data ? <WeatherData data={ data }/> : <CircularProgress size={60} thickness={7} />}
     </Paper>
   </div>
   );

    }


}

 WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
 }

export default WeatherLocation;
