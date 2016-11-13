import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';

import defaultVerifyClient from 'server/utils/verify_client';
import { viewSelector } from 'server/selectors/viewSelectors';
import { sendState } from 'server/actions/viewActions';
import { remoteDispatch } from 'server/utils/remoteDispatch';
import store from 'server/store';

let server;

export function getConnections() {
    return server && server.clients || [];
}

export function createViewServer({server, verifyClient = defaultVerifyClient}) {
    const wss = server = new WebSocketServer({
        server,
        verifyClient,
        path: '/master',
    });

    wss.on('connection', function (socket) {
        cli.log('Master connected. Fetch actual store');

        const viewState = viewSelector(store.getState());
        remoteDispatch(socket, sendState(viewState));

        socket.on('message', function(){
            cli.log('disconnect fake view socket');
            this.close();
        });
    });

    return wss;
}
