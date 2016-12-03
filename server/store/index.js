import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'server/reducers';

import middlewares from './middlewares.js';

const store = applyMiddleware(...middlewares)(createStore)(rootReducer);

export default store;
