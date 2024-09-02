import React from 'react';
import logo from '../assets/logo_ecom.png';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="bg-gray-900 p-4">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="w-24 h-auto" />
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/Cart" className="text-white relative">
            <FaCartShopping size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
