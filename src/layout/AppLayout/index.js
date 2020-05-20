import React from 'react';
import WeatherContext from '../../contexts/weather/context';

import './styles.scss';

const AppLayout = ({ children }) => {
  const { theme } = React.useContext(WeatherContext);

  const night = {
    backgroundColor: 'rgb(103, 102, 129)',
    background: 'radial-gradient(circle, #333150 0%, #131830 80%)',
    boxShadow: '0 10px 35px 0 #101429, 0 1px 1px 0 #0C0F1E',
  };

  const day = {
    backgroundColor: 'rgb(103, 102, 129)',
    background: 'radial-gradient(circle, #FFFFFF 0%, #EAF6FE 80%)',
    boxShadow: '0 10px 35px 0 #D9E5ED, 0 1px 1px 0 #D0DCE3',
    fontWeight: 700,
  };

  const styles = theme === 'day' ? day : night;

  return (
    <div className="general" style={styles}>
      <div style={styles} className="container">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
