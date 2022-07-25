import { useState, useEffect } from 'react';
import Splash from './Splash';
import SideBar from './SideBar';
import Navigation from './Navigation';
import Monster from './Monster';
import ProgressBar from './ProgressBar';
import Background from './Background';
import Header from './Header';
import SingleImageSlider from './SingleImageSlider';
import useMonsterCreator from '../hooks/useMonsterCreator';
import { monsters } from '../data/data';

function Home() {
  const [images, setImages] = useState();
  const {
    currentStep,
    monsterType,
    setStartIndex,
    activeSlideIndex,
    setActiveSlide,
  } = useMonsterCreator();

  useEffect(() => {
    setImages(
      Object.entries(monsters).map((i) =>
        Object.assign({ index: i[1].index, id: i[1].id, url: i[1].url })
      )
    );
  }, []);

  if (!images) return <></>;

  return (
    <div className='home row'>
      {currentStep === -1 && <Splash />}
      {currentStep !== -1 && (
        <>
          <Background />
          <div className='flex row' style={{ justifyContent: 'center' }}>
            <ProgressBar />
          </div>
        </>
      )}
      {currentStep === 0 && (
        <div className='flex row step-slide'>
          <Header />
          <SingleImageSlider data={images} width={500} height={525} />
        </div>
      )}
      {currentStep > 0 && (
        <div className='accessories-steps'>
          <SideBar />
          <Monster />
        </div>
      )}
      {currentStep !== -1 && <Navigation />}
    </div>
  );
}

export default Home;
