import { connect } from 'react-redux';
import WhiteboardWrapper from './WhiteboardWrapper';
import { addNote, removeNote } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes.data,
  isLoading: state.notes.isLoading,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (title, text, color) => {
    dispatch(addNote(title, text, color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
