import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'server/reducers';
import middlewares from './middlewares';
import storeSaga from 'server/sagas/saveStoreSaga';

const store = applyMiddleware(...middlewares)(createStore)(rootReducer);

middlewares.runSaga(storeSaga);

export default store;
