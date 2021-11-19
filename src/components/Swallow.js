import React from 'react';
import CardInfo from './CardInfo';
import { Link } from 'react-router-dom';

const Swallow = () => {
  return (
    <div className='cards'>
      <h1>Swallows!</h1>
      <Link to='/' className='navbar-home-logo'>
        <i class='fa fa-home'></i>
      </Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              price='29.00'
              label='Egusi'
              path='/swallow'
            />

            <CardInfo
              src='photos/afang.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='27.00'
              label='Afang'
              path='/swallow'
            />

            <CardInfo
              src='photos/okro2.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='24.00'
              label='Okro Soup'
              path='/swallow'
            />
          </ul>

          <ul className='cards__items'>
            <CardInfo
              src='photos/vegetable.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='28.00'
              label='Vegetable Soup'
              path='/swallow'
            />

            <CardInfo
              src='photos/oha.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='22.00'
              label='Oha'
              path='/swallow'
            />

            <CardInfo
              src='photos/ogbono.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='29.00'
              label='Ogbono'
              path='/swallow'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Swallow;
