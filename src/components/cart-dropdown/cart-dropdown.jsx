import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

const cartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <CustomButton inverted>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(cartDropdown);
