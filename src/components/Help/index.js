import SingleImageSlider from '../SingleImageSlider';
import ImageData from '../../data/ImageData';
import useMonsterCreator from '../../hooks/useMonsterCreator';
import './help.scss';

export default function Help() {
  const { showHelp, currentStep } = useMonsterCreator();

  return showHelp ? (
    <div className='overlay'>
      <SingleImageSlider
        data={ImageData}
        width={500}
        height={280}
        type='help'
        closeButton={true}
        startIndex={currentStep}
      />
    </div>
  ) : null;
}
