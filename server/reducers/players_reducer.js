import { Map } from 'immutable';
import GameActionTypes from 'shared/action_types/game_action_types';
const inntitialState = Map();

export default function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
        case GameActionTypes.PLAYER_CONNECTED:
        case GameActionTypes.PLAYER_SOLVE_TASK:
        case GameActionTypes.PLAYER_GET_TASK:
        case GameActionTypes.PLAYER_WIN:
            return state.mergeDeep(action.payload);
        case GameActionTypes.REMOVE_PLAYER:
            return state.remove(action.payload.playerId);
        default:
            return state;
    }
}
