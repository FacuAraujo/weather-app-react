import React from 'react';
import WeatherContext from '../../contexts/weather/context';

import Nube from '../../images/nube-simple.svg';

import './styles.scss';

const TempHour = () => {
  const { theme } = React.useContext(WeatherContext);

  const styles = theme === 'day' ? { color: '#131830' } : { color: '#FFFFFF' };

  return (
    <div className="info-clima-horario">
      <div className="horario" style={styles}>
        14:00
      </div>
      <img src={Nube} alt="Nube" className="nube-prox-horario" />
      <div className="temperatura" style={styles}>
        39º
      </div>
    </div>
  );
};

export default TempHour;
