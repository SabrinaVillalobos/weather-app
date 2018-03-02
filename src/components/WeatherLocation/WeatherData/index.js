import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
const api_key = 'dca97d46a2519153125db27b9b96c5b2';
const location = 'Buenos Aires,ar';
const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q=&{location}&appid=${api_key}&units=metric';

const WeatherData = ({data}) => {
  const {temperature,weatherState, humidity, wind} = data;
  return (
  <div className ='weatherDataCont'>
    <WeatherTemperature temperature = {temperature} 
    weatherState = {weatherState}/>
    <WeatherExtraInfo humidity = {humidity} wind = {wind}/>
  </div>
  )
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}
export default WeatherData;