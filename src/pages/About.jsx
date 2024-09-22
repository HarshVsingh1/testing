import React from 'react';
import { FaHeadphones, FaPaintBrush, FaTruck, FaCheckCircle, FaGem, FaUsers } from 'react-icons/fa';

const About = () => {
  const services = [
    { icon: <FaHeadphones className="text-3xl text-orange-500" />, title: 'Support Team', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
    { icon: <FaPaintBrush className="text-3xl text-orange-500" />, title: 'Creative Products', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
    { icon: <FaTruck className="text-3xl text-orange-500" />, title: 'Easy Shipment', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
    { icon: <FaCheckCircle className="text-3xl text-orange-500" />, title: 'Quality Control', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
    { icon: <FaGem className="text-3xl text-orange-500" />, title: 'Premium Material', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
    { icon: <FaUsers className="text-3xl text-orange-500" />, title: 'Client Management', description: 'The Indian rupee is the official currency in the Republic of India. The rupee is' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Hirapanna Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">About Hirapanna</h1>
            <h2 className="text-2xl font-semibold mb-4">Learn More about company</h2>
            <p className="mb-6">The Indian rupee is the official currency in the Republic of India. The rupee is subdivided into 100 paise, though as of 2023, coins of denomination of 1 rupee are the lowest value in use.</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              PLAY NOW
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/400" alt="Jewelry hands" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>

        {/* History of Noorani Company Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/400/400" alt="Woman with jewelry" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full transform -rotate-6"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">History of Noorani Company</h2>
            <p className="mb-4">
              The Indian rupee is the official currency in the Republic of India. The rupee is the Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4">{service.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="flex justify-center mb-16">
          <img src="/api/placeholder/300/200" alt="Jewelry 1" className="w-1/3 px-2" />
          <img src="/api/placeholder/300/200" alt="Jewelry 2" className="w-1/3 px-2" />
          <img src="/api/placeholder/300/200" alt="Jewelry 3" className="w-1/3 px-2" />
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/400" alt="Team meeting" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">Say something to start a live chat!</p>
            <div className="mb-2">
              <span className="font-semibold">Phone:</span> +012 3456 789
            </div>
            <div className="mb-2">
              <span className="font-semibold">Email:</span> demo@gmail.com
            </div>
            <div className="mb-4">
              <span className="font-semibold">Address:</span> 132 Dartmouth Street Boston, Massachusetts 02156 United States
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;