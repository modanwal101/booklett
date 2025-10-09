// src/components/AppContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [booksData, setBooksData] = useState([]);

  // Load books
  // useEffect(() => {
  //   setBooksData(books);
  // }, []);

  const value = {
    navigate,
    user,
    setUser,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
