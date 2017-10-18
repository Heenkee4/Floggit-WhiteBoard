import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string,
  text: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default props;
