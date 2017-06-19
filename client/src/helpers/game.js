import Constants from 'consts';

export function isWinner(position) {
    return position < Constants.WINNERS;
}
