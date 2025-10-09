// src/components/AppContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { books, booksData } from "../assets/assets";


export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [booksData, setBooksData] = useState([]);

  const fetchBooks = async ()=>{
    setBooksData(books)
  }

  useEffect(()=>{
    fetchBooks();
  },[])

  const value = {
    navigate,
    user,
    setUser,
     booksData,

    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
