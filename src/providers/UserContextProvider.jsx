"use client"
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState();
  
  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("expirationTime");
    setUser(null);
  };
  const login=(data)=>{
    localStorage.setItem("user", JSON.stringify(data));
    const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 100;
    localStorage.setItem("expirationTime", expirationTime);
    setUser(data)
  }
  useEffect(() => {
    const initialState = localStorage?.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
      setUser(initialState)
  }, []);
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserContextProvider");
  return context;
};
