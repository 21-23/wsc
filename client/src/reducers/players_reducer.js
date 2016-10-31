import immutable from 'immutable';
//stub
import generatePlayers from './generatePlayers';

const intitialState = immutable.fromJS({
    list: generatePlayers(),
});

export default function playersReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case 'RANDOM_PLZ':
            const number = Math.floor(Math.random() * state.get('list').size);
            const progress = state.getIn(['list', number, 'progress']);
            const task = progress === 4 ? progress : progress + 1;

            return state.setIn(['list', number, 'progress'], task);
        default:
            return state;
    }
}
