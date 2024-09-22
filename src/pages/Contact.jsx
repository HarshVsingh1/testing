import React from 'react';
import { CiPhone ,CiLocationOn} from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 flex justify-center items-center py-8 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg">
        {/* Left Side - Contact Information */}
        <div
          className="w-full md:w-1/2 p-8 bg-cover bg-center rounded-l-lg text-white"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(124, 45, 18, 0.6), rgba(124, 45, 18,0.9)), url("/photos/ContactUs-1.png")', }} 
        >
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2">Say something to start a live chat!</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="material-icons"><CiPhone /></span>
              <p>+1012 3456 789</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="material-icons"><MdOutlineMail /></span>
              <p>demo@gmail.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="material-icons"><CiLocationOn /></span>
              <p>
                132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
              </p>
            </div>
          </div>

          <div className="flex mt-6 space-x-4">
            {/* Social Icons */}
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="+1 012 3456 789"
                />
              </div>
            </div>

            {/* Select Subject */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Select Subject?</label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="general-inquiry-1"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
                    defaultChecked
                  />
                  <label htmlFor="general-inquiry-1" className="ml-2 block text-sm text-gray-700">
                    General Inquiry
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="general-inquiry-2"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
                  />
                  <label htmlFor="general-inquiry-2" className="ml-2 block text-sm text-gray-700">
                    General Inquiry
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="general-inquiry-3"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
                  />
                  <label htmlFor="general-inquiry-3" className="ml-2 block text-sm text-gray-700">
                    General Inquiry
                  </label>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Write your message.."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-md shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
