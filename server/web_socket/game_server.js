import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';
import messages from 'server/constants/messages';
import defaultVerifyClient from 'server/utils/verify_client';
import store from 'server/store';
import * as SystemSelectors from 'shared/selectors/system_selectors';
import { isGameMessage } from 'server/validators/message_validator';
import { generate as generateID } from 'shortid';
import { parseMessage } from 'server/helpers/message';

import { play } from 'server/game';


export function createGameServer({server, verifyClient = defaultVerifyClient}) {
    const wss = new WebSocketServer({
        server,
        verifyClient,
        path: '/',
    });

    wss.on('connection', function (socket) {

        cli.log('Player connected');
        socket._id = generateID();

        socket.on('message', function __onGameMessage(message) {
            const parsedMessage = parseMessage(message);

            const state = store.getState();
            const isGameStarted = SystemSelectors.isGameStarted(state);
            cli.log(`Message recived`);
            if (isGameStarted) {
                if(isGameMessage(parsedMessage)) {
                    play(parsedMessage, socket);
                } else {
                  // We should somehow process frod messages from players
                }

            } else {
                socket.send(JSON.stringify(messages.GAME_NOT_START_MSG));
            }
        });

        socket.on('close', function (){

        });


    });

    return wss;
}
