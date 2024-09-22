import React from 'react';
import { CiUser ,CiHeart,CiShoppingCart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-[#f2f5f0] border-b-2 border-orange-600 py-1 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-20">

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/"><img src="/photos/logo.png" alt="Logo" className="w-36" /></a>
          
        </div>

        {/* Search Bar Centered */}
        <div className="flex-grow flex justify-center mx-4 lg:mx-0">
        <div className="relative w-full max-w-[500px] ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <CiSearch/>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-10 py-2 border border-gray-700 rounded focus:outline-none focus:border-orange-600 bg-[#f2f5f0]"
          />
        </div>
      </div>


        {/* Icons */}
        <div className="flex items-center gap-6 px-6 font-bold">
          <a href="#" className="relative hover:text-orange-600">
            <CiUser size={20} />
          </a>
          <a href="#" className="relative hover:text-orange-600">
            <CiHeart  size={20} />
            <span className="absolute -top-5 -right-2 bg-orange-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">3</span>
          </a>
          <a href="/cart" className="relative hover:text-orange-600">
            <CiShoppingCart size={20} />
            <span className="absolute -top-5 -right-2 bg-orange-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">5</span>
          </a>
        </div>

      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-sm text-gray-800 font-medium mt-4 justify-center w-full">
        <li>
          <a href="/ProductList" className="hover:text-orange-600 relative group">
            What's New
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-600 relative group">
          Gifting
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/ProductList" className="hover:text-orange-600 relative group">
          Shop By Categories
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/ProductList" className="hover:text-orange-600 relative group">
          Shop By Collection
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/ProductList" className="hover:text-orange-600 relative group">
          Shop By Material
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-600 relative group">
          Blogs
            <span className="block w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
