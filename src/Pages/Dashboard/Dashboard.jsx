import React, { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { WishlistContext } from "../../components/Context/WishlistContex";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { cartItems,  removeFromCart } = useContext(CartContext);
  const { wishlistItems,  removeFromWishlist } =
    useContext(WishlistContext);

  const [view, setView] = useState("cart");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotalCost = () => {
    if (!Array.isArray(cartItems)) {
      console.error("cartItems is not an array");
      return 0.00; 
    }
  
  
    const total = cartItems.reduce((total, item) => {
      const price = item.price || 0; 
      const quantity = item.quantity || 1;  
  
      return total + price * quantity;
    }, 0);
  
    return total.toFixed(2); 
  };
  



  const handleCancelPurchase = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="w-full relative hero bg-gradient-to-r from-[#aa41ff] to-[#aa41ff]">
        <div className="hero-overlay h-72"></div>
        <div className="flex flex-col justify-start text-neutral-content text-center">
          <div className="-mt-28 max-w-xl">
            <h1 className="mb-3 mt-5 text-3xl font-bold">Dashboard</h1>
            <p className="m-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setView("cart")}
                className={`btn rounded-full ${view === "cart" ? "text-[#aa41ff]" : "btn-outline"}`}
              >
                View Cart
              </button>
              <button
                onClick={() => setView("wishlist")}
                className={`btn rounded-full ${view === "wishlist" ? "text-[#9f2efc]" : "btn-outline"}`}
              >
                View Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart or Wishlist View */}
      {view === "cart" ? (
        <div>
          <div className="flex justify-between mt-5">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <div className="flex justify-end gap-5 mb-4">
              <span className="text-xl mt-2 font-bold flex gap-2">
              Total cost: ${calculateTotalCost()}
              </span>
              <button
                onClick={() => setIsModalOpen(true)} // Open the confirmation modal
                className="w-24 bg-gradient-to-r from-[#aa41ff] via-[#ed33f3] to-[#e260f3] hover:from-[#8a2be2] hover:via-[#c71585] hover:to-[#ff1493] text-white rounded-full transition-all duration-300"
              >
                Purchase
              </button>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className="text-lg font-bold">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    className="btn btn-danger ml-auto"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <ul className="space-y-4">
              {wishlistItems.map((item, index) => (
                <li key={index} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className="text-lg font-bold">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.product_id)}
                    className="btn btn-danger ml-auto"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>
            <p className="mb-4">Total Amount: ${calculateTotalCost()}</p>
            <div className="flex justify-between">
            
              <button
                onClick={handleCancelPurchase}
                className="btn bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      <ToastContainer />
    </div>
  );
};

export default Dashboard;
