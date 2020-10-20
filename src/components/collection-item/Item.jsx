import React from 'react';
import './items.scss';
function Item({ id, name, price, imageUrl }) {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Item;
