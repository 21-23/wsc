import saveStoreSaga from 'server/sagas/saveStoreSaga';
import disconnectionSaga from 'server/sagas/removePlayersSaga';
import saveWinners from 'server/sagas/winners_saga';

export default function* rootSaga() {
    yield [
        saveWinners(),
        saveStoreSaga(),
        disconnectionSaga(),
    ];
}
