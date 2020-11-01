import { addItemToCart, removeItemFromCart } from './cart.utils';

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
    case 'REMOVE_ITEM':
      return {
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
