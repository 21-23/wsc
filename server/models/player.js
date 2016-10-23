import { randomBytes } from 'crypto';
import { generate as generateId } from 'shortid';

export default class Player{
    constructor(name) {
        this.id = generateId();

        this.name = name;
        this.token = randomBytes(8).toString('hex');

        this.taskSolved = 0;

        this.lastTask = {
            name: '',
            data: {},
            answer: {},
        };
    }
}
