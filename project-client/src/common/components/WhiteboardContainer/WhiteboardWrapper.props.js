import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default props;
