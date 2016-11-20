export function start(state) {
    return state.getIn(['system', 'start']);
}

export function end(state) {
    return state.getIn(['system', 'end']);
}

export function isGameStarted(state) {
    return state.getIn(['system', 'isGameStarted']);
}
