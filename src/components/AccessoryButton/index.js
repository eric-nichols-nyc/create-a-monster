import PropTypes from 'prop-types';
import useMonsterCreator from '../../hooks/useMonsterCreator';

function AccessoryButton({ copy, callback }) {
  const { showIcons, setShowIcon } = useMonsterCreator();

  return (
    <button
      className="btn btn--rect"
      onClick={() => callback(copy)}
    >
      {showIcons && (
        <div className="accessory_icons_holder">
          {copy === 'eyelashes' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_eyelashes.png' />
          )}
          {copy === 'hair' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hair.png' />
          )}
          {copy === 'hats' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hat.png' />
          )}
          {copy === 'HORNS' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_horn.png' />
          )}
          {copy === 'GLASSES' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hair.png' />
          )}
          {copy === 'FANGS' && (
            <img src='https://watsondg.com/archive/2013/mu-avatar-creator/resources/images/customize/step3/icons/icon_hat.png' />
          )}
        </div>
      )}
      {!showIcons && (
        <div
          className='btn custom_btn'
          onClick={() => setShowIcon(true)}
        >
          {copy}
        </div>
      )}
    </button>
  );
}

AccessoryButton.PpopTypes = {
  copy: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
export default AccessoryButton;
