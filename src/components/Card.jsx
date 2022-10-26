import { animated } from '@react-spring/web';
import { useStyles } from '../hooks/useStyles';
import { useRef, useState } from 'react';
import { round } from '../helpers/Math';

import '../styles/card.scss';

import back from '../images/back-card.jpg';

const Card = ({ children }) => {
  const {
    setSpringRotateDelta,
    setSpringTranslate,
    setSpringScale,

    styles,
    interactHandler,
    interactEndHandler,
  } = useStyles();

  const [activeCard, setActiveCard] = useState();

  const [firstPop, setFirstPop] = useState(true);

  const thisCard = useRef(null);

  const setCenter = () => {
    const rect = thisCard?.current?.getBoundingClientRect();
    const view = document.documentElement;

    const delta = {
      x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
      y: round(view.clientHeight / 2 - rect.y - rect.height / 2),
    };
    setSpringTranslate({
      x: delta.x,
      y: delta.y,
    });
  };

  const popover = () => {
    const rect = thisCard?.current?.getBoundingClientRect();
    let delay = 100;
    let scaleW = (window.innerWidth / rect.width) * 0.9;
    let scaleH = (window.innerHeight / rect.height) * 0.9;
    let scaleF = 1.75;
    setCenter();
    if (firstPop) {
      delay = 1000;
      setSpringRotateDelta({
        x: 360,
        y: 0,
      });
    }
    setFirstPop(false);
    setSpringScale(Math.min(scaleW, scaleH, scaleF));
    interactEndHandler(null, delay);
  };

  const retreat = () => {
    setSpringTranslate({
      x: 0,
      y: 0,
    });
    setSpringRotateDelta({
      x: 0,
      y: 0,
    });
    setSpringScale(1);
    interactEndHandler(null, 100);
  };

  const [active, setActive] = useState(false);

  const activateHandler = (e) => {
    const isTouch = e.pointerType === 'touch';
    if (!isTouch && activeCard && activeCard?.current === thisCard?.current) {
      setActiveCard(undefined);
    } else {
      setActiveCard(thisCard);

      popover();
      setActive(true);
    }
  };

  const deactivateHandler = () => {
    interactEndHandler();
    setActiveCard(undefined);

    retreat();
    setActive(false);
  };

  return (
    <animated.div
      ref={thisCard}
      style={styles}
      className={`card ${active ? 'active' : ''}`}
      data-rarity="rare ultra"
      data-supertype="pokémon">
      <div className="card__translater">
        <div
          onMouseMove={interactHandler}
          onMouseLeave={interactEndHandler}
          onPointerUp={activateHandler}
          onBlur={deactivateHandler}
          className="card__rotator"
          tabIndex="0">
          <img className="card__back" src={back} alt="" />
          <div className="card__front">{children}</div>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
