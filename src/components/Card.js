import React from 'react';

import CardInfo from './CardInfo';

const Card = () => {
  return (
    <div className='cards'>
      <h2>Menu</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInfo
              src='photos/swallow.jpeg'
              text='Swallow Menu'
              path='/swallow'
            />

            <CardInfo src='photos/rice.jpeg' text='Rice Menu ' path='/rice' />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
