import { createViewServer } from 'server/web_socket/view_server';
import { createGameServer } from 'server/web_socket/game_server';

export function initializaeServers(options) {
    const viewServer = createViewServer(options);
    const gameServer = createGameServer(options);
    
    return {
        gameServer,
        viewServer,
    };
}
