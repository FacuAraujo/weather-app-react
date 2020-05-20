import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Sol from '../../images/sol.svg';
import Luna from '../../images/luna.svg';

import '../drawGlobal.scss';
import './styles.scss';

const ClearSky = ({ time }) => {
  const propsSolLuna = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
  });

  const DiaONoche = () => {
    if (time === 'n') {
      return (
        <animated.img
          style={propsSolLuna}
          src={Luna}
          alt="Luna"
          className="luna resplandor"
        />
      );
    } else
      return (
        <animated.img
          style={propsSolLuna}
          src={Sol}
          alt="sol"
          className="sol resplandor"
        />
      );
  };

  return <section className="graficos">{DiaONoche()}</section>;
};

export default ClearSky;
