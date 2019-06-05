import PropTypes from 'prop-types';

const customerShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
})

export default customerShape;
