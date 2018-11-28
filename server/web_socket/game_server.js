import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';
import messages from 'server/constants/messages';
import defaultVerifyClient from 'server/utils/verify_client';
import store from 'server/store';
import * as SystemSelectors from 'shared/selectors/system_selectors';
import { isGameMessage } from 'server/validators/message_validator';
import { generate as generateID } from 'shortid';
import { parseMessage } from 'server/helpers/message';
import { playerCloseConnetction } from 'server/actions/game_actions';

import { play } from 'server/game';

import {
    notGameMessage,
    notAnObject,
} from 'server/web_socket/message_creators';

function setInactivityTimeout(socket) {
    return setTimeout(() => {
        socket.close();
    // this thing should be configurable in WSC-next
    }, 5 * 60 * 1000);
}

export function createGameServer({server, verifyClient = defaultVerifyClient}) {
    const wss = new WebSocketServer({
        server,
        verifyClient,
        path: '/',
    });

    wss.on('connection', function (socket) {

        cli.log('Player connected');
        socket._id = generateID();

        let activityTimer = setInactivityTimeout(socket);

        socket.on('message', function __onGameMessage(message) {
            const parsedMessage = parseMessage(message);

            const state = store.getState();
            const isGameStarted = SystemSelectors.isGameStarted(state);
            cli.log(`Message recived ${JSON.stringify(parsedMessage)}`);

            if (!isGameStarted){
                return socket.send(JSON.stringify(messages.GAME_NOT_START_MSG));
            }

            activityTimer = setInactivityTimeout(socket);

            if (isGameMessage(parsedMessage)) {
                return play(parsedMessage, socket);
            }

            let res = '';

            if (message === {}.toString()) {
                res = notAnObject();
            } else {
                res = notGameMessage();
            }

            socket.send(res);
            socket.close();
        });

        socket.on('close', function () {
            clearTimeout(activityTimer);
            playerCloseConnetction(socket._id);
        });

    });

    return wss;
}
