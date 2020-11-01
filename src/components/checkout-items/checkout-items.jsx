import React from 'react';
import './checkout-items.scss';

function CheckoutItems({ item: { name, price, quantity, imageUrl } }) {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#9747;</div>
    </div>
  );
}

export default CheckoutItems;
