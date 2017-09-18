import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';

import defaultVerifyClient from 'server/utils/verify_client';
import { sendState } from 'server/actions/viewActions';
import { remoteDispatch } from 'server/utils/remoteDispatch';
import store from 'server/store';

let viewServer;

const log = cli.log.bind(cli, '[WSC VIEW SERVER]');

export function getConnections() {
    return viewServer && viewServer.clients || [];
}

export function createViewServer({server, verifyClient = defaultVerifyClient}) {
    const wss = viewServer = new WebSocketServer({
        server,
        verifyClient,
        path: '/master',
    });

    wss.on('connection', function (socket) {
        log('Master connected. Fetch actual store');

        remoteDispatch(socket, sendState(store.getState().toJS()));

        socket.on('message', function() {
            log('Disconnect fake view socket');
            this.close();
        });
    });

    return wss;
}
