import ImageSlider from '../ImageSlider'
import ImageData from '../../data/ImageData'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import './help.scss';

export default function Help() {
  const { showHelp, currentStep } = useMonsterCreator()

  return showHelp ? (
    <div className="overlay">
      <ImageSlider
        data={ImageData}
        width={500}
        height={280}
        type="help"
        closeButton={true}
        startIndex={currentStep}
      />
    </div>
  ) : null
}
