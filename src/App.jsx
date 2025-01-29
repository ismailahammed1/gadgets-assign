
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';

import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
