import Constants from 'constants';

export function isWinner(position) {
    return position < Constants.WINNERS;
}
