import React from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { changeViewState } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

function cartIcon({ changeViewState, count }) {
  return (
    <div
      className='cart-icon'
      onClick={() => {
        changeViewState();
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{count}</span>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    count: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProp, { changeViewState })(cartIcon);
