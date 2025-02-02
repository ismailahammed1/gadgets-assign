import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const GadgetsNav = ({ onCategorySelect }) => {
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <div>No categories available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4 bg-[#9538e2] rounded-full p-4">
        All Categories
      </h2>
      <ul className="menu bg-base-200 w-56">
        {categories.length === 0 ? (
          <div>No categories available</div>
        ) : (
          categories.map((category, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => handleCategoryClick(category)}
                className="hover:text-[#9538e2] rounded"
                aria-label={`Select ${category} category`}
              >
                {category}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GadgetsNav;
