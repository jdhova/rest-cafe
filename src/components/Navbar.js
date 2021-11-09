import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-1'>
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className='nav-2'>
        <ul className='uls'>
          <li>Contact</li>
          <li>Menu</li>
          <li>Drinks</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
