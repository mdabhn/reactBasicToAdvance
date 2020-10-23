import React from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { changeViewState } from '../../redux/cart/cart.action';

function cartIcon({ changeViewState }) {
  return (
    <div
      className='cart-icon'
      onClick={() => {
        changeViewState();
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default connect(null, { changeViewState })(cartIcon);
