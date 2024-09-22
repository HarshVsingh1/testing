import React, { useState } from 'react';
import { FaShare, FaHeart } from 'react-icons/fa';

const ProductDescriptionPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('2-4');

  const relatedProducts = [
    { id: 1, name: 'DIAMOND CRYSTAL STUD', price: 5000, oldPrice: 6000, imgSrc: '/api/placeholder/250/250', colors: ['green', 'red'] },
    { id: 2, name: 'DIAMOND CRYSTAL STUD', price: 5000, oldPrice: 6000, imgSrc: '/api/placeholder/250/250', colors: ['blue', 'lightblue'] },
    { id: 3, name: 'DIAMOND CRYSTAL STUD', price: 5000, oldPrice: 6000, imgSrc: '/api/placeholder/250/250', colors: ['orange'] },
    { id: 4, name: 'DIAMOND CRYSTAL STUD', price: 5000, oldPrice: 6000, imgSrc: '/api/placeholder/250/250' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row mb-16">
        {/* Product Images */}
        <div className="md:w-1/2 pr-8">
          <div className="flex">
            <div className="w-1/5 pr-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <img key={index} src="/api/placeholder/80/80" alt={`Thumbnail ${index}`} className="mb-4 cursor-pointer" />
              ))}
            </div>
            <div className="w-4/5">
              <img src="/api/placeholder/500/500" alt="Large Charlotte Hoops" className="w-full" />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">SKU: AGA14565GAS</span>
            <FaShare className="text-gray-500 cursor-pointer" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Large Charlotte Hoops</h1>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2">₹3,000</span>
            <span className="text-gray-500 line-through">₹3,500</span>
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">SIZE: {selectedSize}</label>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            >
              <option value="2-4">Choose an option</option>
              <option value="4-6">4-6</option>
              <option value="6-8">6-8</option>
            </select>
          </div>
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="border border-gray-300 px-3 py-1"
            >
              -
            </button>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="border-t border-b border-gray-300 w-16 text-center py-1"
            />
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="border border-gray-300 px-3 py-1"
            >
              +
            </button>
            <button className="ml-4 bg-brown-500 text-white px-6 py-2 rounded">
              ADD TO CART
            </button>
            <FaHeart className="ml-4 text-gray-500 cursor-pointer" />
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded mb-6">
            BUY NOW
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-semibold">Material</td>
              <td className="py-2">Silver</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Color</td>
              <td className="py-2">Silver,Gold</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Size</td>
              <td className="py-2">43mm x 41mm x 15mm</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Weight</td>
              <td className="py-2">0.025 Kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={product.imgSrc} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">₹{product.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through ml-2">₹{product.oldPrice.toLocaleString()}</span>
                  </div>
                  {product.colors && (
                    <div className="flex">
                      {product.colors.map((color, index) => (
                        <div key={index} className={`w-4 h-4 rounded-full ml-1 bg-${color}-500`}></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;