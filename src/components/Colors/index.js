import { useState, useEffect } from 'react';
import Swatch from '../Swatch';
import useMonsterCreator from '../../hooks/useMonsterCreator';

function Colors() {
  const [fur, setFur] = useState(false);
  const [swatchs, setSwatches] = useState([]);
  const [type, setType] = useState('color');
  const [copy, setCopy] = useState('ADD FUR');
  const { monsterType, monsterColor, setMonsterFur } = useMonsterCreator();

  useEffect(() => {
    if (fur) {
      setSwatches(monsterType.swatches.fur);
      setType('fur');
      setCopy('REMOVE FUR');
      setMonsterFur(monsterColor);
    } else {
      setSwatches(monsterType.swatches.colors);
      setType('color');
      setCopy('ADD FUR');
      setMonsterFur(null);
    }
  }, [fur]);
  
  if(!swatchs.length) return (<p>No swatches found</p>)

  return (
    <div>
      {swatchs.map((i) => {
        return <Swatch key={i.id} id={i.id} url={i.url} type={type} />;
      })}
      {monsterType.fur && (
        <div>
        <button
          style={{
            width: '245px',
            height: '45px',
            cursor: 'pointer',
            marginTop: '20px',
            boxShadow: '0px 3px 8px #aaa, inset 0px 2px 3px #fff'
          }}
          onClick={() => {
            setFur(!fur);
          }}
        >
          {copy}
        </button>
        </div>
      )}
    </div>
  );
}

export default Colors;
