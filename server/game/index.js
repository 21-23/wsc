import store from 'server/store';
import { players, playerTokenMap } from 'server/selectors/game_selectors';
import { challengeAccepted } from 'server/game/tasks/accept_challenge';

export function play(message, socket){
    if(message.token) {
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
    challengeAccepted(message, socket);
}
