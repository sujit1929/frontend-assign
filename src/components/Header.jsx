'use client';

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const { cartItems } = useContext(CartContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const totalItemsInCart = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center rounded-lg m-4 relative">
      <div className="text-2xl font-bold text-blue-600">MyStore</div>

      <nav className="hidden md:block">
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="/products/1" className="text-gray-700 hover:text-blue-600 font-medium">
              Product 1
            </a>
          </li>
          <li>
            <a href="/products/2" className="text-gray-700 hover:text-blue-600 font-medium">
              Product 2
            </a>
          </li>
          <li className="relative cursor-pointer" onClick={() => router.push('/cart')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
                   0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 
                   11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItemsInCart}
            </span>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X className="h-7 w-7 text-gray-700" /> : <Menu className="h-7 w-7 text-gray-700" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-2 p-4 md:hidden z-50">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/products/1" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                Product 1
              </a>
            </li>
            <li>
              <a href="/products/2" className="block text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                Product 2
              </a>
            </li>
            <li
              className="relative cursor-pointer flex items-center gap-2"
              onClick={() => {
                router.push('/cart');
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 
                     1.707.707 1.707H17m0 0a2 2 0 
                     100 4 2 2 0 000-4zm-8 2a2 2 0 
                     11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
