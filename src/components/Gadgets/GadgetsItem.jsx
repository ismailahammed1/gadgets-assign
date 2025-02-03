import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { toast } from 'react-toastify';

const GadgetsItem = ({ productId }) => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const product = products.find((p) => p.product_id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast.success(`${product.product_name} has been added to the cart!`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.product_image} alt={product.product_name} className="w-full h-64 object-cover" />
      <h2 className="text-2xl font-semibold mt-2">{product.product_name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Specifications</h3>
        <ul className="list-disc list-inside">
          {product.specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GadgetsItem;
