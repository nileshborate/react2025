import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Nilesh' });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
