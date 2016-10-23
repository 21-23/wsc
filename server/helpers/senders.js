import messages from 'server/constants/messages';

export function send(message, socket){
    return socket.send(JSON.stringify(message));
}

export const sendNotStartedMessage = send.bind(null, messages.GAME_NOT_START_MSG);
