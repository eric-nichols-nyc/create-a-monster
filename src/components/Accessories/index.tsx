import { useState, useEffect } from 'react';
import AccessoryButton from '../AccessoryButton';
import Swatch from '../Swatch';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './accessories.scss';

interface IAccessory { 
  id:string;
  url:string;
}

const accessories = ['hair','eyelashes','hats','HORNS'];

export default function Accessories() {
  const { monsterType, showIcons, setShowIcon } = useMonsterCreator();
  const {swatches:{hair}, swatches:{eyelashes}, swatches:{hats}, swatches:{horns}} = monsterType;
  const [acc, setAcc] = useState('hair');
  const [accList, setList] = useState([]);

  useEffect(() => {
    setList([]);
    switch (acc) {
      case 'hair':
        setList(hair);
        return;
      case 'eyelashes':
        setList(eyelashes);
        return;
      case 'hats':
        setList(hats);
        return;
      case 'HORNS':
        setList(horns);
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
              accList.map((a:IAccessory) => (
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
            copy={a}
            callback={setAcc}
          />
        ))}
      </div>
    </div>
  );
}
