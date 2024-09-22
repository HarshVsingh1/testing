import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex justify-between items-center px-10 py-12 bg-white border-t border-gray-300">
      
      {/* Contact Information Section */}
      <div className="flex flex-col items-center space-y-4 w-1/3">
        {/* Top curved line (can use an image or custom SVG later) */}
        <div className="w-16 h-1 mb-4 border-t-2 border-gray-300 rounded-full"></div>
        <h3 className="text-gray-600 text-lg">
          <a href="/contact">Contact Us</a></h3>
        <p className="text-gray-500 text-sm text-center">
          Working Hours Monday to <br />
          Saturday 9:00am to 6:30pm
        </p>
        <p className="text-black font-semibold text-lg">+91-9999999999</p>
      </div>

      {/* Divider */}
      <div className="border-l-2 border-gray-300 h-40 mx-10"></div>

      {/* Sign-up Form Section */}
      <div className="flex flex-col items-center space-y-4 text-center max-w-sm w-1/3">
        <h2 className="text-orange-700 text-3xl font-semibold">Let's Get in Touch</h2>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className="flex border border-gray-400 rounded-md overflow-hidden w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 text-gray-700 w-full focus:outline-none"
          />
          <button className="bg-orange-800 text-white px-6 py-2">SIGN UP</button>
        </div>
        <p className="text-gray-500 text-xs">I Accept Privacy Policy and Cookies Policy</p>
      </div>

      {/* Divider */}
      <div className="border-l-2 border-gray-300 h-40 mx-10"></div>

      {/* Social Media Section */}
      <div className="flex flex-col items-center space-y-4 w-1/3">
        {/* Top curved line (can use an image or custom SVG later) */}
        <div className="w-16 h-1 mb-4 border-t-2 border-gray-300 rounded-full"></div>
        <h3 className="text-gray-600 text-lg">FOLLOW US ON SOCIAL MEDIA</h3>
        <div className="flex space-x-4">
          <FaInstagram className="text-gray-700 hover:text-orange-600" />
          <FaFacebookF className="text-gray-700 hover:text-orange-600" />
          <FaTwitter className="text-gray-700 hover:text-orange-600" />
          <FaYoutube className="text-gray-700 hover:text-orange-600" />
          <FaPinterest className="text-gray-700 hover:text-orange-600" />
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
