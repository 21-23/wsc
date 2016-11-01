import { randomBytes } from 'crypto';
import { generate as generateId } from 'shortid';

export const createPlayer = name => ({
    name,
    id: generateId(),
    token: randomBytes(8).toString('hex'),
    taskSolved: 0,
    currentTask: {
        name: '',
        data: {},
    },
});
