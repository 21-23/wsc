import { createAction } from 'redux-actions';
import GameActionTypes from 'shared/action_types/game_action_types';

export const connectNewPlayerActionCreator = createAction(GameActionTypes.PLAYER_CONNECTED, player => ({  [player.id]: player }));

export function playerWinActionCreator(player, lnk) {
    return {
        type: GameActionTypes.PLAYER_WIN,
        payload: {
            [player.id]: {
                finish: Date.now(),
                lnk: lnk,
            }
        }
    };
}

export function playerSolveTaskActionCreator(player) {
    return {
        type: GameActionTypes.PLAYER_SOLVE_TASK,
        payload: {
            [player.id]: {
                currentTask: {},
                taskSolved: player.taskSolved + 1,
                end: Date.now(),
            }
        }
    };
}

export function playerGetTaskActionCreator(player, currentTask){
    return {
        type: GameActionTypes.PLAYER_GET_TASK,
        payload: {
            [player.id]: {
                currentTask
            }
        }
    };
}

export const playerCloseConnectionActionCreator = (soketId) => ({
    type: GameActionTypes.PLAYER_CLOSE_CONNECTION,
    payload: {
        soketId,
    },
});

export const removePlayerActionCreator = (playerId) => ({
    type: GameActionTypes.REMOVE_PLAYER,
    payload: {
        playerId,
    }
});
