import { Server as WebSocketServer } from 'uws';
import master from './master';

import cli from './cli';

import constants from './constants/messages';

import defaultVerifyClient from './utils/verify_client';

import store from './store';
import SystemSelectors from './selectors/system_selectors';

import isGameMessage from './validators/message_validator';

export function createGameServer({server, verifyClient = defaultVerifyClient}) {
    const wss = new WebSocketServer({
        server,
        verifyClient,
    });

    wss.on('connection', function (socket) {
        if(master.isMaster(socket)) {
            cli.log('Master detected');
        } else {
            socket.on('message', function __onGameMessage(message) {
                const state = store.getState();
                const isGameStarted = SystemSelectors.isGameStarted(state);
                cli.log(`Message recived`);
                if (isGameStarted) {
                    //JSON.parse should be replaced
                    const parsedMessage = JSON.parse(message);

                    if(isGameMessage(parsedMessage.command)) {
                        //Here game service would process game message
                    }

                } else {
                    socket.send(JSON.stringify(constants.GAME_NOT_START_MSG));
                }
            });

            socket.on('close', function (){
                if(!master.isMaster(this)){
                    store.dispatch({

                    });
                }
            });
        }

    });

    return wss;
}
