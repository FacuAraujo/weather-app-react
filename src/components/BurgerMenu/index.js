import React from 'react';
import './styles.scss';

const BurgerMenu = ({ visible, theme }) => {
  const styles =
    theme === 'day'
      ? { backgroundColor: '#131830' }
      : { backgroundColor: '#FFFFFF' };

  return (
    <div
      id="btn-menu"
      className={`burger-menu ${visible ? 'menu-active' : ''}`}
      role="button"
      tabIndex="1"
      href="#"
    >
      <div className="line1" style={styles}></div>
      <div className="line2" style={styles}></div>
    </div>
  );
};

export default BurgerMenu;
