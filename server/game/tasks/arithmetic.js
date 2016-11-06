const TASK_NAME = 'arithmetic';
const MAX = 255;
const MIN = 1;
const signs = ['+', '-', '*'];

function solve({ values, sign }, answer) {
    const result = values.reduce((previous, current) => eval(`${previous}${sign}${current}`));

    //todo: delete
    return result === answer || answer === 0;
}

function start(){
    const sign = signs[Math.floor(Math.random() * signs.length)];
    const arr = Array.from({ length: 4 }, () => Math.floor(Math.random() * (MAX - MIN) + MIN));

    return {
        name: TASK_NAME,
        task: {
            sign,
            values: arr,
        }
    };
}

export default {
    name: TASK_NAME,
    solve,
    start,
};
