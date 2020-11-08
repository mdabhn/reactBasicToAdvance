import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
