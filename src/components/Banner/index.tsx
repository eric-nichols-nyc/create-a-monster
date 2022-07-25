import useMonsterCreator from '../../hooks/useMonsterCreator';
import './banner.scss';

export default function Banner() {
  const { currentStep } = useMonsterCreator();
  if(currentStep === -1) return <></>
  return (
    <div className="banner">
      <h1>create-a-monster</h1>
    </div>
  );
}
