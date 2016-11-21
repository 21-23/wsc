import { combineReducers } from 'redux-immutable';

//importing of reducers
import players_reducer from 'server/reducers/players_reducer';
import system_reducer from 'server/reducers/system_reducer';

export default combineReducers({
    player: players_reducer,
    system: system_reducer,
});
