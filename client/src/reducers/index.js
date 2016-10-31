import { combineReducers } from 'redux-immutable';

import players from './players_reducer';
import game from './game_reducer';

export default combineReducers({
    players,
    game,
});
