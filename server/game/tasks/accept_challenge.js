import Player from 'server/models/player';
import { connectNewPlayer } from 'server/actions/game_actions';
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

    connectNewPlayer(player);

    return player;
}
