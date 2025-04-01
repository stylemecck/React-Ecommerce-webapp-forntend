import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { FaCaretDown } from 'react-icons/fa';
import { HiMiniShoppingBag } from "react-icons/hi2";

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Top Rated', link: '/#Services' },
  { id: 3, name: 'Kids Collection', link: '/#Products' },
  { id: 4, name: 'Mens Collection', link: '/#Products' },
];

const Dropdown = [
  { id: 1, name: 'T-Shirts', link: '/#' },
  { id: 2, name: 'Shirts', link: '/#Services' },
  { id: 3, name: 'Pants', link: '/#Products' },
  { id: 4, name: 'Shoes', link: '/#Products' },
  { id: 5, name: 'Contact Us', link: '/#' },
];

const Navbar = ({ handelOrderPopup }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
          <HiMiniShoppingBag size={30} className="text-[#4263eb]" />
          <span className="ml-2">Luna Sparrow</span>
        </a>

        {/* Search Bar */}
        <div className="relative hidden sm:block group">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 sm:w-56 h-10 px-4 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4263eb] transition-all duration-200 group-hover:w-64"
          />
          <IoMdSearch className="absolute text-gray-600 -translate-y-1/2 cursor-pointer dark:text-white top-1/2 right-3" />
        </div>

        {/* Cart Button */}
        <div
          className="relative"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          <button
            onClick={handelOrderPopup}
            className="px-4 py-2 text-white transition-transform duration-200 bg-gradient-to-r from-[#4263eb] to-[#63e6be] rounded-full flex items-center gap-2 group hover:scale-105 cursor-pointer"
          >
            <span className="hidden transition-all duration-200 group-hover:block">Cart</span>
            <FiShoppingBag size={24} className="drop-shadow-sm" />
          </button>
          {showCart && (
            <div className="absolute right-0 w-64 p-4 mt-2 text-black bg-white rounded-md shadow-lg dark:bg-gray-800 dark:text-white">
              <p className="text-sm">Your cart is empty.</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-t">
        <ul className="justify-center hidden gap-6 py-3 text-sm font-semibold sm:flex">
          {Menu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="transition-colors duration-200 hover:text-[#4263eb]">
                {item.name}
              </a>
            </li>
          ))}
          {/* Dropdown Menu for Large Screens */}
          <li className="relative hidden group sm:block">
            <a href="#" className="flex items-center gap-1 transition-all hover:text-[#4263eb]">
              Trending Products <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute left-0 z-50 hidden w-48 p-2 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800 group-hover:block">
              <ul>
                {Dropdown.map((item) => (
                  <li key={item.id} className="p-2 transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href={item.link} className="block text-sm font-semibold">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        {/* Scrollable Navigation Menu for Small Devices */}
        <div className="overflow-x-auto border-t sm:hidden whitespace-nowrap scrollbar-hide">
          <ul className="flex justify-start gap-6 px-4 py-3 text-sm font-semibold">
            {Menu.map((item) => (
              <li key={item.id} className="shrink-0">
                <a href={item.link} className="transition-colors duration-200 hover:text-[#4263eb]">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
