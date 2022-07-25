import PropTypes, { arrayOf } from 'prop-types';

function SliderContent({ children, translate, transition, width, image }) {
  console.log(image)
  return <div className='slider_content'>
    <img src={image.url} />
  </div>;
}
SliderContent.propTypes = {
  children: arrayOf(PropTypes.node).isRequired,
};
export default SliderContent;
