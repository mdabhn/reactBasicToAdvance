import React from 'react';
import './check-out.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, totalAmount } from '../../redux/cart/cart.selector';

import CheckoutItems from '../../components/checkout-items/checkout-items';

function CheckOut({ cartItems, totalAmount }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='headr-blocks'>
          <span>Products</span>
        </div>
        <div className='headr-blocks'>
          <span>Description</span>
        </div>
        <div className='headr-blocks'>
          <span>Quantity</span>
        </div>
        <div className='headr-blocks'>
          <span>Price</span>
        </div>
        <div className='headr-blocks'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItems key={item.id} item={item} />;
      })}

      <div className='total'>
        <span>Total: ${totalAmount}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: totalAmount,
});

export default connect(mapStateToProps)(CheckOut);
