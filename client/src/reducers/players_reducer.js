import immutable from 'immutable';
//stub
import generatePlayers from './generate_players';

const intitialState = immutable.fromJS({
    list: generatePlayers(),
});

export default function playersReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case 'RANDOM_PLZ': {
            const number = `${Math.floor(Math.random() * state.get('list').size)}`;
            const progress = state.getIn(['list', number, 'progress']);
            if (progress === 3) {
                return state;
            }

            return state.withMutations((mutable) => {
                mutable.setIn(['list', number, 'progress'], progress + 1);
                mutable.setIn(['list', number, 'progressTime'], Date.now());
            });
        }
        default:
            return state;
    }
}
