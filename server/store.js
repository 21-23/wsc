import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import masterMiddleware from './utils/master_middleware';

const store = applyMiddleware(masterMiddleware)(createStore)(rootReducer);

//TODO: Remove
require('./observables/storeStream').default(store);

export default store;
