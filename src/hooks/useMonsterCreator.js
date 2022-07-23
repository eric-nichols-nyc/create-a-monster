import { useContext } from 'react';
import { MonsterContext } from './MonsterContext';
import * as htmlToImage from 'html-to-image';

function useMonsterCreator() {
  const [
    state,
    setState,
    copy,
    monsters,
    showIcons,
    setShowIcons,
    showHelp,
    setShowHelp,
  ] = useContext(MonsterContext);

  const lastStep = 4;
  function goForward() {
    if (state.currentStep + 1 === lastStep && !state.monsterNameIsValid) {
      return;
    } else if (state.currentStep + 1 === lastStep && state.monsterNameIsValid) {
      var node = document.getElementById('my-monster');
      htmlToImage
        .toPng(node)
        .then(function (dataUrl) {
          setState((state) => ({ ...state, monsterUrl: dataUrl }));
          setState((state) => ({
            ...state,
            currentStep: state.currentStep + 1,
          }));
          setState((state) => ({
            ...state,
            stepCopy: copy[state.currentStep],
          }));
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    } else {
      setState((state) => ({ ...state, currentStep: state.currentStep + 1 }));
      setState((state) => ({ ...state, stepCopy: copy[state.currentStep] }));
    }
  }

  function setMonsterType(id) {
    setState((state) => ({ ...state, monsterType: monsters[id] }));
  }

  function goBack() {
    setState((state) => ({ ...state, currentStep: state.currentStep - 1 }));
    setState((state) => ({ ...state, stepCopy: copy[state.currentStep] }));
  }

  function setMonsterColor(id) {
    setState((state) => ({ ...state, monsterColor: id }));
  }

  function setMonsterLashes(id) {
    setState((state) => ({ ...state, monsterLashes: id }));
  }

  function setMonsterHair(id) {
    setState((state) => ({ ...state, monsterHair: id }));
  }

  function setMonsterFur(id) {
    setState((state) => ({ ...state, monsterFur: id }));
  }

  function setMonsterHat(id) {
    setState((state) => ({ ...state, monsterHat: id }));
  }

  function setMonsterHorn(id) {
    setState((state) => ({ ...state, monsterHorn: id }));
  }

  function setMonsterName(str) {
    setState((state) => ({ ...state, monsterName: str }));
  }

  function setShowIcon(bool) {
    setShowIcons(bool);
  }

  function showHelpGallery(bool) {
    console.log(bool);
    setShowHelp(bool);
  }

  function setMonsterNameIsValid(bool) {
    setState((state) => ({ ...state, monsterNameIsValid: bool }));
  }
  function setStartIndex(num) {
    setState((state) => ({ ...state, startIndex: num }));
  }

  function setActiveSlide(num) {
    setState((state) => ({ ...state, activeSlideIndex: num }));
  }
  function setCurrentStep(num){
    setState((state) => ({...state, currentStep: num}))
  }

  return {
    monsterType: state.monsterType,
    currentStep: state.currentStep,
    stepCopy: state.stepCopy,
    monsterColor: state.monsterColor,
    monsterLashes: state.monsterLashes,
    monsterHair: state.monsterHair,
    monsterFur: state.monsterFur,
    monsterHat: state.monsterHat,
    monsterHorn: state.monsterHorn,
    monsterUrl: state.monsterUrl,
    monsterName: state.monsterName,
    showIcons: showIcons,
    showHelp: showHelp,
    startIndex: state.startIndex,
    activeSlideIndex: state.activeSlideIndex,
    goForward,
    goBack,
    setMonsterType,
    setMonsterColor,
    setMonsterLashes,
    setMonsterHair,
    setMonsterFur,
    setMonsterHat,
    setShowIcon,
    setMonsterHorn,
    setMonsterName,
    showHelpGallery,
    setMonsterNameIsValid,
    setStartIndex,
    setActiveSlide,
    setCurrentStep,
  };
}
export default useMonsterCreator;
