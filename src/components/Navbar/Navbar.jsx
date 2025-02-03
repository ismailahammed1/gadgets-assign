import React, { useContext, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../../components/Context/CartContext"; // Import CartContext
import { WishlistContext } from "../Context/WishlistContex";

const Navbar = () => {
  const { cartItems } = useContext(CartContext); 
  const cartCount = cartItems.length;
  const { wishlistItems } = useContext(WishlistContext);
  const wishlistCount = wishlistItems.length;

  const location = useLocation(); 

  const isHomePage = location.pathname === "/"; 
  const navbarBackground = isHomePage ? "bg-[#83169e] rounded-t-3xl" : "";
  useEffect(() => {
    const path = location.pathname;
    
    if (path === "/") {
      document.title = "Home - Gadget Heaven";
    } else if (path === "/dashboard") {
      document.title = "Dashboard - Gadget Heaven";
    } else if (path === "/statistics") {
      document.title = "Statistics - Gadget Heaven";
    }
  }, [location]);

  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar shadow-sm z-20 ${navbarBackground}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl" to="/">
          Gadget Heaven
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>

      <div className="navbar-end flex gap-1.5">
        <button className="btn rounded-full relative">
          <CiShoppingCart />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button className="btn rounded-full relative">
          <FaRegHeart />
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
