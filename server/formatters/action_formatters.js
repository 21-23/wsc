import {
    pick
} from 'lodash';

const requiedPlayerFields = ['name', 'id', 'taskSolved', 'end'];
const requiredWinFields = ['finish', 'taskSolved'];

export function formatPlayer(action) {
    const { payload, type } = action;
    const playerId = Object.keys(payload).pop();
    const player = payload[playerId];
    return ({
        type,
        payload: {
            [playerId]: pick(player, requiedPlayerFields)
        }
    });
}

export function formatwin(action) {
    const { payload, type } = action;
    const playerId = Object.keys(payload).pop();
    const player = payload[playerId];

    return ({
        type,
        payload: {
            [playerId]: pick(player, requiredWinFields)
        }
    });
}
