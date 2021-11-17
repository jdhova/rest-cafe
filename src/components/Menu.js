import React from 'react';
//import './Cards.css';
import CardInfo from './CardInfo';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='cards'>
      <h1>Main MENU!</h1>
      <Link to='/' className='navbar-home-logo'>
        <i class='fa fa-home'></i>
      </Link>
      <h2>Specials</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Todays Special'
              path='/menu'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
          </ul>
          <h2>Rice</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Todays Special'
              path='/menu'
            />

            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
          </ul>
          <h2>Sallow</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Todays Special'
              path='/menu'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
          </ul>
          <h2>Breakfast</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Soups'
              path='/soups'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Swallow'
              path='/swallow'
            />
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Rice'
              path='/rice'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
