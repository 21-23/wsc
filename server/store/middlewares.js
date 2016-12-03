import { createRemoteDispatchMiddleware } from './master_middleware';
import clientActions from './client_actions';
import { getConnections } from 'server/web_socket/view_server';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const masterMiddleware = createRemoteDispatchMiddleware(getConnections, clientActions);

const middlewares = [masterMiddleware, sagaMiddleware];
middlewares.runSaga = sagaMiddleware.run;

export default middlewares;
