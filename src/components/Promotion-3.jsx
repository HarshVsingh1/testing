import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: 'DIAMOND CRISTRIAL STUD',
    image: '/api/placeholder/300/300',
    price: 3000,
    originalPrice: 5000,
    discount: '50% OFF',
    isNew: true
  },
  {
    id: 2,
    name: 'DIAMOND CRISTRIAL STUD',
    image: '/api/placeholder/300/300',
    price: 3000,
    originalPrice: 5000,
    discount: '50% OFF'
  },
  {
    id: 3,
    name: 'DIAMOND CRISTRIAL STUD',
    image: '/api/placeholder/300/300',
    price: 3000,
    originalPrice: 5000,
    discount: '50% OFF'
  },
  {
    id: 4,
    name: 'DIAMOND CRISTRIAL STUD',
    image: '/api/placeholder/300/300',
    price: 3000,
    originalPrice: 5000,
    discount: '50% OFF'
  }
];

const Promotion3 = () => {
  return (
    <div className="font-garamond p-4">
      {/* Header */}
      <div className="relative my-8 font-garamond">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-2 w-full">
            <div className="flex-grow h-[1px] bg-gradient-to-l from-gray-600 to-transparent"></div>
            <IoDiamondOutline className="text-gray-500 mx-3" />
            <div className="flex-grow h-[1px] bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <h2 className="text-4xl bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent pb-3">
            Shop By Category
          </h2>
          <p className="text-sm text-orange-900 font-semibold">OUR EVERYDAY PIECES</p>
        </div>
        <a href="/ProductList" className="absolute bottom-0 right-5 text-orange-600 hover:underline mt-2">
          VIEW ALL
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-brown-600 text-white text-xs px-2 py-1">
                NEW
              </span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-2" />
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-sm text-orange-600 font-semibold">{product.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default Promotion3;