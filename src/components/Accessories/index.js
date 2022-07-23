import { useState, useEffect } from 'react';
import AccessoryButton from '../AccessoryButton';
import Swatch from '../Swatch';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './accessories.scss';

const accessories = [
  {
    type: 'hair',
  },
  {
    type: 'eyelashes',
  },
  {
    type: 'hats',
  },
  {
    type: 'HORNS',
  },
];
export default function Accessories() {
  const { monsterType, showIcons, setShowIcon } = useMonsterCreator();

  const [acc, setAcc] = useState('hair');
  const [accList, setList] = useState([]);

  useEffect(() => {
    setList([]);
    switch (acc) {
      case 'hair':
        setList(monsterType.swatches.hair);
        return;
      case 'eyelashes':
        setList(monsterType.swatches.eyelashes);
        return;
      case 'hats':
        setList(monsterType.swatches.hats);
        return;
      case 'HORNS':
        setList(monsterType.swatches.horns);
        return;
      default:
        console.log('Your accessory was not found');
    }
  }, [acc]);

  return (
    <div
    className="accessories">
      {showIcons ? (
        <div className="accessories__icons">
          <div>
            {accList &&
              accList.length > 0 &&
              accList.map((a) => (
                <Swatch key={a.id} id={a.id} url={a.url} type={acc} />
              ))}
          </div>
          <button className="btn btn--rect" onClick={() => setShowIcon(false)}> BACK TO MENU</button>
        </div>
      ) : (
        null
      )}
      <div className={`accessories_list ${showIcons && 'wid50'}`}>
        {accessories.map((a) => (
          <AccessoryButton
            key={Math.random()}
            copy={a.type}
            callback={setAcc}
          />
        ))}
      </div>
    </div>
  );
}
