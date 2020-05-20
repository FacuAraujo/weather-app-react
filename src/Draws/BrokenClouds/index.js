import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import NubeNegra from '../../images/nube-negra.svg';
import NubeMasOscura from '../../images/nube-mas-oscura.svg';

import '../drawGlobal.scss';
import './styles.scss';

const BrokenClouds = () => {
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
        src={NubeNegra}
        alt="Nube"
        className="nube-oscura"
      />
      <animated.img
        style={Nube2}
        src={NubeMasOscura}
        alt="Nube"
        className="nube-oscura"
      />
    </section>
  );
};

export default BrokenClouds;
