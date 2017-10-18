import notesAPI from '../../utils/notesAPI';

// ACTIONS
const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_UPDATE = 'NOTE_UPDATE';
const NOTE_LIST_REPLACE = 'NOTE_LIST_REPLACE';
const NOTE_LOADING = 'NOTE_LOADING';
const NOTE_LOADED = 'NOTE_LOADED';

const initialState = {
  data: [],
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const newNotes = [...state.data, action.data];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_REMOVE: {
      const newNotes = state.data.filter(note => note.id !== action.data.id);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_UPDATE: {
      const newNotes = state.data.map(note => note.id === action.data.id);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LIST_REPLACE: {
      const newNotes = [...action.data.notes];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case NOTE_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddNote = (id, title, text, color) => ({
  type: NOTE_ADD,
  data: {
    id,
    title,
    text,
    color,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalReplaceAllNotes = notes => ({
  type: NOTE_LIST_REPLACE,
  data: {
    notes,
  },
});

const internalLoadingNotes = () => ({
  type: NOTE_LOADING,
});

const internalLoadedNotes = () => ({
  type: NOTE_LOADED,
});

// Redux thunk action creator
// This is needed to work with async api's
// for example your webservice.
// A redux thunk action creator is a double arrow function.
// The second part of the function is executed by redux thunk middleware
// It is given the stores dispatcher and it can also recieve
// the getState function if you need to know the current store state.

const addNote = (title, text, color) => dispatch => notesAPI.add(title, text, color)
  .then((id) => {
    dispatch(internalAddNote(id, title, text, color));
  });

const removeNote = id => dispatch => notesAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveNote(id));
  });

const loadNotes = () => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.getAll()
    .then((notes) => {
      dispatch(internalReplaceAllNotes(notes));
      dispatch(internalLoadedNotes());
    })
    .catch(() => {
      dispatch(internalLoadedNotes());
    });
};

export { addNote, removeNote, loadNotes };
export default reducer;
