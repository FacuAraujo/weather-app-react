import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Nube from '../../images/nube-clara.svg';

import '../drawGlobal.scss';
import './styles.scss';

const ScatteredClouds = () => {
  const Nube1 = useSpring({
    from: { transform: 'translateX(-200px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
  });

  const Nube2 = useSpring({
    from: { transform: 'translateX(200px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
    delay: 100,
  });

  return (
    <section className="graficos">
      <animated.img
        style={Nube1}
        src={Nube}
        alt="Nube"
        className="nube-clara"
      />
      <animated.img
        style={Nube2}
        src={Nube}
        alt="Nube"
        className="nube-clara"
      />
    </section>
  );
};

export default ScatteredClouds;
