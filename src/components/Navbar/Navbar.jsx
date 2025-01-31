import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const menu = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
  )

  return (
    <div className="navbar shadow-sm z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
         
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {menu}
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl" to="/">Gadget Heaven</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu}
        </ul>
      </div>
      <div className="navbar-end flex gap-1.5">
        <a className="btn rounded-full"><CiShoppingCart /></a>
        <a className="btn rounded-full"><FaRegHeart /></a>
      </div>
    </div>
  )
}

export default Navbar;
