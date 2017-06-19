export function players(state) {
    const players = state.getIn(['players', 'list']);
    return players && players.sort((a, b) => a.get('end') - b.get('end'));
}
