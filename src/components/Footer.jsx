import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img
                            src="/photos/logo.png"
                            alt="Hirapanna Jewellers"
                            className="h-12"
                        />
                        <p className="text-gray-600 mt-2">
                            Lorem Ipsum is simply
                        </p>
                        <p className="text-gray-600 mt-2">
                            dummy text of the printing
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <div className="mb-4 md:mb-0">
                            <h5 className="text-lg font-bold mb-3">Customer Service</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/contact" className="text-gray-600 hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-gray-600 hover:text-blue-500">
                                        Our Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Track Your Order
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Shipping & Return
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h5 className="text-lg font-bold mb-3">About Us</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/about" className="text-gray-600 hover:text-blue-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-600 hover:text-blue-500">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Our Products
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h5 className="text-lg font-bold mb-3">Catalog</h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Earrings
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Pendant
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Rings
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Chains
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-blue-500">
                                        Bangles
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-full h-0.5 my-2 bg-gray-200 border-0 rounded' />
            <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-600">© 2023 Hirapanna Jewellery Company Limited. All rights reserved.</p>
                    <img src="/photos/image16.png" alt="" className="ml-2" />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
