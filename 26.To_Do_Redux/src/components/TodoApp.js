import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/todoActions';

const TodoApp = () => {
  const todos = useSelector((state) => state.todo.todoList);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  console.log('List = ', todos);
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Classic Regux Todo App</h2>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        style={{ padding: '8px', width: '70%' }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ padding: '8px' }} onClick={handleAddTodo}>
        Add
      </button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.title}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{
                marginLeft: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
