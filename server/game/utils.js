import ProtocolMessages from 'server/constants/protocol_messages';
import { winTask } from 'server/game/tasks/win';

import {
  wrongAnswerMessage,
  solveTaskMessage,
} from 'server/web_socket/message_creators';
import {
  playerGetTask,
  playerSolveTask
} from 'server/actions/game_actions';

import first from 'server/game/tasks/1';

const tasks = [first];



export function getFirstTask() {
    if (tasks) {
        return tasks[0] || ProtocolMessages.WIN;
    }
    return ProtocolMessages.WIN;
}

export function getNextTask(taskName) {
    const currentTaskInd = tasks.findIndex(({name}) => name === taskName);

    if (currentTaskInd !== -1) {
        return (tasks[currentTaskInd + 1] && tasks[currentTaskInd + 1].name) || ProtocolMessages.WIN;
    }

    return ProtocolMessages.WIN;
}

export function solveTask(message, player, socket) {
    player = player.toJS();
    const taskData = player.currentTask;
    const currentTaskInd = tasks.findIndex(({name}) => taskData.name === name);
    if(typeof message.answer !== 'undefined' && taskData.name) { //anwer can be 0 or false
        const task = tasks[currentTaskInd];
        const result = task.solve(taskData.task, message.answer);

        if(result) {
            //here we sould dispatch action with increment of solved task
            //and set current task data as empty object
            playerSolveTask(player);
            const nextTask = getNextTask(task.name);

            //at next step we notify player about his solution
            process.nextTick(function(){
                socket.send(
                    solveTaskMessage(nextTask)
                );
            });

        } else {
           //Player don't solve task. Server store stay as is
           //We should notify player about his answer.

            process.nextTick(function(){
                socket.send(
                    wrongAnswerMessage(task.name)
                );
            });
        }
    } else {
        const newTaskInd = tasks.findIndex(({name}) => name === message.command);
        if (newTaskInd !== player.taskSolved){
            //Player try to get task to early
            process.nextTick(function(){
                socket.send('To early cowboy');
            });
        } else {
            const task = tasks[newTaskInd];
            const taskData = task.start();

            playerGetTask(player, taskData);

            process.nextTick(function(){
                socket.send(JSON.stringify(taskData));
            });
        }
    }
}

export function chooseAndPlay(message, player, socket){
    player = player.toJS();
    if(ProtocolMessages.WIN === message.command && player.taskSolved === 1) { //TASK length
        return winTask(player, socket);
    } else {
        return solveTask(...arguments);
    }
}
