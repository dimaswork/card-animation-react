import { useState } from 'react';
import { useSpring } from '@react-spring/web';
import { round } from '../helpers/Math';

export const useStyles = () => {
  const [springRotate, setSpringRotate] = useState({ x: 0, y: 0 });
  const [springGlare, setSpringGlare] = useState({ x: 50, y: 50, o: 0 });
  const [springBackground, setSpringBackground] = useState({ x: 50, y: 50 });

  const [springRotateDelta, setSpringRotateDelta] = useState({ x: 0, y: 0 });
  const [springTranslate, setSpringTranslate] = useState({ x: 0, y: 0 });
  const [springScale, setSpringScale] = useState(1);

  const stylesInit = {
    '--mx': `${springGlare.x}%`,
    '--my': `${springGlare.y}%`,
    '--tx': `${springTranslate.x}px`,
    '--ty': `${springTranslate.y}px`,
    '--s': springScale,
    '--o': springGlare.o,
    '--rx': `${springRotate.x + springRotateDelta.x}deg`,
    '--ry': `${springRotate.y + springRotateDelta.y}deg`,
    '--pos': `${springBackground.x}% ${springBackground.y}%`,
    '--posx': `${springBackground.x}%`,
    '--posy': `${springBackground.y}%`,
    '--hyp': `${
      Math.sqrt(
        (springGlare.y - 50) * (springGlare.y - 50) + (springGlare.x - 50) * (springGlare.x - 50)
      ) / 50
    }`,
  };

  const [springConfig, setSpringConfig] = useState({});
  const styles = useSpring({
    to: stylesInit,
    config: springConfig,
  });

  const interactHandler = (e) => {
    if (e.type === 'touchmove') {
      e.clientX = e.touches[0].clientX;
      e.clientY = e.touches[0].clientY;
    }

    const $el = e.target;
    const rect = $el.getBoundingClientRect();
    const absolute = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    const percent = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y),
    };
    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setSpringConfig({});

    setSpringBackground({
      x: round(50 + percent.x / 4 - 12.5),
      y: round(50 + percent.y / 3 - 16.67),
    });

    setSpringRotate({
      x: round(-(center.x / 3.5)),
      y: round(center.y / 2),
    });

    setSpringGlare({
      x: percent.x,
      y: percent.y,
      o: 1,
    });
  };

  const interactEndHandler = (e, delay = 500) => {
    setTimeout(function () {
      setSpringConfig({
        damping: 0.6,
        friction: 10,
      });

      setSpringRotate({ x: 0, y: 0 });

      setSpringGlare({ x: 50, y: 50, o: 0 });

      setSpringBackground({ x: 50, y: 50 });
    }, delay);
  };

  return {
    springRotate,
    setSpringRotate,
    springGlare,
    setSpringGlare,
    springBackground,
    setSpringBackground,

    springRotateDelta,
    setSpringRotateDelta,
    springTranslate,
    setSpringTranslate,
    springScale,
    setSpringScale,

    springConfig,
    setSpringConfig,
    styles,
    interactHandler,
    interactEndHandler,
  };
};
