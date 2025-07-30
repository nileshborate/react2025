import React, { useState, useRef, useEffect } from 'react';

const Example3 = () => {
  const chatEndRef = useRef(null);
  const [messages, setMessages] = useState([
    'Hello 👋',
    'How are you?',
    'This is a chat box example!',
  ]);

  const addMessage = () => {
    setMessages((prev) => [...prev, `New Message ${prev.length + 1}`]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <>
      <div
        style={{
          height: '200px',
          width: '300px',
          border: '1px solid #ccc',
          overflowY: 'auto',
          padding: '10px',
        }}
      >
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}

        <div ref={chatEndRef} />
      </div>
      <button onClick={addMessage}>Add Message</button>
    </>
  );
};

export default Example3;
