import React, { Component } from 'react';
import data from './shop.data';
import Preview from '../../components/preview/Preview';

export default class Shop extends Component {
  state = {
    collections: data,
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <Preview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
