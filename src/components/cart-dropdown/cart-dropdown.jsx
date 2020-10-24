import React from 'react';

import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const cartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton inverted>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default cartDropdown;
