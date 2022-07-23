import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './banner.scss';

export default function Banner() {
  const { showHelpGallery, currentStep } = useMonsterCreator();
  if(currentStep === -1) return <></>
  return (
    <div className="banner">
      <h1>create-a-monster</h1>
      {/* <button className="close-button" onClick={() => showHelpGallery(true)}>
        <h3>
          <FaRegQuestionCircle />
        </h3>
      </button> */}
    </div>
  );
}
