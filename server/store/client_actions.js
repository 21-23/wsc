import GameActionTypes from 'shared/action_types/game_action_types';
import SystemActions from 'server/constants/action_types/system_action_types';
import {
  formatPlayer,
  formatwin,
} from 'server/formatters/action_formatters';

export default {
    [GameActionTypes.PLAYER_CONNECTED]: formatPlayer,
    [GameActionTypes.PLAYER_SOLVE_TASK]: null,
    [GameActionTypes.PLAYER_WIN]: null,
    [GameActionTypes.REMOVE_PLAYER]: null,
    [SystemActions.START_GAME]: null,
    [SystemActions.FINISH_GAME]: formatwin,
};
