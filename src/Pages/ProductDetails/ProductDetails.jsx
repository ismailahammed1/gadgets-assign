import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router';
import { ProductContext } from '../../components/Context/ProductContext';
import { FaRegHeart } from 'react-icons/fa';

const ProductDetails = () => {
    const { productId } = useParams(); 
    const { products } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const selectedProduct = products.find((p) => p.product_id === productId);
      setProduct(selectedProduct);
    }, [productId, products]);
  
    if (!product) {
      return <div className="text-center text-red-500 text-2xl mt-10">Product not found</div>;
    }
  
    return (
      <div className="w-full mx-auto">
  
        <div className="w-full relative hero bg-gradient-to-r from-[#9e59d6] to-[#9654cc]">
        <div className="hero-overlay h-72 "></div>
        <div className="flex flex-col justify-start text-neutral-content text-center">
          <div className="-mt-28 max-w-xl">
            <h1 className="mb-3 text-3xl font-bold">
            Product Details
            </h1>
            <p className="mb-5">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
    
          </div>
        </div>
      </div>
  
        <div  className="relative  mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg w-5xl mx-auto -mt-36 z-50">
          <div className="flex justify-center items-center">
            <img
              src={product.product_image}
              alt={product.product_name}
              className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
          </div>
  
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{product.product_name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.category}</p>
            </div>

            <p className="text-3xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
  
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-600">({product.rating})</span>
            </div>
  
            <p className="text-gray-700 text-lg">{product.description}</p>
  
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Specifications</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Other Details</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Color:</strong> {product.other.color}</p>
                <p><strong>Weight:</strong> {product.other.weight}</p>
              </div>
            </div>
         <div className='flex gap-1.5'>
         <button className="btn btn-outline btn-secondary rounded-lgtransition duration-300">
              Add to Cart
            </button>
            <button className="btn btn-outline btn-secondary rounded-lgtransition duration-300">
            <FaRegHeart/>
            </button>
         </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;