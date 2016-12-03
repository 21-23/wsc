import http from 'http';
import app from './server/server';
import { initializaeServers } from './server/web_socket/';
import { initializebot } from 'server/telegram';
import config from 'config';
import cli from './server/cli';
import mongoose from 'mongoose';

const port = config.get('PORT');
app.set('port', port);

const server = http.createServer(app);

server.on('error', function __onServerError(err){
    cli.log('*********************************');
    cli.log('**************PANIC**************');
    cli.log(err);
    cli.log('*********************************');
});

server.on('listening', function __onListening() {
    cli.log(`Server ready on: ${port}`);
    mongoose.connect(config.get('mongouri'));
    mongoose.Promise = global.Promise;
    initializaeServers({server});
    initializebot();
});

server.listen(port);
