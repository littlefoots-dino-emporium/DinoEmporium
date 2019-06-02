import PropTypes from 'prop-types';

const propFenceShape = PropTypes.shape({
  image: PropTypes.string,
  structure: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
});

export default propFenceShape;