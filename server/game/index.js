const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const gameEmitter = new MyEmitter();

module.exports = {
    gameEmitter,
};
