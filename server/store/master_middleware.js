export function createRemoteDispatchMiddleware(getRemotes, actions) {
    return () => next => action => {
        const result = next(action);
        const connections = getRemotes();

        if(actions[action.type] !== undefined){
            let msg = '';

            const descriptor = actions[action.type];
            if(descriptor && descriptor.onAction) {
                msg = JSON.stringify(descriptor.onAction(action));
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
