// Primero importamos react
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
// Creando primer componente funcional
const WeatherLocation = () => (
  <div>
    <Location city = {'Santiago'}/>
    <WeatherData/>
  </div>
);
// Se exporta sin la extensión
export default WeatherLocation;