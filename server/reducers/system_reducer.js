import Immutable from 'immutable';

import ActionTypes from 'server/constants/action_types/system_action_types.js';

const inntitialState = Immutable.fromJS({
    isGameStarted: false,
    start: null,
    end: null,
});

export default function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
        case ActionTypes.START_GAME:
            return state.merge(action.payload);
        case ActionTypes.FINISH_GAME:
            return state.merge(inntitialState);
        default:
            return state;
    }
}
