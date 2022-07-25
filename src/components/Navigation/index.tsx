import React, { useEffect, useRef } from 'react';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './navigation.scss';

export default function Navigation() {
  const { goForward, goBack, currentStep } =
    useMonsterCreator();
  const prev = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (currentStep === 4) {
      prev.current?.classList.add('last');
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
