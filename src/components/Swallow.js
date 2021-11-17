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
              label='Egusi'
              path='/menu'
            />
            <CardInfo
              src='photos/afang.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Afang'
              path='/menu'
            />
            <CardInfo
              src='photos/okro2.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Okro Soup'
              path='/menu'
            />
          </ul>

          <ul className='cards__items'>
            <CardInfo
              src='photos/vegetable.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Vegetable Soup'
              path='/soups'
            />
            <CardInfo
              src='photos/oha.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Oha'
              path='/swallow'
            />
            <CardInfo
              src='photos/ogbono.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Ogbono'
              path='/rice'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Swallow;
