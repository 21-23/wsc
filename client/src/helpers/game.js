import Constants from 'constants/constants';

export function isWinner(position) {
    return position < Constants.WINNERS;
}
