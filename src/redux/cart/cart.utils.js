export const addItemToCart = (cartItems, newItemToAdd) => {

  const existItem = cartItems.find((item) =>
    item.id === newItemToAdd.id
  );
  

  if(existItem){
    return cartItems.map(item => item.id === newItemToAdd.id ? {...item, quantity: item.quantity + 1} : item)
  }

  return [...cartItems, {...newItemToAdd, quantity: 1}]

}