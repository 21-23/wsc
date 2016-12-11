import saveStoreSaga from 'server/sagas/saveStoreSaga';
import disconnectionSaga from 'server/sagas/removePlayersSaga';

export default function* rootSaga() {
    yield [
        saveStoreSaga(),
        disconnectionSaga(),
    ];
}
