// src/App.js
import React from 'react';
import { ProductProvider } from './components/Context/ProductContext';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';


function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;