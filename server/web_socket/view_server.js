import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';

import defaultVerifyClient from 'server/utils/verify_client';
import { viewSelector } from 'server/selectors/viewSelectors';
import store from 'server/store';

let server;

export function getConnections() {
    return server && server.clients;
}

export function createViewServer({server, verifyClient = defaultVerifyClient}) {
    const wss = new WebSocketServer({
        server,
        verifyClient,
        path: '/master',
    });

    wss.on('connection', function (socket) {
        cli.log('Master connected. Fetch actual store');
        socket.send(viewSelector(store.getState()));

        socket.on('message', function(){
            cli.log('disconnect fake view socket');
            this.close();
        });
    });

    server = wss;

    return wss;
}
