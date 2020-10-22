import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './root-reducer'

import looger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [looger] //looger

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store