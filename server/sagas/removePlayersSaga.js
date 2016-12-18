import { takeEvery } from 'redux-saga';
import { take, put, select, race, fork, cancel } from 'redux-saga/effects';
import GameActionTypes from 'shared/action_types/game_action_types';
import SystemActionTypes from 'server/constants/action_types/system_action_types';
import { playerSocket } from 'server/selectors/players_selectors';
import { removePlayerActionCreator as removePlayer } from 'server/action_creators/game_action_creators';

export default function* disconnectionSaga() {
    let task = null;
    while(true) { //eslint-disable-line
        const { startGame , finishGame } = yield race({
            startGame: take(SystemActionTypes.START_GAME),
            finishGame: take(SystemActionTypes.FINISH_GAME),
        });

        if(startGame) {
            task = yield fork(watchDisconnection);
        }

        if(finishGame && task) {
            yield cancel(task);
            task = null;
        }
    }
}

function* watchDisconnection() {
    yield takeEvery(GameActionTypes.PLAYER_CLOSE_CONNECTION, closeConnection);
}

function* closeConnection(action) {
    const socketIds = yield select(playerSocket);
    const { payload: {soketId}} = action;
    const player = socketIds.get(soketId);
    if(player) {
        yield put(removePlayer(player));
    }
}
