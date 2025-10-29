// src/components/AppContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { books, booksData } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [booksData, setBooksData] = useState([]);
  
  // filter using book
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  // Add card button
  const [cart, setCart] = useState([])
  const fetchBooks = async ()=>{
    setBooksData(books)
  }
  const addCart =(book)=>{
    const existingBook = cart.find((item)=>item._id === book._id);
    if(existingBook){
      const updatedCart  =cart.map((item)=>item._id === book._id? {...item, quantity: item.quantity+1}: item);
      setCart(updatedCart);
      toast.success("added the cart")
    }else{
      setCart([...cart, {...book, quantity:1}])
      toast.success("added to cart")
    }
  }
  // remove the cart
 const  removeFromCart = (bookId) =>{
  const updatedCart = cart.map((item)=>item._id === bookId? {
    ...item,quantity: item.quantity-1
  }:item)
  .filter((item)=> item.quantity>0);
  setCart(updatedCart);
  toast.success("remove from cart");
 }
    // update count
   const updateCart =(productId,newQty)=>{
    setCart((prevCart)=>
    prevCart.map((item)=>
    item._id === productId ? {...item, quantity: newQty}:item))
    toast.success("quantity updataed")
   };
   // totle item
   const cartCount  =cart.reduce((total, item)=> total +item.quantity, 0);
   // total cart price
   const totalCartPrice = cart.reduce(( total, item)=>total +item.quantity*item.offerPrice,0)

  useEffect(()=>{
    fetchBooks();
  },[])

  const value = {
    navigate,
    user,
    setUser,
     booksData,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addCart,
    removeFromCart,
    updateCart,
    cartCount,
    totalCartPrice,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
