import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import NubeNegra from '../../images/nube-negra.svg';
import NubeMasOscura from '../../images/nube-mas-oscura.svg';
import Rayo from '../../images/rayo.svg';

import '../drawGlobal.scss';
import './styles.scss';

const ThunderStorm = () => {
  const propsNube = useSpring({
    from: { transform: 'translateX(-500px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
  });

  const propsNube2 = useSpring({
    from: { transform: 'translateX(500px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
    delay: 100,
  });

  const propsRayo = useSpring({
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
    delay: 1200,
  });

  return (
    <section className="graficos">
      <animated.img
        style={propsNube}
        src={NubeNegra}
        alt="Nube"
        className="nube-oscura-rayo"
      />
      <animated.img
        style={propsNube2}
        src={NubeMasOscura}
        alt="Nube"
        className="nube-oscura-rayo"
      />
      <animated.img style={propsRayo} src={Rayo} alt="rayo" className="rayo" />
    </section>
  );
};

export default ThunderStorm;
