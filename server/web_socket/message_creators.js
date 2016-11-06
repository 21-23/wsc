import Messages from 'server/constants/messages';

export function createWinMessage(lnk) {
    return JSON.stringify({
        message: Messages.WIN,
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
        message: 'You solve task',
        nextTask: nextTaskName,
    });
}

export function playerAcceptChallange(token, task){
    return JSON.stringify({
        message: Messages.ACCEPTED,
        next: task,
        token,
    });
}
