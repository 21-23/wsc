import { combineReducers } from 'redux-immutable';

//importing of reducers
import game_reducer from './game_reducer';
import system_reducer from './system_reducer';

export default combineReducers({
    game: game_reducer,
    system: system_reducer,
});
