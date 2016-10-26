import store from 'server/store';
import { players, playerTokenMap } from 'server/selectors/game_selectors';
import { challengeAccepted } from 'server/game/tasks/accept_challenge';
import { chooseAndPlay } from 'server/game/utils';
import ProtocolMessages from 'server/constants/protocol_messages';

export function play(message, socket) {
    if(message.token && message.command !== ProtocolMessages.CHALLENGE_ACCEPTED) {
        const state = store.getState();
        const playerId = playerTokenMap(state).get(message.token);
        if (playerId) {
            const player = players(state).get(playerId);
            return chooseAndPlay(message, player, socket);
        } else {
            socket.send('woops, your token wrong');
            return false;
        }
    }
    if(message.command === ProtocolMessages.CHALLENGE_ACCEPTED) {
        challengeAccepted(message, socket);
    }
}
