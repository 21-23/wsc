import Immutable from 'Immutable';

import ActionTypes from '../constants/action_types/system_action_types.js';

const inntitialState = Immutable.fromJS({
    startTime: null,
    isGameStarted: false,
});

export default function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
    case ActionTypes.START_GAME:
        return state.merge(action.payload);
    default:
        return state;
    }
}
