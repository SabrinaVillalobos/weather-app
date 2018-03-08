import React from 'react';
import PropTypes from 'prop-types';


/*const Location = () => (
  <div>
    <h1>
      Santiago
    </h1>
  </div>
);*/

const Location = ({ city }) => (
//const city = props.city;
//const {city} = props;
//console.log(props);
//debugger; para ver qué me devuelve en específico
  <div className='locationCont'>
    <h1>
      {city}
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
}
export default Location;