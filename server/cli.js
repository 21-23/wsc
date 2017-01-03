const vorpal = require('vorpal')();

import store from 'server/store';

import SystemActions from 'server/actions/system_actions';
import { isGameStarted } from 'shared/selectors/system_selectors';

import config from 'config';

let cli = null;
const env = config.get('NODE_ENV');

if(env !== 'production') {
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
      .command('stop', 'stop game')
      .action(function(args, callback) {
          SystemActions.finishGame();
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
      .command('config')
      .action(function(args, callback){
          this.log('Base config:');
          this.log('env', config.get('NODE_ENV'));
          callback();
      });

    cli = vorpal.delimiter('wsc$').show();
}

if(env === 'production') {
    cli = console;
}

export default cli;
