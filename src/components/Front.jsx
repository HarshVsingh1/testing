import React from 'react'
import { useNavigate } from 'react-router-dom';

const Front = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: 'url("/photos/MainPage-1.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent opacity-100  to-white opacity-100"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold text-orange-900 uppercase font-semibold tracking-widest">
            UNIQUE AND AUTHENTIC VINTAGE <br /> DESIGNER JEWELLERY
          </h1>
          <p className="mt-2 text-lg text-amber-900 font-bold">
            NOW AVAILABLE AT THE HIRAPANNA
          </p>
          <button className="mt-5 px-8 py-4 bg-transparent border-2 border-amber-900 text-amber-900 rounded-md shadow-lg hover:bg-orange-300 hover:text-white hover:bg-opacity-50"
            onClick={() => navigate('/productlist')}>
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-12 space-x-8">
        <div className="max-w-xs p-4 bg-white rounded-lg shadow-md hover:scale-105">
          <div className="text-center">
            <img src="/photos/icon4.png" alt="ALL INDIA SHIPPING" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">ALL INDIA SHIPPING</h3>
            <p className="mt-2 text-gray-600">ALL INDIA SHIPPING IS THE PROCESS OF IMPORTING</p>
          </div>
        </div>

        <div className="max-w-xs p-16 bg-white rounded-lg shadow-md hover:scale-105">
          <div className="text-center">
            <img src="/photos/icon5.png" alt="SECURED SERVICE" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">SECURED SERVICE</h3>
            <p className="mt-2 text-gray-600">SECURED SERVICES. HEAVY COMMERCIAL/INDUSTRIAL</p>
          </div>
        </div>

        <div className="max-w-xs p-4 bg-white rounded-lg shadow-md hover:scale-105">
          <div className="text-center">
            <img src="/photos/icon6.png" alt="FAST DELIVERY" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">FAST DELIVERY</h3>
            <p className="mt-2 text-gray-600">FAST DELIVERY IS A FAST GROWING AND PROMISING</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front