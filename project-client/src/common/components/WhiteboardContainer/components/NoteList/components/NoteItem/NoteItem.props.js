import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default props;
