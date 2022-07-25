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

  const { currentStep, stepCopy,monsterColor,monsterLashes,monsterNameIsValid, monsterUrl, monsterName,monsterHair,monsterFur,monsterType, monsterHat, monsterHorn, startIndex, activeSlideIndex } = state;

  const lastStep = 4;

  function goForward() {
    if (currentStep + 1 === lastStep && !monsterNameIsValid) {
      return;
    } else if (currentStep + 1 === lastStep && monsterNameIsValid) {
      var node = document.getElementById('my-monster');
      htmlToImage
        .toPng(node)
        .then( (dataUrl) =>  {
          setState((state) => ({
            ...state,
            monsterUrl: dataUrl,
            currentStep: currentStep + 1,
            stepCopy: copy[currentStep],
          }));
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    } else {
      setState((state) => ({
        ...state,
        currentStep: currentStep + 1,
        stepCopy: copy[currentStep],
      }));
    }
  }

  function setMonsterType(id) {
    setState((state) => ({ ...state, monsterType: monsters[id] }));
  }

  function goBack() {
    setState((state) => ({
      ...state,
      currentStep: currentStep - 1,
      stepCopy: copy[currentStep],
    }));
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
  function setCurrentStep(num) {
    setState((state) => ({ ...state, currentStep: num }));
  }

  return {
    monsterType,
    currentStep,
    stepCopy,
    monsterColor,
    monsterLashes,
    monsterHair,
    monsterFur,
    monsterHat,
    monsterHorn,
    monsterUrl,
    monsterName,
    showIcons: showIcons,
    showHelp: showHelp,
    startIndex,
    activeSlideIndex,
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
