import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

// Import JSON data directly
import productsData from '../products.json';
import featuredProductsData from '../featuredProducts.json';

const ProductList = () => {
  const [products] = useState(productsData);
  const [featuredProducts] = useState(featuredProductsData);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true); // Open cart when product is added
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="relative h-64 mb-8">
        <img src="/photos/productlist1.png" alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h1 className="text-white text-4xl font-bold mb-2">New Arrival</h1>
          <h2 className="text-white text-2xl mb-4">Shop Chain</h2>
          <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="bg-white text-black px-4 py-2 rounded">Shop Now</button>
        </div>
      </div>

      {/* Sidebar and Products */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          {/* Categories */}
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Necklaces</li>
            <li>Pendants</li>
            <li>Wedding Special</li>
          </ul>

          {/* Price Filter */}
          <h3 className="font-bold text-lg mt-8 mb-4">Price</h3>
          <input type="range" min="0" max="100" className="w-full" />

          {/* Featured Products */}
          <h3 className="font-bold text-lg mt-8 mb-4">Feature Products</h3>
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm">
                    <span className="text-gray-500 line-through">₹{product.price}</span>{' '}
                    <span className="text-black">₹{product.price * (1 - product.discount / 100)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Products Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p>Showing 1–{products.length} of {products.length} results</p>
            <div className="flex items-center space-x-2">
              <button className="border px-2 py-1 rounded flex items-center">
                Default sorting <ChevronDown className="ml-1" size={16} />
              </button>
              <button className="border px-2 py-1 rounded">☰</button>
              <button className="border px-2 py-1 rounded">☷</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Sale!</span>
                  )}
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm">
                      <span className="text-gray-500 line-through">₹{product.price}</span>{' '}
                      <span className="text-black">₹{product.price * (1 - product.discount / 100)}</span>
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Dialog */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-80 bg-white h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
            </div>

            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 mx-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                  </div>
                ))}

                <div className="mt-4">
                  <h3 className="text-lg font-bold">Total: ₹{calculateTotal()}</h3>
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-2">Checkout</button>
                </div>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
