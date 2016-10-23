import ProtocolMessages from 'server/constants/protocol_messages';

export function isGameCommand(message) {
    const keys = Object.keys(ProtocolMessages);

    for(let i = 0; i < keys.length; i++) {
        if (ProtocolMessages[keys[i]] === message) {
            return true;
        }
    }

    return false;
}

export function isGameMessage(msg){
    if(msg.command === ProtocolMessages.CHALLENGE_ACCEPTED){
        return true;
    } else {
        return !!msg.token && isGameCommand(msg.command);
    }
}
