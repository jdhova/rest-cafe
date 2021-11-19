import React from 'react';
//import './Cards.css';
import CardInfo from './CardInfo';
import { Link } from 'react-router-dom';

const Rice = () => {
  return (
    <div className='cards'>
      <h1>Rice Menu!</h1>
      <Link to='/' className='navbar-home-logo'>
        <i class='fa fa-home'></i>
      </Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInfo
              src='photos/rice3.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 '
              price='19.00'
              label='Jelloff Rice'
              path='/rice'
            />
            <CardInfo
              src='photos/coconut-rice2.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='18.00'
              label='Coconut Rice'
              path='/rice'
            />
            <CardInfo
              src='photos/rice-beans.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='14.00'
              label='Rice and Beans'
              path='/rice'
            />
          </ul>

          <ul className='cards__items'>
            <CardInfo
              src='photos/coconut-rice.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='17.00'
              label='Minced Vegetable Rice'
              path='/rice'
            />
            <CardInfo
              src='photos/rstew.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='16.00'
              label='Rice and Stew'
              path='/rice'
            />
            <CardInfo
              src='photos/frice.jpeg'
              text='lorem12 lorem12l lorem12 lorem12 lorem12l lorem12 lorem12 lorem12l lorem12'
              price='22.00'
              label='Fried Rice'
              path='/rice'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rice;
