import { createSelector } from 'reselect';
import { Map } from 'immutable';

export function players(state) {
    return state.get('players');
}

export const playerTokenMap = createSelector(
        [players],
        function (players) {
            return players.reduce(function(R, value) {
                return R.set(value.get('token'), value.get('id'));
            }, Map());
        }
);
