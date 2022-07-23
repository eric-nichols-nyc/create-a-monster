
const Slide = ({ imgSrc }) => {
  //  console.log(imgSrc);
  return (
    <div
    className="slider__slide">
      <img src={imgSrc} alt='crapola' />
    </div>
  );
};

export default Slide;
