import GameActionTypes from 'shared/action_types/game_action_types';
import SystemActions from 'server/constants/action_types/system_action_types';
import {
  formatPlayer,
  formatwin,
} from 'server/formatters/action_formatters';

import cli from 'cli';

function warnOnFormatting(action) {

    cli.warn(`[WSC WARN]: You send unformatted action ${action.type} to client.`, action);

    return action;
}

export default {
    [GameActionTypes.PLAYER_CONNECTED]: formatPlayer,
    [GameActionTypes.PLAYER_SOLVE_TASK]: warnOnFormatting,
    [GameActionTypes.PLAYER_WIN]: warnOnFormatting,
    [GameActionTypes.REMOVE_PLAYER]: warnOnFormatting,
    [SystemActions.START_GAME]: warnOnFormatting,
    [SystemActions.FINISH_GAME]: formatwin,
};
