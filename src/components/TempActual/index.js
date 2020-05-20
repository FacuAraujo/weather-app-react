import React from 'react';
import WeatherContext from '../../contexts/weather/context';

import './styles.scss';

const TempActual = ({ city, country, temp, feelsLike }) => {
  const { theme } = React.useContext(WeatherContext);

  const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const styles = theme === 'day' ? { color: '#131830' } : { color: '#FFFFFF' };

  return (
    <div className="actual" style={styles}>
      <div className="pais" style={styles}>
        {city}, {country}
      </div>
      <div className="temperatura" style={styles}>
        {kelvinToCelsius(temp)}º
      </div>
      <div className="termica" style={styles}>
        Feels like {kelvinToCelsius(feelsLike)}º
      </div>
    </div>
  );
};

export default TempActual;
