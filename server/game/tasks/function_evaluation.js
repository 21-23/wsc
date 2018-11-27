const TASK_NAME = 'function_evaluation';

const MAX = 255;
const MIN = 1;

function getRandomInt() {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function createTaskFunction () {
    return `(function function_evaluation() { return ${getRandomInt()} + ${getRandomInt()}; })`;
}

function solve({ fn }, answer) {
    return eval(fn)() === answer;
}

function start() {
    return {
        name: TASK_NAME,
        task: {
            fn: createTaskFunction(),
        },
    };
}

export default {
    name: TASK_NAME,
    solve,
    start,
};
