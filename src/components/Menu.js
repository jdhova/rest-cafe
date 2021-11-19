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
              label='Todays Special: Poundo and Egusi'
              path='/menu'
            />
            <CardInfo
              src='photos/rice3.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special: Jelloff Rice'
              path='/menu'
            />
          </ul>
          <h2>Rice</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/frice.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Fried Rice'
              path='/menu'
            />

            <CardInfo
              src='photos/rice-beans.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Rice and Beans'
              path='/menu'
            />
            <CardInfo
              src='photos/rstew.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Rice and Stew'
              path='/menu'
            />
          </ul>
          <h2>Sallow</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/oha.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Oha soup and Poundo/eba'
              path='/menu'
            />
            <CardInfo
              src='photos/okro2.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Okro and Poundo/eba'
              path='/menu'
            />
            <CardInfo
              src='photos/ogbono.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Ogbono and Poundo/eba'
              path='/menu'
            />
          </ul>
          <h2>Breakfast</h2>
          <ul className='cards__items'>
            <CardInfo
              src='photos/yam-egg.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Yam and Fried egg sauce'
              path='/menu'
            />
            <CardInfo
              src='photos/akara2.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Akara'
              path='/menu'
            />
            <CardInfo
              src='photos/plantain-egg.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Plantain and Fried egg sauce'
              path='/menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
