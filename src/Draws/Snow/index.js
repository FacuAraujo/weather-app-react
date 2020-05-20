import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Nube from '../../images/nube-clara.svg';
import Nieve1 from '../../images/fila1-nieve.svg';
import Nieve2 from '../../images/fila2-nieve.svg';
import Nieve3 from '../../images/fila3-nieve.svg';
import Nieve4 from '../../images/fila4-nieve.svg';
import Nieve5 from '../../images/fila5-nieve.svg';

import '../drawGlobal.scss';
import './styles.scss';

const Snow = () => {
  const propsNube = useSpring({
    from: { transform: 'translateX(-500px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
  });

  const propsNieve = {
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
    reset: true,
  };

  const propsNieve1 = useSpring({ ...propsNieve, delay: 1300 });
  const propsNieve2 = useSpring({ ...propsNieve, delay: 1600 });
  const propsNieve3 = useSpring({ ...propsNieve, delay: 1200 });
  const propsNieve4 = useSpring({ ...propsNieve, delay: 1400 });
  const propsNieve5 = useSpring({ ...propsNieve, delay: 1500 });

  return (
    <section className="graficos">
      <animated.img
        style={propsNube}
        src={Nube}
        alt="Nube"
        className="nube-nieve"
      />
      <div className="nieve">
        <animated.img style={propsNieve1} src={Nieve1} alt="Nieve" />
        <animated.img style={propsNieve2} src={Nieve2} alt="Nieve" />
        <animated.img style={propsNieve3} src={Nieve3} alt="Nieve" />
        <animated.img style={propsNieve4} src={Nieve4} alt="Nieve" />
        <animated.img style={propsNieve5} src={Nieve5} alt="Nieve" />
      </div>
    </section>
  );
};

export default Snow;
