import immutable from 'immutable';

//stub for timers
const start = new Date();

const intitialState = immutable.fromJS({
    isGameStarted: false,
    start: start,
    end: new Date(start.getTime() + (2*60*60*1000)),
});

export default function gameReducer(state = intitialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
