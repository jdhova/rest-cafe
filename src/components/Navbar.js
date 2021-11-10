import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-1'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>
      <div className='nav-2'>
        <ul className='uls'>
          <li>
            <Link to='/Menu'>Menu</Link>
          </li>
          <li>
            <Link to='/Contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/Drinks'>Drinks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
