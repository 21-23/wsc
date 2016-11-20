import { call, fork, put } from 'redux-saga/effects';
import { getUrl } from 'helpers/web_socket_helpers';

function createWebsocket() {
    const url = getUrl(window.location);
    const source = new WebSocket(url);
    let promise;

    source.onmessage = event => {
        if(promise) {
            promise.resolve(JSON.parse(event.data));
            promise = null;
        }
    };

    return {
        nextMessage() {
            if(!promise) {
                promise = {};
                promise.promise =
                    new Promise(resolve => promise.resolve = resolve);
            }
            return promise.promise;
        }
    };
}

function* watchMessages(msgSource) {
    let message = yield call(msgSource.nextMessage);
    while(message) {
        yield put(message);
        console.log(message);
        message = yield call(msgSource.nextMessage);
    }
}


export default function* webSocketWatcher() {
    const msgSource = yield call(createWebsocket);
    yield fork(watchMessages, msgSource);
}
