import { combineReducers } from 'redux-immutable';

import players from './players_reducer';
import system from './system_reducer';

export default combineReducers({
    players,
    system,
});
