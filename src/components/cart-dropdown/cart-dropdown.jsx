import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';

import { changeViewState } from '../../redux/cart/cart.action';

import { withRouter } from 'react-router-dom';

const cartDropdown = ({ cartItems, history, changeViewState }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <CustomButton
        inverted
        onClick={() => {
          changeViewState();
          history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(
  connect(mapStateToProps, { changeViewState })(cartDropdown)
);
