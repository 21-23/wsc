import { createSelector } from 'reselect';

function storeSelector(state) {
    return state;
}

export const viewSelector = createSelector(
    [storeSelector],
    function(store) {
        return store.withMutations(function(mutablestate) {
            return mutablestate.update('game', function(stateChunk){
                return stateChunk.set('players', stateChunk.get('players').map(function(player) {
                    return player.withMutation(function(mutablePlayer){
                        return mutablePlayer.delete('token');
                    });
                }));
            });
        }).toJS();
    }
);
