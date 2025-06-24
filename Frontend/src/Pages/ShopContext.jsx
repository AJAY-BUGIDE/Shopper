import React, { createContext, useState, useEffect } from 'react';
import all_product from '../../../Ecommerce_Assets/Assets/Frontend_Assets/all_product.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  var cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCart] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: Math.max(prevCart[itemId] - 1, 0),
    }));
  };

  const deleteFromCart = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: 0,
    }));
  };
  
  // useEffect(() => {
  //   console.log("Updated cartItems:", cartItems); // ✅ Now logs correct state
  // }, [cartItems]);

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, deleteFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
