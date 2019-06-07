import PropTypes from 'prop-types';

const productShape = PropTypes.shape({
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.quantity,
  size: PropTypes.size,
  description: PropTypes.string,
});

export default productShape;