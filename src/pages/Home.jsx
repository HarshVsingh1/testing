import React from 'react';
import Front from '../components/Front';
import Promotions from '../components/Promotion';
import Promotion2 from '../components/Promotion-2';
import Promotion3 from '../components/Promotion-3';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className='px-0 ps-0 w-screen overflow-x-hidden'>
    <Front/>
    <Promotions/>
    <Promotion2/>
    <Promotion3/>
    <ContactUs/>
    </div>

  );
};

export default Home;
