import React, { useEffect, useRef } from 'react';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './navigation.scss';

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default function Navigation() {
  const { goForward, goBack, currentStep, monsterType } =
    useMonsterCreator();
  const prev = useRef();
  // const prevCount = usePrevious(monsterType);

  useEffect(() => {
    if (currentStep === 4) {
      prev.current.classList.add('last');
    }
  }, [currentStep]);

  return (
    <div
      className='navigation'>
      {currentStep !== 0 && (
        <button
          className="navigation__btn--back"
          ref={prev}
          onClick={goBack}
        >
          Prev
        </button>
      )}
      {currentStep !== 4 && (
        <button
          className="navigation__btn--forward"
          onClick={goForward}
        >
          Next
        </button>
      )}
    </div>
  );
}
