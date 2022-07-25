import React from 'react';
import useMonsterCreator from '../../hooks/useMonsterCreator';

export default function Swatch({ id, type, url }) {
  const {
    setMonsterColor,
    setMonsterLashes,
    setMonsterHair,
    setMonsterFur,
    setMonsterHat,
    setMonsterHorn,
  } = useMonsterCreator();

  function setAccesories() {
    console.log('type = ', type);

    switch (type) {
      case 'HORNS':
        setMonsterHorn(id);
        setMonsterHat(null);
        return;
      case 'hats':
        setMonsterHat(id);
        setMonsterHair(null);
        setMonsterHorn(null);
        return;
      case 'eyelashes':
        setMonsterLashes(id);
        return;
      case 'color':
        setMonsterColor(id);
        return;
      case 'hair':
        setMonsterHair(id);
        setMonsterHat(null);
        return;
      case 'fur':
        setMonsterColor(id);
        setMonsterFur(id);
        return;
      default:
        return;
    }
  }

  return (
    <button
      className="btn btn--square"
      onClick={() => {
        setAccesories();
      }}
      id={id}
    >
      <img src={url} />
    </button>
  );
}
