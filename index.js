import http from 'http';
import app from './server/server';
import { initializaeServers } from './server/web_socket/';
import { initializebot } from 'server/telegram';
import cli from './server/cli';

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', function __onServerError(err){
    cli.log('*********************************');
    cli.log('**************PANIC**************');
    cli.log(err);
    cli.log('*********************************');
});

server.on('listening', function __onListening(){
    cli.log(`Server ready on: ${port}`);

    initializaeServers({server});
    initializebot();
});
