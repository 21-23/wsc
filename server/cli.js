const vorpal = require('vorpal')();

vorpal
  .command('start', 'Start game')
  .action(function(args, callback) {
      //Start game
      this.log('Game is started');
      callback();
  });

vorpal
  .delimiter('wsc$')
  .show();

module.exports = vorpal;
