import cli from 'server/cli';
import { getConnections } from 'server/web_socket/view_server';

export default () => next => action => {
    cli.log(`[view.middleware]: Action reccived: ${action.type}`);
    const result = next(action);
    const connections = getConnections(); // ???
    const msg = JSON.stringify(action);
    connections.forEach(c => c.send(msg));
    return result;
};

export function createRemoteDispatchMiddleware(getRemotes, actions) {
    if(!actions) {
        return () => next => action => {
            const connections = getRemotes();
            const msg = JSON.stringify(action);
            for(let i = 0; i < connections.length; i++){
                connections[i].send && connections[i].send(msg);
            }
            return next(action);
        };
    } else {
        return () => next => action => {
            const connections = getRemotes();

            if(actions[action.type]){
                let msg = '';

                if(actions[action.type].onAction) {
                    msg = JSON.stringify(actions[action.type].onAction(action));
                } else {
                    msg = JSON.stringify(action);
                }
                for(let i = 0; i < connections.length; i++){
                    connections[i].send && connections[i].send(msg);
                }
            }


            return next(action);
        };
    }
}
