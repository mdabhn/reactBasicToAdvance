import React from 'react';
import './cart-item.scss';

function cartItem({ item: { name, price, imageUrl, quantity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='alt' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
}

export default cartItem;
