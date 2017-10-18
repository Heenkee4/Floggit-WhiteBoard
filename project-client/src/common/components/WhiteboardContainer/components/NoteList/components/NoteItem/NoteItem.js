import React from 'react';
import noteItemProps from './NoteItem.props';
import './NoteItem.css';
import NoteInput from '../../../NoteInput';

const NoteItem = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };
  console.log(props);

  const animateClass = props.animate ? 'added-item' : '';
  return (
    <li className={`NoteItem-item ${animateClass}`}>
      <div className="NoteItem-value">
        {props.title}<br />
        {props.text}
      </div>
      <button onClick={remove}>
      X
      </button>
      <NoteInput title={props.title} text={props.text} onAdd={(data) => { console.log('update', data); }} />
    </li>
  );
};

NoteItem.propTypes = noteItemProps;

export default NoteItem;
