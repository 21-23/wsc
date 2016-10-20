import Immutable from 'Immutable';

const inntitialState = Immutable.fromJS({
    players: {},
});

export default function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {

    default:
        return state;
    }
};
