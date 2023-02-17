/* eslint-disable */
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../CSSmodule/display.css';

const Display = ({ items }) => {
  const {
    id, image, name, current_price: price,
  } = items;

  return (
    <section className="details" key={id}>
      <BsArrowRightCircle />
      <img className="img" src={image} alt={`${name}icon`} />
      <p className='headText' >{name}</p>
      <p>
        Price: $
        {price}
      </p>
    </section>
  );
};

Display.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  current_price: PropTypes.number,
}.isRequired;

export default Display;
