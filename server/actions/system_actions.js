import store from '../store';
import SystemSelectors from '../selectors/system_selectors';
import ActionTypes from '../constants/action_types/system_action_types.js';

function startGame () {
    const state = store.getState();
    const isGameStarted = SystemSelectors.isGameStarted(state);

    if(!isGameStarted){
        store.dispatch({
            type: ActionTypes.START_GAME,
            payload: {
                startTime: Date.now(),
                isGameStarted: true,
            }
        });
    }
}

export default {
    startGame,
};
