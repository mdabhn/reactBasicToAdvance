import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import {careReducer} from './cart/cart.ruducer'

export default combineReducers({
  user: userReducer,
  cart: careReducer
})