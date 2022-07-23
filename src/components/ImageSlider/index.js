import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './imageSlider.scss';

const ImageSlider = ({ data, width, type, height, closeButton }) => {
  const { monsterType, setMonsterType } = useMonsterCreator();
  const [slides, setSlides] = useState(null);

  const reorderArr = (a, n) => {
    a.map((item) => {
      if (a.indexOf(item) < n) {
        a.push(a.shift());
      }
    });
    return a;
  };

  function SliderCB(id){
    setMonsterType(id)
  }

  // useEffect(() => {
  //   console.log('monsterType= ', monsterType )
  // }, [monsterType])

  // useEffect(() => {
  //   console.log('slides= ', slides )
  // }, [slides])

  useEffect(() => {
    // if startIndex !== 0 restructure data
    let start = monsterType.index
    setSlides(reorderArr(data, start));
  }, []);

  if (!slides) return <></>;
  return (
    <Slider
      slides={slides}
      width={width}
      type={type}
      height={height}
      closeButton={closeButton}
      callback={SliderCB}
    />
  );
};

export default ImageSlider;
