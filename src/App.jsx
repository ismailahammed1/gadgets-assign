// src/App.js
import React from 'react';
import { ProductProvider } from './components/Context/ProductContext';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { CartProvider } from './components/Context/CartContext';
import { WishlistProvider } from './components/Context/WishlistContex';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider> 
          <RouterProvider router={router} />
          <ToastContainer />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
