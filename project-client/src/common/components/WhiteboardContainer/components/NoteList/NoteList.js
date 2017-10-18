import React from 'react';
import noteListProps from './NoteList.props';
import NoteItem from './components/NoteItem';

const NoteList = (props) => {
  const handleRemove = (id) => () => {
    props.onItemRemove(id);
  };

  return (
    <ul className="NoteList">
      {
        props.notes.map(note => (
          <NoteItem
            animate
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            color={note.color}
            onRemove={handleRemove(note.id)}
          />
        ))
      }
    </ul>
  );
};

NoteList.propTypes = noteListProps;

export default NoteList;
