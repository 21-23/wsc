import store from 'server/store';
import * as SystemSelectors from 'shared/selectors/system_selectors';
import ActionTypes from 'server/constants/action_types/system_action_types.js';
import config from 'config';
const duration = config.get('duration');

export function startGame () {
    const state = store.getState();
    const isGameStarted = SystemSelectors.isGameStarted(state);

    if(!isGameStarted){
        const start = Date.now();
        store.dispatch({
            type: ActionTypes.START_GAME,
            payload: {
                start: Date.now(),
                isGameStarted: true,
                end: start + duration,
            }
        });
        return true;
    }
    return false;
}

export default {
    startGame,
};
