import { compressor } from 'redux-action-minifier';

export function remoteDispatch(source, action) {
    let compressedAction;

    if (typeof action === 'object') {
        compressedAction = compressor(action);
    }
     
    const message = JSON.stringify(compressedAction || action);
    source.send(message);
}
