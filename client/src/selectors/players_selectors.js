import { List } from 'immutable';
import { createSelector } from 'reselect';

const playerList = (state) => state.getIn(['players', 'list'], List());

export const players = createSelector([playerList], players => players.sortBy(
    player => player.get('end'),
    (a, b) => a - b)
);
