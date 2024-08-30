import React from 'react'
import logo from "../assets/logo_ecom.png"
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-900 p-4">
      <div className='flex items-center justify-between'>
        <NavLink to="/">
        <img src={logo} alt="Company Logo" className="w-24 h-auto" />
        </NavLink>

        <NavLink to='/Cart'>
        <FaCartShopping size={24} className="text-white" />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
