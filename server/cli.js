const vorpal = require('vorpal')();

import store from 'server/store';

import SystemActions from 'server/actions/system_actions';
import { isGameStarted } from 'shared/selectors/system_selectors';

import config from 'config';

let cli = null;
const env = config.get('NODE_ENV');

if(env === 'development' || env !== 'production' && env !== 'staging') {
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
        .command('config')
        .action(function(args, callback){
            this.log('Base config:');
            this.log('env', config.get('NODE_ENV'));
            callback();
        });

    cli = vorpal.delimiter('wsc$').show();
}

if(env === 'staging') {
    cli = console;
}

if (env === 'production') {
    const noop = () => {};

    cli = Object.keys(console).reduce((R, key) => {
        if(typeof console[key] === 'function') { //eslint-disable-line
            R[key] = noop;
        }
        return R;
    }, {});
}

export default cli;
