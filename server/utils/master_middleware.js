import { getConnections } from 'server/web_socket/view_server';

export default () => next => action => {
    const result = next(action);
    //const connections = getConnections();
    //const msg = JSON.stringify(action);
    //connections.forEach(c => c.send(msg));
    return result;
};
