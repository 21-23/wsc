import WinnerModel from 'server/models/store';
import GameActionTypes from 'shared/action_types/game_action_types';
import { call, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { start as startSelector } from 'shared/selectors/system_selectors';

export default function* () {
    yield takeEvery(GameActionTypes.PLAYER_WIN, saveWinner);
}

function* saveWinner(action) {
    const gameStart = yield select(startSelector);
    const { payload } = action;
    const playerId = Object.keys(payload).pop();
    const { finish, code = lnk } = payload[playerId];

    const time = gameStart - finish;

    const winner = new WinnerModel({
        nickname,
        code,
        time,
    });
    yield call(winner.save);
}
