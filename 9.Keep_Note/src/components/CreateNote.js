import React, { useState } from 'react';

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const insertNote = (event) => {
    event.preventDefault();
    props.passNote(note);
    //console.log(note);
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={InputEvent}
          />
          <textarea
            placeholder="Write a note...."
            name="content"
            value={note.content}
            onChange={InputEvent}
          ></textarea>
          <button className="add-button" onClick={insertNote}>
            <span className="plus_sign">+</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
