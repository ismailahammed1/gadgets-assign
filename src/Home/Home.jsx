import React, { useState } from 'react';
import GadgetsCard from '../components/Gadgets/GadgetsCard';
import GadgetsNav from '../components/Gadgets/GadgetsNav';
import Header from '../components/Header/Header';


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
<div>
<Header />
<div className="flex">
      <GadgetsNav onCategorySelect={handleCategorySelect} />
      <div className="flex-1">
        <GadgetsCard selectedCategory={selectedCategory} />
      </div>
    </div>
</div>
  );
};

export default Home;
