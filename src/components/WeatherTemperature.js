import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weatherState) => {
  switch (weatherState) {
    case 'day-sunny':
      return (<WeatherIcons name = "day-sunny" size = "2x" />);
    default:
    return (<WeatherIcons name = "cloud" size = "2x" />)
  }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
      <WeatherIcons name="day-sunny" size="2x" />
      <WeatherIcons name="cloud" size="2x" />
      <span>{`${temperature}º C`}</span>
    </div>
  )

export default WeatherTemperature;