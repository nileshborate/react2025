import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const userList = [
    { id: 1, name: 'Nilesh' },
    { id: 2, name: 'Rahul' },
  ];
  return (
    <>
      <div>Users List</div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}> {user.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
