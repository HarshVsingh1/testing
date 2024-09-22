import React, { useState, useEffect } from 'react';
import productsData from '../products.json'; // Assuming JSON is in the root directory

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // On component mount, load data from the JSON file
  useEffect(() => {
    setCartItems(productsData);
  }, []);

  // Function to increase the quantity of a product
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Function to decrease the quantity of a product
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex flex-col items-start">
              <h3 className="font-medium text-lg">{item.name}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg">Qty {item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <span className="mt-2 text-xl font-semibold text-gray-800">₹{item.price * item.quantity}</span>
            </div>
            <button
              className="text-red-600 hover:underline"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <div className="text-right">
          <h3 className="text-xl font-bold">Subtotal: ₹{calculateSubtotal()}</h3>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Checkout
          </button>
          <a
            href="/shop"
            className="block mt-2 text-blue-600 hover:underline"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
