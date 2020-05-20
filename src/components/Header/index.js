import React, { useState } from 'react';
import WeatherContext from '../../contexts/weather/context';

import BurgerMenu from '../BurgerMenu';
import Input from '../Input';

import './styles.scss';

const Header = ({ title }) => {
  const { theme } = React.useContext(WeatherContext);
  const [isVisible, setVisible] = useState(false);

  const oneWordLine = (text) => {
    const words = text.split(' ');
    return words.map((word, key) => (
      <span key={key} className="d-block">
        {word}
      </span>
    ));
  };

  const displayInput = () => {
    return isVisible ? <Input /> : null;
  };

  const styles = theme === 'day' ? { color: '#131830' } : { color: '#FFFFFF' };

  return (
    <header className="top-bar">
      <div className="titulo-clima" style={styles}>
        {oneWordLine(title)}
      </div>
      {displayInput()}
      <div
        className="pointer btn-container"
        onClick={() => setVisible(!isVisible)}
      >
        <BurgerMenu visible={isVisible} theme={theme} />
      </div>
    </header>
  );
};

export default Header;
