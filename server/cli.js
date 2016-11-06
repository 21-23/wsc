const vorpal = require('vorpal')();

import store from 'server/store';

import SystemActions from 'server/actions/system_actions';
import { isGameStarted } from 'server/selectors/system_selectors';

vorpal
  .command('start', 'Start game')
  .action(function(args, callback) {
      if(!isGameStarted(store.getState())) {
          SystemActions.startGame();
          this.log('Game is started');
      } else {
          this.log('Game already started');
      }

      callback();
  });

vorpal
  .command('startAt', 'get game start')
  .action(function(args, callback) {
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
