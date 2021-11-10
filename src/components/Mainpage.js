import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';

const Mainpage = () => {
  return (
    <>
      <video className='video' src='/videos/bbq2.mp4' autoPlay loop muted />
      <Navbar />
      <div className='main-page-container'>
        <h3>Main Pages listed here</h3>
      </div>
      <Card />
    </>
  );
};

export default Mainpage;
