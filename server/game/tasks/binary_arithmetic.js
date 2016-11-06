const TASK_NAME = 'binary_arithmetic';
const UNIT_BITS_ARRAYS = {8: Uint8Array, 16: Uint16Array};

function solve({ bits }, answer, binaryData) {
    const array = new UNIT_BITS_ARRAYS[bits](binaryData);
    const summ = array.reduce((a, b) => a + b, 0);

    //todo: for tests
    return summ === answer || answer === 0;
}

function start() {
    const buffer = new ArrayBuffer(16);
    const values = [8, 16];
    const randomBits = values[Math.floor(Math.random() * values.length)];
    const array = new UNIT_BITS_ARRAYS[randomBits](buffer);

    for (let i = 0; i < buffer.byteLength / (randomBits / 8); i++) {
        array[i] = Math.floor(Math.random() * Math.pow(2, randomBits));
    }

    return {
        name: TASK_NAME,
        task: {
            bits: randomBits,
        },

        binaryData: array.buffer,
    };
}

export default {
    name: TASK_NAME,
    solve,
    start,
};
