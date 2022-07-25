import PropTypes from 'prop-types'

function Arrow({ direction, handleClick }) {
  return (
    <div
    className={`arrow ${direction === 'right' && 'right'}`}
      onClick={handleClick}
    >
      {direction === 'right' ? (
        <img src='./images/right-arrow.svg' />
      ) : (
        <img src='./images/left-arrow.svg' />
      )}
    </div>
  )
}
Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
export default Arrow
