import React from 'react';
//import './Cards.css';
import CardInfo from './CardInfo';
import { Link } from 'react-router-dom';

const Soups = () => {
  return (
    <div className='cards'>
      <h1>Soups!</h1>
      <Link to='/' className='navbar-home-logo'>
        <i class='fa fa-home'></i>
      </Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInfo
              src='photos/cat-fish.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              label='Cat Fish Pepper Soup'
              path='/soups'
            />
            <CardInfo
              src='photos/cow-tail.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='23.00'
              label='Cow Tail Pepper Soup'
              path='/soups'
            />
            <CardInfo
              src='photos/assorted.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='20.00'
              label='Assorted Pepper Soup'
              path='/soups'
            />
          </ul>

          <ul className='cards__items'>
            <CardInfo
              src='photos/goat-meat.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='33.00'
              label='Goat Meat Pepper Soup'
              path='/soups'
            />
            <CardInfo
              src='photos/tilapia.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='31.00'
              label='Tilapia Pepper Soup'
              path='/soups'
            />
            <CardInfo
              src='photos/turkey.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='11.00'
              label='Turkey Pepper Soup'
              path='/soups'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Soups;
