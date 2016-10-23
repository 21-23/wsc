import store from 'server/store';
import SystemSelectors from 'server/selectors/system_selectors';
import ActionTypes from 'server/constants/action_types/system_action_types.js';

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
