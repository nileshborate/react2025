import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const List = (props) => {
  return (
    <div className="todo_style">
      <FontAwesomeIcon
        icon={faXmark}
        className="icon_trash"
        onClick={() => {
          props.delete(props.id);
        }}
      />
      <li>{props.text}</li>
    </div>
  );
};

export default List;
