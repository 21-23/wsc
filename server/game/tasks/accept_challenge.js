import store from 'server/store';

import Player from 'server/models/player';
import GameActionTypes from 'server/constants/action_types/game_action_types';
import Messages from 'server/constants/messages';
import { getFirstTask } from 'server/game/utils';

export function challengeAccepted(message, socket){
    if(!message.name) {
        socket.close();
    }

    const player = new Player(message.name);

    socket.send(JSON.stringify({
        message: Messages.ACCEPTED,
        token: player.token,
        next: getFirstTask(),
    }));

    store.dispatch({
        type: GameActionTypes.PLAYER_CONNECTED,
        payload: {
            [player.id]: player
        }
    });

    return player;

}
