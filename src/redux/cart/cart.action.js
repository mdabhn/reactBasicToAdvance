export const changeViewState = () =>{
  return{
    type: 'CHANGE_VIEW_STATE'
  }
}

export const addItem = (item) =>{
  return{
    type: 'ADD_ITEM',
    payload: item
  }
}