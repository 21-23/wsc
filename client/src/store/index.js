import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import webSocketWatcher from './middleware';
import reducers from 'reducers';

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(sagaMiddleware)(createStore)(reducers);

sagaMiddleware.run(webSocketWatcher);
