import React, { useState } from 'react';
import { copy, monsters } from '../data/data';

type Props = {
  children?: React.ReactNode;
};


interface IState {
  currentStep: number;
  stepCopy: {title: string, copy: string};
  monsterColor: number;
  monsterLashes: string;
  monsterHair: null;
  monsterHat: null;
  monsterHorn: null;
  monsterFur: null;
  monsterName: string;
  monsterUrl: null;
  monsterNameIsValid: boolean;
  startIndex: number;
  activeSlideIndex: number;
  monsterType: {};
}

const MonsterContext = React.createContext([{}, () => {}]);

const MonsterProvider = (props: Props) => {
  const [state, setState] = useState<IState>({
    currentStep: -1,
    stepCopy: copy[0],
    monsterColor: 1,
    monsterLashes: '',
    monsterHair: null,
    monsterHat: null,
    monsterHorn: null,
    monsterFur: null,
    monsterUrl: null,
    monsterName: 'MONSTER NAME',
    monsterNameIsValid: false,
    startIndex: 0,
    activeSlideIndex: 0,
    monsterType: monsters[0],
  });

  const [showIcons, setShowIcons] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <MonsterContext.Provider
      value={[
        state as IState,
        setState,
        copy,
        monsters,
        showIcons,
        setShowIcons,
        showHelp,
        setShowHelp,
      ]}
    >
      {props.children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };
