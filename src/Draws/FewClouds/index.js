import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Sol from '../../images/sol.svg';
import Luna from '../../images/luna.svg';
import NubeSimple from '../../images/nube-simple.svg';

import '../drawGlobal.scss';
import './styles.scss';

const FewClouds = ({ time }) => {
  const propsSolLuna = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
  });

  const Nube1 = useSpring({
    from: { transform: 'translateX(200px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
    delay: 500,
  });

  const Nube2 = useSpring({
    from: { transform: 'translateX(-200px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
    delay: 500,
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

  return (
    <section className="graficos">
      <animated.img
        style={Nube1}
        src={NubeSimple}
        alt="Nube simple"
        className="nube nube--primera"
      />

      {DiaONoche()}

      <animated.img
        style={Nube2}
        src={NubeSimple}
        alt="Nube simple"
        className="nube nube--segunda"
      />
    </section>
  );
};

export default FewClouds;
