import { randomBytes } from 'crypto';
import { generate as generateId } from 'shortid';

export const createPlayer = (name, socketId) => ({
    name,
    id: generateId(),
    token: randomBytes(8).toString('hex'),
    taskSolved: 0,
    socketId,
    currentTask: {
        name: '',
        data: {},
    },
});
