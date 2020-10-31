import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

export const careReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW_STATE':
      return {
        ...state,
        hidden: !state.hidden,
      };
    case 'ADD_ITEM':
      return {
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
