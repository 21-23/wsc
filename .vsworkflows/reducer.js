import immutable from 'immutable';

const intitialState = immutable.fromJS({
    
});

export default function(state = intitialState, action) {
    switch(action.type) {
        default: {
            return state;
        }
    }
}
