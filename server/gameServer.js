const WebSocketServer = require('uws').Server;

function createGameServer(server) {
    const wss = new WebSocketServer({ server });

    wss.on('connection', function (socket) {
        console.dir(socket);

        socket.on('message', function (message) {
            console.log(message);
            socket.send(message);
        });

        socket.on('close', function (){

        });
    });

    return wss;
}

module.exports = createGameServer;
