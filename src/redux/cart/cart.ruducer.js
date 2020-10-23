const INITIAL_STATE = {
  hidden: false 
}

export const careReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'CHANGE_VIEW_STATE':
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}
