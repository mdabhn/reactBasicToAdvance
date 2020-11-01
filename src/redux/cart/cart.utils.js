export const addItemToCart = (cartItems, newItemToAdd) => {
  const existItem = cartItems.find((item) => item.id === newItemToAdd.id);

  if (existItem) {
    return cartItems.map((item) =>
      item.id === newItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  const existItem = cartItems.find((item) => item.id === removeItem.id);

  if (existItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeItem.id);
  }

  return cartItems.map((item) =>
    removeItem.id === item.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
