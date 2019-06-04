import PropTypes from 'prop-types';

const sweaterShape = PropTypes.shape ({
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.money,
  quantity: PropTypes.quantity,
});

export default sweaterShape;