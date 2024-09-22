import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDescriptionPage from './components/Promotion';

const App = () => {
  return (
    <Router>
      <div className='w-screen p-0 m-0 font-garamond'>
        <Header/>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/productlist' element={<ProductList />} />
            <Route path='productlist/:id' element={<ProductDescriptionPage />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
