import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const cartStatus = createSelector(selectCart, (cart) => {
  return cart.hidden;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumulatedQuantity, items) => accumulatedQuantity + items.quantity,
      0
    );
  }
);

export const totalAmount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce(
    (accumulatedQuantity, items) =>
      accumulatedQuantity + items.quantity * items.price,
    0
  );
});
