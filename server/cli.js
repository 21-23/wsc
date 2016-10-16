const vorpal = require('vorpal')();

const gameStat = require('./game/stat');

vorpal
  .command('start', 'Start game')
  .action(function(args, callback) {
      gameStat.startGame();
      this.log('Game is started');
      callback();
  });

vorpal  
  .command('startAt', 'get game start')
  .action(function(args, callback) {
      const gameStart = gameStat.getGameStart();
      if(gameStart) {
          this.log(`Game start at ${new Date(gameStart)}`);
      } else {
          this.log('Game not started yet');
      }

      callback();
  });

vorpal
  .delimiter('wsc$')
  .show();

module.exports = vorpal;
