import React from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import './progressbar.scss'

export default function ProgressBar() {
  const { currentStep } = useMonsterCreator()

  return (
    <div className="progressbar">
      <div className="progressbar__bar">
        <div
          className="over"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
      <div
        id="0"
        className={`number ${currentStep === 0 && 'active'} ${currentStep > 0 &&
          'blue'}`}
      >
        <span>01</span>
      </div>
      <div
        id="1"
        className={`number ${currentStep === 1 && 'active'} ${currentStep > 1 &&
          'blue'}`}
      >
        <span>02</span>
      </div>
      <div
        id="2"
        className={`number ${currentStep === 2 && 'active'} ${currentStep > 2 &&
          'blue'}`}
      >
        <span>03</span>
      </div>
      <div
        id="3"
        className={`number ${currentStep === 3 && 'active'} ${currentStep > 3 &&
          'blue'}`}
      >
        <span>04</span>
      </div>
      <div
        id="4"
        className={`number ${currentStep === 4 && 'active'} ${currentStep > 4 &&
          'blue'}`}
      >
        <span>05</span>
      </div>
    </div>
  )
}
