export function start(state) {
    return state.getIn(['game', 'start']);
}

export function end(state) {
    return state.getIn(['game', 'end']);
}

export function isGameStarted(state) {
    return state.getIn(['game', 'isGameStarted']);
}
