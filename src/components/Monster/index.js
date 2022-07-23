import React, { useState, useEffect } from 'react';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './monster.scss';

export default function Monster() {
  const url = '';
  const [color, setColor] = useState('');
  const [lashes, setLashes] = useState();
  const [hair, setHair] = useState();
  const {
    monsterType,
    monsterColor,
    monsterFur,
    monsterLashes,  
    monsterHair,
    monsterHat,
    monsterHorn,
    currentStep,
    monsterUrl,
    monsterName,
  } = useMonsterCreator();

  useEffect(() => {
    const url = monsterType.colors.filter((c) => c.id === monsterColor)[0].url;
    setColor(url);
  }, [monsterColor, monsterType]);

  useEffect(() => {
    const url = monsterType.colors.filter((c) => c.id === monsterColor)[0].url;
    setColor(url);
  }, [monsterColor, monsterType.colors]);

  useEffect(() => {
    if (monsterLashes !== '') {
      const url = monsterType.eyelashes.filter((c) => c.id === monsterLashes)[0].url;
      setLashes(url);
    }
  }, [monsterLashes]);

  useEffect(() => {
    if (monsterHair !== null) {
      const url = monsterType.hair.filter((c) => c.id === monsterHair)[0].url;
      setHair(url);
    }
  }, [monsterHair]);

  return currentStep !== 4 ? (
    <div
      id='my-monster'
      className='monster'>
      <div
      className='monster__container'>
        <img src={color} alt='logo' />
        {lashes && (
          <img
            src={lashes}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterFur !== null && (
          <img
            src={monsterType.fur.filter((c) => c.id === monsterFur)[0].url}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {lashes && (
          <img
            src={lashes}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHair !== null && (
          <img
            src={monsterType.hair.filter((c) => c.id === monsterHair)[0].url}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHorn && (
          <img
            src={monsterType.horns.filter((c) => c.id === monsterHorn)[0].url}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
        {monsterHat && (
          <img
            src={monsterType.hats.filter((c) => c.id === monsterHat)[0].url}
            alt='logo'
            style={{ position: 'absolute', top: 0 }}
          />
        )}
      </div>
    </div>
  ) : (
    <div className='monster__photo'>
      <div
        id='polaroid'
        className='monster__photo__polaroid'>
        <img src={monsterUrl} />
        <div
          className='monster__photo__caption'>
          {monsterName}
        </div>
      </div>
    </div>
  );
}
