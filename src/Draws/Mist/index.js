import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Nube from '../../images/nube-negra.svg';
import Niebla1 from '../../images/fila1-niebla.svg';
import Niebla2 from '../../images/fila2-niebla.svg';

import '../drawGlobal.scss';
import './styles.scss';

const Mist = () => {
  const propsNube = useSpring({
    from: { transform: 'translateX(-500px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
  });

  const propsNiebla1 = useSpring({
    from: { transform: 'translateX(-200px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: config.molasses,
    delay: 500,
  });

  const propsNiebla2 = useSpring({
    from: { transform: 'translateX(200px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: config.molasses,
    delay: 500,
  });

  return (
    <section className="graficos">
      <animated.img
        style={propsNube}
        src={Nube}
        alt="Nube"
        className="nube-niebla"
      />
      <div className="niebla">
        <animated.img style={propsNiebla1} src={Niebla1} alt="Niebla" />
        <animated.img style={propsNiebla2} src={Niebla2} alt="Niebla" />
      </div>
    </section>
  );
};

export default Mist;
