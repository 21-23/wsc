const vorpal = require('vorpal')();

import store from 'server/store';

import SystemActions from 'server/actions/system_actions';

vorpal
  .command('start', 'Start game')
  .action(function(args, callback) {
      SystemActions.startGame();
      this.log('Game is started');
      callback();
  });

vorpal
  .command('startAt', 'get game start')
  .action(function(args, callback) {
      // const gameStart = gameStat.getGameStart();
      // if(gameStart) {
      //     this.log(`Game start at ${new Date(gameStart)}`);
      // } else {
      //     this.log('Game not started yet');
      // }

      callback();
  });

vorpal
    .command('store [path...]', 'log store')
    .action(function(args, callback) {
        if(!args.path) {
            this.log(store.getState().toJS());
        } else {
            this.log(store.getState().getIn(args.path));
        }
        callback();
    });

vorpal
  .delimiter('wsc$')
  .show();

export default vorpal;
