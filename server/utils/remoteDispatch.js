export function remoteDispatch(source, action) {
    const message = JSON.stringify(action);
    source.send(message);
}
