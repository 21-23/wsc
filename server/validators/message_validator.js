import ProtocolMessages from 'server/constants/protocol_messages';

import arithmetic from 'server/game/tasks/arithmetic';
import bin_arithmetic from 'server/game/tasks/binary_arithmetic';
import function_evaluation from 'server/game/tasks/function_evaluation';
//todo: refactor
const name = arithmetic.name;
const bin_name = bin_arithmetic.name;
const fun_name = function_evaluation.name;

export function isGameCommand(message) {
    const keys = Object.keys(ProtocolMessages);

    for(let i = 0; i < keys.length; i++) {
        if (ProtocolMessages[keys[i]] === message || name === message || bin_name === message || fun_name === message) {
            return true;
        }
    }

    return false;
}

export function isGameMessage(msg){
    if (!msg) {
        return false;
    }
    if (msg.command === ProtocolMessages.CHALLENGE_ACCEPTED){
        return true;
    } else {
        return !!msg.token && isGameCommand(msg.command);
    }
}
