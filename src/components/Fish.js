import PropTypes from 'prop-types';
import { formatPrice } from '../utils';

const Fish = ({
  addToOrder,
  index,
  details: { name, image, price, desc, status },
}) => {
  const isAvailable = status === 'available';

  // const handleClick = () => {
  //   addToOrder(index);
  // };

  return (
    <li className="menu-fish">
      <img src={process.env.PUBLIC_URL + image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        disabled={!isAvailable}
        type="button"
        onClick={() => addToOrder(index)}
      >
        {isAvailable ? 'Add To Cart' : 'Sold Out!'}
      </button>
    </li>
  );
};

Fish.propTypes = {
  addToOrder: PropTypes.func,
  index: PropTypes.string,
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Fish;
