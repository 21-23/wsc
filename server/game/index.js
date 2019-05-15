import store from 'server/store';
import {
    players,
    playerTokenMap,
    playerSocket,
} from 'server/selectors/players_selectors';
import { challengeAccepted } from 'server/game/tasks/accept_challenge';
import { chooseAndPlay } from 'server/game/utils';
import ProtocolMessages from 'server/constants/protocol_messages';

import {
    alreadyAccepted,
    wrongToken,
} from 'server/web_socket/message_creators';

export function play(message, socket) {
    const state = store.getState();
    if(message.token && message.command !== ProtocolMessages.CHALLENGE_ACCEPTED) {
        const playerId = playerTokenMap(state).get(message.token);
        if (playerId) {
            const player = players(state).get(playerId);
            return chooseAndPlay(message, player, socket);
        } else {
            socket.send(wrongToken());
            return false;
        }
    }
    if(message.command === ProtocolMessages.CHALLENGE_ACCEPTED) {
        const socketsMap = playerSocket(state);

        const player = socketsMap.get(socket._id);

        if (!player) {
            challengeAccepted(message, socket);
        } else {
            socket.send(alreadyAccepted());
        }
    }
}
