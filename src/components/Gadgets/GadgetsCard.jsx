import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

const GadgetsCard = ({ selectedCategory }) => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredProducts.map((product) => (
        <div key={product.product_id} className="p-4 rounded-lg shadow-lg flex flex-col">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mt-2">{product.product_name}</h2>
          <p className="text-gray-600 flex-1">{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
          <Link
            to={`/product/${product.product_id}`}
            className="mt-4 btn btn-outline btn-secondary text-center"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GadgetsCard;
