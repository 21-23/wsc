import { randomBytes } from 'crypto';
import { createWinMessage } from 'server/web_socket/message_creators';
import { playerWin } from 'server/actions/game_actions';

export function winTask(player, socket) {
    const lnk = randomBytes(8).toString('hex');

    const message = createWinMessage(lnk);

    //We should dispatch two actions in the row. I'm leave it as is for now

    process.nextTick(function() {
        socket.send(message);
    });
}
