import React from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import whiteboardWrapperProps from './WhiteboardWrapper.props';

const WhiteboardWrapper = (props) => {
  const generateList = (notes, handleRemove) => (
    <NoteList
      notes={notes}
      onItemRemove={handleRemove}
    />
  );

  const generateLoadingWidget = () => (
    <div> Loading </div>
  );

  return (
    <div className="TodoContainer-wrapper">
      <NoteInput onAdd={props.handleAdd} />
      {
        props.isLoading ?
          generateLoadingWidget() :
          generateList(props.notes, props.handleRemove)
      }
    </div>
  );
};

WhiteboardWrapper.propTypes = whiteboardWrapperProps;

export default WhiteboardWrapper;
