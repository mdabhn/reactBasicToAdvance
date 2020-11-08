import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import { careReducer } from './cart/cart.ruducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persisitConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: careReducer,
});

export default persistReducer(persisitConfig, rootReducer);
