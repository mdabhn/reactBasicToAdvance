export const changeViewState = () => {
  return {
    type: 'CHANGE_VIEW_STATE',
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item,
  };
};
