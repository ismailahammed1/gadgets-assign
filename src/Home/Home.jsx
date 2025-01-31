// src/Home/Home.jsx
import React from 'react';
import Header from '../components/Header/Header';
import GadgetsNav from '../components/Gadgets/GadgetsNav';
import GadgetsCard from '../components/Gadgets/GadgetsCard';


const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <GadgetsNav />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">Explore Cutting-Edge Gadgets</h1>
          <GadgetsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;