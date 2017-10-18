import React from 'react';
import noteInputProps from './NoteInput.props';
import './NoteInput.css';

const NoteInput = (props) => {
  let title;
  let textItem;

  const handleAddClick = () => {
    props.onAdd(title.value, textItem.value, 'yellow');
    title.value = '';
    textItem.value = '';
    title.focus();
  };

  return (
    <form className={'NoteInput'}>
      <input
        type="text"
        defaultValue={props.title || ''}
        ref={(currentElement) => { title = currentElement; }}
        placeholder="title"
      />
      <input
        defaultValue={props.text || ''}
        type="text"
        ref={(currentElement) => { textItem = currentElement; }}
        placeholder="text"
      />
      <button
        type="button"
        onClick={handleAddClick}
      >
          Add note
      </button>
    </form>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
