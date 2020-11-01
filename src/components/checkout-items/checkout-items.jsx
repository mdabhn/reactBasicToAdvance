import React from 'react';
import './checkout-items.scss';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';

function CheckoutItems({ item, clearItemFromCart, addItem, removeItem }) {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(item)}>
        &#9747;
      </div>
    </div>
  );
}

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItems
);
