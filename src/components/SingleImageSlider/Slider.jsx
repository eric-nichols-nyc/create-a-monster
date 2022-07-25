import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaRegWindowClose } from 'react-icons/fa';
import SliderContent from './SliderContent';
import ImageSlide from './ImageSlide';
import HelpSlide from './HelpSlide';
import Arrow from './Arrow';
import useMonsterCreator from '../../hooks/useMonsterCreator';

/**
 * @function Slider
 */

function Slider({ slides, width, height, type, closeButton, callback }) {
  const { showHelpGallery } = useMonsterCreator();

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: width,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, transition, _slides } = state;

  const sliderRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    // console.log('activeSlide = ', activeSlide);
    // console.log('test 1 = ', state._slides[1])
    callback(activeSlide);
    transitionRef.current = smoothTransition();
  }, [activeSlide]);

  useEffect(() => {
    callback(state._slides[1].index);
  }, [state._slides]);

  useEffect(() => {
    const slider = sliderRef.current;

    // 3. call
    const smooth = (e) => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current();
      }
    };
    //2. on transitionEnd listener to slider to invoke smoothTransition
    const transitionEnd = slider.addEventListener('transitionend', smooth);

    return () => {
      slider.removeEventListener('transitionend', transitionEnd);
    };
  }, []);

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    }
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    }
    // Create an array of the previous last slide, and the next two slides that follow it.
    else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    // set transition to 0
    setState({
      activeSlide,
      _slides,
      transition: 0,
      translate: width,
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + width,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  const getSlideByType = (i) => {
    if (type === 'image') {
      return <ImageSlide key={i.id} imgSrc={i.url} id={i.id} width={width} />;
    } else {
      return <HelpSlide key={i.id} imgSrc={i.url} data={i} width={width} />;
    }
  };

  return (
    <div className='slider' ref={sliderRef}>
      {closeButton && (
        <button className='closebtn' onClick={() => showHelpGallery(false)}>
          <h3>
            <FaRegWindowClose />
          </h3>
        </button>
      )}
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * _slides.length}
        image={slides[activeSlide]}
      >
        {_slides.map((i) => getSlideByType(i))}
      </SliderContent>
      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow
        direction='right'
        handleClick={() => {
          nextSlide();
        }}
      />
    </div>
  );
}

Slider.defaultProps = {
  type: 'image',
  closeButton: false,
  startIndex: 0,
  callback: function () {
    console.log('callback was triggered');
  },
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
  closeButton: PropTypes.bool,
  callback: PropTypes.func,
  startIndex: PropTypes.number,
};

export default Slider;
