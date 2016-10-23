import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'server/reducers';
import masterMiddleware from 'server/utils/master_middleware';

const store = applyMiddleware(masterMiddleware)(createStore)(rootReducer);

//TODO: Remove
require('./observables/storeStream').default(store);

export default store;
