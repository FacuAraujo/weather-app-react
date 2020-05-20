import React, { useState } from 'react';
import WeatherContext from '../../contexts/weather/context';

import './styles.scss';

const Input = () => {
  const { getData, theme } = React.useContext(WeatherContext);
  const [city, setCity] = useState('');

  const handleClick = () => {
    if (!city) return;
    getData(city);
  };

  const styles = theme === 'day' ? { color: '#131830' } : { color: '#FFFFFF' };

  return (
    <div className="input-container">
      <input
        style={styles}
        type="text"
        className="country-select"
        placeholder="London"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="btn-country">
        <div className="search icon" onClick={() => handleClick()}></div>
      </div>
    </div>
  );
};

export default Input;
