import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Sol from '../../images/sol.svg';
import Luna from '../../images/luna.svg';
import Nube from '../../images/nube-negra.svg';
import Lluvia1 from '../../images/fila1-lluvia.svg';
import Lluvia2 from '../../images/fila2-lluvia.svg';
import Lluvia3 from '../../images/fila3-lluvia.svg';
import Lluvia4 from '../../images/fila4-lluvia.svg';
import Lluvia5 from '../../images/fila5-lluvia.svg';

import '../drawGlobal.scss';
import './styles.scss';

const Rain = ({ time }) => {
  const propsNube = useSpring({
    from: { transform: 'translateX(-500px)' },
    to: { transform: 'translateX(0px)' },
    config: config.molasses,
  });

  const propsSolLuna = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
    delay: 1200,
  });

  const propsLLuvia = {
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.molasses,
    reset: true,
  };

  const propsLluvia1 = useSpring({ ...propsLLuvia, delay: 1300 });
  const propsLluvia2 = useSpring({ ...propsLLuvia, delay: 1600 });
  const propsLluvia3 = useSpring({ ...propsLLuvia, delay: 1200 });
  const propsLluvia4 = useSpring({ ...propsLLuvia, delay: 1400 });
  const propsLluvia5 = useSpring({ ...propsLLuvia, delay: 1500 });

  const DiaONoche = () => {
    if (time === 'n') {
      return (
        <animated.img
          style={propsSolLuna}
          src={Luna}
          alt="Luna"
          className="luna-lluvia"
        />
      );
    } else
      return (
        <animated.img
          style={propsSolLuna}
          src={Sol}
          alt="sol"
          className="sol-lluvia"
        />
      );
  };

  return (
    <section className="graficos">
      <animated.img
        style={propsNube}
        src={Nube}
        alt="Nube"
        className="nube-lluvia-con-sol"
      />

      {DiaONoche()}

      <div className="lluvia">
        <animated.img style={propsLluvia1} src={Lluvia1} alt="Lluvia" />
        <animated.img style={propsLluvia2} src={Lluvia2} alt="Lluvia" />
        <animated.img style={propsLluvia3} src={Lluvia3} alt="Lluvia" />
        <animated.img style={propsLluvia4} src={Lluvia4} alt="Lluvia" />
        <animated.img style={propsLluvia5} src={Lluvia5} alt="Lluvia" />
      </div>
    </section>
  );
};

export default Rain;
