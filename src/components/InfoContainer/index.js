import React from 'react';

import TempActual from '../TempActual';
import TempNext from '../TempNext';

import './styles.scss';

const InfoContainer = (props) => {
  return (
    <section className="clima-info">
      <TempActual {...props} />
      <TempNext />
    </section>
  );
};

export default InfoContainer;
