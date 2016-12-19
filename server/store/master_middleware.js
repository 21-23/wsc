export function createRemoteDispatchMiddleware(getRemotes, actions) {
    return () => next => action => {
        const result = next(action);
        const connections = getRemotes();

        if(actions[action.type] !== undefined){
            let msg = '';

            const descriptor = actions[action.type];
            if(descriptor && typeof descriptor === 'function') {
                msg = JSON.stringify(descriptor(action));
            } else {
                msg = JSON.stringify(action);
            }
            connections.forEach(function(socket) {
                socket.send && socket.send(msg);
            });
        }

        return result;
    };
}
