import SharedActionTypes from 'shared/action_types/baseViewActionTypes';
import immutable from 'immutable';

const intitialState = immutable.fromJS({
    isGameStarted: false,
    start: null,
    end: null,
});

export default function systemReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case SharedActionTypes.FETCH_STORE: {
            const {payload: { system } } = action;
            return state.merge(system);
        }
        case SharedActionTypes.START_GAME:
            return state.merge(action.payload);
        default:
            return state;
    }
}
