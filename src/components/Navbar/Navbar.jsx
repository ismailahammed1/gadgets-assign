import React from 'react'

const Navbar = () => {
  const menu=<>
    <li><a>Home</a></li>
    <li>
      <a>Statistics</a>
    </li>
    <li><a>Dashboard</a></li>

  </>
  return (
<div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menu}
    </ul>
  </div>
  <div className="navbar-end flex">
    <a className="btn">d</a>
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar