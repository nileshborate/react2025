import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [noteList, setNoteList] = useState([]);

  const addNote = (note) => {
    //console.log('Add note called :', note);
    setNoteList((prevData) => {
      return [...prevData, note];
    });
    console.log('Note List : ', noteList);
  };

  const deleteNote = (id) => {
    console.log('id = ', id);
    setNoteList((oldData) => {
      return oldData.filter((obj, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {noteList.map((obj, index) => {
        return (
          <Note
            key={index}
            title={obj.title}
            content={obj.content}
            removeItem={deleteNote}
            id={index}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
