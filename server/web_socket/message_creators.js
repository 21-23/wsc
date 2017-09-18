import Messages from 'server/constants/messages';

export function createWinMessage(lnk) {
    return JSON.stringify({
        message: Messages.WIN,
        secretCode: lnk,
    });
}

export function wrongAnswerMessage(taskName) {
    return JSON.stringify({
        error: true,
        message: `Your solution for task ${taskName} is wrong`,
    });
}

export function solveTaskMessage(nextTaskName) {
    return JSON.stringify({
        message: 'You solve the task',
        next: nextTaskName,
    });
}

export function playerAcceptChallange(token, task) {
    return JSON.stringify({
        message: Messages.ACCEPTED,
        next: task.name,
        token,
    });
}

export function alreadyAccepted() {
    return JSON.stringify({
        error: true,
        message: 'You already accept the challenge',
    });
}

export function wrongToken() {
    return JSON.stringify({
        error: true,
        message: 'Ooops, your token is wrong',
    });
}

export function notGameMessage() {
    return JSON.stringify({
        error: true,
        message: 'Ooops, it\'s not a game message',
    });
}

export function wrongTaskName() {
    return JSON.stringify({
        error: true,
        message: 'Hmmm. Smth is wrong with task name',
    });
}
