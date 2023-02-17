/* eslint-disable */
import PropTypes from 'prop-types';

const Display = ({ items }) => {
  const {
    id, image, name, current_price: price,
  } = items;

  return (
    <section className="mainDetails" key={id}>
      <img className="img" src={image} alt={`${name}icon`} />
      <p>{name}</p>
      <p>
        $
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
