import useMonsterCreator from '../../hooks/useMonsterCreator';
import './background.scss';

export default function Background() {
  const { currentStep } = useMonsterCreator();

  return (
    <div
    className="background">
      <div
      className="background__number">
        {`0${currentStep + 1}`}
      </div>
    </div>
  );
}
