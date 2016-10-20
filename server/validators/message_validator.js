import ProtocolMessages from '../constants/protocol_messages';

export default function isGameMessage(message) {
    const keys = Object.keys(ProtocolMessages);

    for(let i = 0; i < keys.length; i++) {
        if (ProtocolMessages[keys[i]] === message) {
            return true;
        }
    }

    return false;
}
