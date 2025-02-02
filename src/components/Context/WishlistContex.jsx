
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {

    if (!wishlistItems.some(item => item.product_id === product.product_id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.product_id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
