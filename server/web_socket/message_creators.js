import { WIN } from 'server/constants/messages';

export function createWinMessage(lnk) {
    return JSON.stringify({
        message: WIN,
        link: lnk,
    });
}
