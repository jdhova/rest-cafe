import React from 'react';
//import './Cards.css';
import CardInfo from './CardInfo';

const Card = () => {
  return (
    <div className='cards'>
      <h1>Check out todays Menu!</h1>
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
              src='photos/rice3.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              label='Todays Special'
              path='/menu'
            />
          </ul>

          <ul className='cards__items'>
            <CardInfo
              src='photos/gmeatsoup.jpeg'
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
              src='photos/coconut-rice.jpeg'
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

export default Card;
