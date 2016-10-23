import { createSelector } from 'reselect';
import { Map } from 'immutable';

export function game (state) {
    return state.get('game');
}

export const players = createSelector(
        [game],
        function (gameState) {
            return gameState.get('players');
        }
);

export const playerTokenMap = createSelector(
        [players],
        function (players) {
            return players.reduce(function(R, value) {
                return R.set(value.token, value.id);
            }, Map());
        }
);
