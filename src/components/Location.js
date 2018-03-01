import React from 'react';

// Si retornamos una sola cosa, usamos paréntesis
/* const Location = () => (
  <div>
    <h1>Santiago</h1>
  </div>
); 
// Para funciones, corchetes
const Location = (props) => {
  const city = props.city;
  return (
    <div>
      <h1>{city}</h1>
    </div>
  )
}*/

const Location = ({city}) => (
    <div>
      <h1>{city}</h1>
    </div>
)

export default Location;