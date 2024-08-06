import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: "", name: "" });

  const createUser = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
