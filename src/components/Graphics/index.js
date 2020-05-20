import React from 'react';

import ClearSky from '../../Draws/ClearSky';
import FewClouds from '../../Draws/FewClouds';
import ScatteredClouds from '../../Draws/ScatteredClouds';
import BrokenClouds from '../../Draws/BrokenClouds';
import ShowerRain from '../../Draws/ShowerRain';
import Rain from '../../Draws/Rain';
import ThunderStorm from '../../Draws/ThunderStorm';
import Snow from '../../Draws/Snow';
import Mist from '../../Draws/Mist';

import './styles.scss';

const Graphics = ({ code, time }) => {
  const mostrarGrafico = (codigo) => {
    if (codigo >= 200 && codigo < 300) {
      return <ThunderStorm />;
    } else if (codigo >= 300 && codigo < 500) {
      return <ShowerRain />;
    } else if (codigo >= 500 && codigo < 511) {
      return <Rain time={time} />;
    } else if (codigo === 511) {
      return <Snow />;
    } else if (codigo >= 520 && codigo < 600) {
      return <ShowerRain />;
    } else if (codigo >= 600 && codigo < 700) {
      return <Snow />;
    } else if (codigo >= 700 && codigo < 800) {
      return <Mist />;
    } else if (codigo === 800) {
      return <ClearSky time={time} />;
    } else if (codigo === 801) {
      return <FewClouds time={time} />;
    } else if (codigo === 802) {
      return <ScatteredClouds />;
    } else if (codigo === 803 || codigo === 804) {
      return <BrokenClouds />;
    } else {
      return <h1>Error</h1>;
    }
  };

  return <div className="graficos--container">{mostrarGrafico(code)}</div>;
};

export default Graphics;
