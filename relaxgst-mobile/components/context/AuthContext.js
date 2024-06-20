import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Login logic here
    setUser({ email });
  };

  const register = (email, password) => {
    // Registration logic here
    setUser({ email });
  };

  const updateUser = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
