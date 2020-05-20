import React from 'react';

import TempHour from '../TempHour';

import './styles.scss';

const TempActual = () => {
  return (
    <div className="proxima">
      <TempHour />
      <TempHour />
    </div>
  );
};

export default TempActual;
