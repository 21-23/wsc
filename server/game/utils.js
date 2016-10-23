import conf from 'config';
import ProtocolMessages from 'server/constants/protocol_messages';

export function getFirstTask(){
    const tasks = conf.get('tasks');
    if (tasks) {
        return tasks[0] || ProtocolMessages.WIN;
    }
    return ProtocolMessages.WIN;
}

export function chooseAndPlay(message, player, socket){
    switch (message.command) {
    case ProtocolMessages.WIN:
        socket.send('you win');
        break;
    default:

    }
}
