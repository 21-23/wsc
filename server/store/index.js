import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'server/reducers';
import middlewares from './middlewares';
import rootSaga from 'server/sagas';

const store = applyMiddleware(...middlewares)(createStore)(rootReducer);

middlewares.runSaga(rootSaga);

export default store;
