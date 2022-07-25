import React from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './splash.scss';

function Splash() {

const {setCurrentStep} = useMonsterCreator()

  return (
    <div className="splash">
    <div className="splash__content">
        <div>
            <img src="./images/splash/title.png" alt="title"/>
        </div>
        <div>
            <img src="./images/splash/group.png" alt="splash"/>
        </div>
    </div>
    <button className="btn btn--round btn--round--splash" onClick={() =>{setCurrentStep(0)}}>start</button>
    </div>

  )
}

export default Splash