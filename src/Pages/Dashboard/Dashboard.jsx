import React, { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { WishlistContext } from "../../components/Context/WishlistContex";

const Dashboard = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [view, setView] = useState("cart"); // State to switch between cart and wishlist view
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order for price: "asc" or "desc"

  const handleToggleView = (view) => {
    setView(view);
  };

  const handleSortByPrice = () => {
    const sortedCart = [...cartItems].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    // This updates the cartItems array with the sorted items
    // If you want to preserve the sorting in the context, you'll need to update it in the context provider
    return sortedCart;
  };

  const handlePurchase = () => {
    // Simulate purchase action
    alert("Thank you for your purchase!");
    // Optionally, clear the cart or redirect the user to another page
    // clearCart(); or navigate("/thank-you");
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="w-full mx-auto">
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
                onClick={() => handleToggleView("cart")}
                className={`btn rounded-full ${
                  view === "cart" ? " text-[#aa41ff] " : "btn-outline "
                }`}
              >
                View Cart
              </button>
              <button
                onClick={() => handleToggleView("wishlist")}
                className={`btn rounded-full ${
                  view === "wishlist" ? " text-[#9f2efc]" : "btn-outline "
                }`}
              >
                View Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {view === "cart" ? (
        <div>
          <div className="flex justify-between mt-5">
            
          <h2 className="text-2xl font-bold mb-4"> Cart</h2>
          <div className="flex justify-end gap-5 mb-4">
            <span className=" text-xl mt-2 font-bold flex gap-2">Total cost: ${calculateTotalCost()}</span>
            <button className="btn border-[#aa41ff] rounded-full" onClick={handleSortByPrice}>
              Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
            <button onClick={handlePurchase} className="w-24 bg-gradient-to-r from-[#aa41ff] via-[#ed33f3] to-[#e260f3] hover:from-[#8a2be2] hover:via-[#c71585] hover:to-[#ff1493] text-white rounded-full transition-all duration-300">
  Purchase
</button>
          </div>
          </div>
          
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-md flex items-center space-x-4"
                >
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
          {cartItems.length > 0 && (
            <button onClick={handlePurchase} className="btn btn-primary mt-4">
              Purchase
            </button>
          )}
        </div>
      ) : (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-4"> Wishlist</h2>
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <ul className="space-y-4">
              {wishlistItems.map((item, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-md flex items-center space-x-4"
                >
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
    </div>
  );
};

export default Dashboard;
