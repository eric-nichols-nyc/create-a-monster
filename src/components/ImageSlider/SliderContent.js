import PropTypes, { arrayOf } from 'prop-types';

function SliderContent({ children, translate, transition, width }) {
  return <div className='slider_content'>{children}</div>;
}
SliderContent.propTypes = {
  children: arrayOf(PropTypes.node).isRequired,
};
export default SliderContent;
