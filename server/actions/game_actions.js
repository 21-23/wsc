import store from 'server/store';
import { bindActionCreators as bindAction } from 'redux';
import * as GameActionCreators from 'server/action_creators/game_action_creators.js';

export const playerCloseConnetction = bindAction(GameActionCreators.playerCloseConnectionActionCreator, store.dispatch);
export const playerGetTask = bindAction(GameActionCreators.playerGetTaskActionCreator, store.dispatch);
export const playerSolveTask = bindAction(GameActionCreators.playerSolveTaskActionCreator, store.dispatch);
export const connectNewPlayer = bindAction(GameActionCreators.connectNewPlayerActionCreator, store.dispatch);
export const playerWin = bindAction(GameActionCreators.playerWinActionCreator, store.dispatch);
