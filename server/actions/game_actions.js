import store from 'server/store';
import { bindActionCreators as bindAction } from 'redux';
import GameActionTypes from 'server/constants/action_types/game_action_types';

function connectNewPlayerActionCreator(player) {
    return {
        type: GameActionTypes.PLAYER_CONNECTED,
        payload: {
            [player.id]: player,
        }
    };
}

function playerWinActionCreator(player, lnk) {
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

function playerSolveTaskActionCreator(player) {
    return {
        type: GameActionTypes.PLAYER_SOLVE_TASK,
        payload: {
            [player.id]: {
                currentTask: {},
                taskSolved: player.taskSolved + 1,
            }
        }
    };
}

function playerGetTaskActionCreator(player, currentTask){
    return{
        type: GameActionTypes.PLAYER_GET_TASK,
        payload: {
            [player.id]: {
                currentTask
            }
        }
    };
}

export const playerGetTask = bindAction(playerGetTaskActionCreator, store.dispatch);
export const playerSolveTask = bindAction(playerSolveTaskActionCreator, store.dispatch);
export const connectNewPlayer = bindAction(connectNewPlayerActionCreator, store.dispatch);
export const playerWin = bindAction(playerWinActionCreator, store.dispatch);
