import { takeEvery } from 'redux-saga';
import { take, put, select, race, fork, cancel } from 'redux-saga/effects';
import GameActionTypes from 'shared/action_types/game_action_types';
import SystemActionTypes from 'server/constants/action_types/system_action_types';
import { playerSocket, players } from 'server/selectors/players_selectors';
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
    const { payload: { soketId }} = action;
    const playerid = socketIds.get(soketId);

    if (!playerid) {
        return;        
    }

    const player = yield select(players).get(playerid);

    if (player.get('taskSolved') < 4) {
        yield put(removePlayer(playerid));
    }    
}
