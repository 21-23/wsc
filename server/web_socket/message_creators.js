import { WIN } from 'server/constants/messages';

export function createWinMessage(lnk) {
    return JSON.stringify({
        message: WIN,
        link: lnk,
    });
}

export function wrongAnswerMessage(taskName){
    return JSON.stringify({
        error: `Your solution for task ${taskName} is wrong`,
    });
}

export function solveTaskMessage(nextTaskName) {
    return JSON.stringify({
        'message': 'You solve task',
        'nextTask': nextTaskName,
    });
}
