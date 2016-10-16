const WebSocketServer = require('uws').Server;
const master = require('./master');

const cli = require('./cli');

const constants = require('./constants');

const isGameStarted = require('./game/stat').getGameStatus;

function createGameServer(server) {
    const wss = new WebSocketServer({ server });

    wss.on('connection', function (socket) {
        if(master.isMaster(socket)) {
            cli.log('Master detected');
        } else {
            socket.on('message', function __onGameMessage(message) {
                if(isGameStarted()) {
                    socket.send(message);
                } else {
                    socket.send(JSON.stringify(constants.GAME_NOT_START_MSG));
                }
            });

            socket.on('close', function (){

            });
        }

    });

    return wss;
}

module.exports = createGameServer;
