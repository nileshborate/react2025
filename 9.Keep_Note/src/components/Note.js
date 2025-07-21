import React from 'react';

const Note = (props) => {
  const eraseNote = () => {
    props.removeItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={eraseNote}>
          <span className="deleteIcon">Delete</span>
        </button>
      </div>
    </>
  );
};

export default Note;
