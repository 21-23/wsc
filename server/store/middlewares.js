import { createRemoteDispatchMiddleware } from './master_middleware';
import clientActions from './client_actions';
import { getConnections } from 'server/web_socket/view_server';
const masterMiddleware = createRemoteDispatchMiddleware(getConnections, clientActions);

export default [masterMiddleware];
