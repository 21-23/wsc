import GameActionTypes from 'server/constants/action_types/game_action_types';
import SystemActions from 'server/constants/action_types/system_action_types';

export default {
    [GameActionTypes.PLAYER_CONNECTED]: null,
    [GameActionTypes.PLAYER_SOLVE_TASK]: null,
    [GameActionTypes.PLAYER_GET_TASK]:null,
    [GameActionTypes.PLAYER_WIN]: null,
    [SystemActions.START_GAME]: null,
    [SystemActions.FINISH_GAME]: null,
};
