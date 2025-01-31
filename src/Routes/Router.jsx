
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPage from '../components/Error/ErrorPage';
import Statistics from '../Pages/Statistics/Statistics';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: '/product/:productId', 
        element: <ProductDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics /> 
      },
      {
        path: "/dashboard",
        element: <Dashboard/> 
      },
    ],
  },
]);


export default router;
