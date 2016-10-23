import { combineReducers } from 'redux-immutable';

//importing of reducers
import game_reducer from 'server/reducers/game_reducer';
import system_reducer from 'server/reducers/system_reducer';

export default combineReducers({
    game: game_reducer,
    system: system_reducer,
});
