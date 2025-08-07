import { ADD_TODO, DELETE_TODO } from './todoActions';

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Date.now(),
            title: action.payload,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
