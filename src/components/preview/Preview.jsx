import React from 'react';
import Item from '../collection-item/Item';
import './preview.scss';

const Preview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => {
            return <Item key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default Preview;
