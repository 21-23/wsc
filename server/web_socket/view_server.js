import { Server as WebSocketServer } from 'uws';

import cli from 'server/cli';

import defaultVerifyClient from 'server/utils/verify_client';

export function createViewServer({server, verifyClient = defaultVerifyClient}) {
    const wss = new WebSocketServer({
        server,
        verifyClient,
        path: '/master',
    });

    wss.on('connection', function (socket) {
        socket.on('message', function(){
            cli.log('disconnect fake view socket');
            this.close();
        });
    });

    return wss;
}
