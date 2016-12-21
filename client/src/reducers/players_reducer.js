import immutable from 'immutable';
//stub
//import generatePlayers from './generate_players';
import SystemActionTypes from 'shared/action_types/baseViewActionTypes';
import GameActionTypes from 'shared/action_types/game_action_types';

const intitialState = immutable.fromJS({
    list: immutable.Map(),//generatePlayers(),
});

export default function playersReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case 'RANDOM_PLZ': {
            const number = `${Math.floor(Math.random() * state.get('list').size)}`;
            const progress = state.getIn(['list', number, 'taskSolved']);
            if (progress === 3) {
                return state;
            }

            return state.withMutations((mutable) => {
                mutable.setIn(['list', number, 'taskSolved'], progress + 1);
                mutable.setIn(['list', number, 'end'], Date.now());
            });
        }
        case GameActionTypes.PLAYER_WIN:
        case GameActionTypes.PLAYER_SOLVE_TASK:
        case GameActionTypes.PLAYER_CONNECTED: {
            return state.mergeDeepIn(['list'], action.payload);
        }
        case SystemActionTypes.FETCH_STORE: {
            return state.mergeIn(['list'], action.payload.players);
        }
        case GameActionTypes.REMOVE_PLAYER: {
            return state.deleteIn(['list', action.payload.playerId]);
        }
        default:
            return state;
    }
}
