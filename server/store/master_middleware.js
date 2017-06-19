import { compressor } from 'redux-action-minifier';

export function createRemoteDispatchMiddleware(getRemotes, actions) {
    return () => next => action => {
        const result = next(action);
        const connections = getRemotes();

        if(actions.hasOwnProperty(action.type)) {

            const descriptor = actions[action.type];

            if (descriptor && typeof descriptor === 'function') {
                action = descriptor(action);
            }

            const msg = JSON.stringify(compressor(action));

            connections.forEach(function(socket) {
                socket.send && socket.send(msg);
            });
        }

        return result;
    };
}
