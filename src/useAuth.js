// useAuth.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  const login = (email, password) => {
    setCurrentUser({ email });
  };

  const register = (email, password) => {
    setUsers((prevUsers) => [...prevUsers, { email, password }]);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    users,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
