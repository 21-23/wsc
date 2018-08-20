import { createPlayer } from 'server/models/player';
import { connectNewPlayer } from 'server/actions/game_actions';
import { playerAcceptChallange } from 'server/web_socket/message_creators';
import { getFirstTask } from 'server/game/utils';
import { WITHOUT_NAME } from 'server/constants/messages';

export function challengeAccepted(message, socket){
    if(!message.name) {
        socket.send(WITHOUT_NAME);
        socket.close();
    }

    const player = createPlayer(message.name || 'ANONYMOUS', socket._id);
    const firstTask = getFirstTask();

    socket.send(playerAcceptChallange(player.token, firstTask));

    connectNewPlayer(player);

    return player;
}
