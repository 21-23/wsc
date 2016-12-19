import {
    pick
} from 'lodash';

const requiedPlayerFields = ['name', 'id', 'taskSolved', 'end'];

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
