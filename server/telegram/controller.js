import cli from 'server/cli';
import { startGame, finishGame } from 'server/actions/system_actions';
import store from 'server/store';
import * as SystemSelectors from 'shared/selectors/system_selectors';
import { players } from 'server/selectors/players_selectors';
const users = ['sirShastel'];

function isAvailToControllBot(username) {
    return users.indexOf(username) !== -1;
}

export default {
    stat(bot, msg) {
        cli.log(`/stat recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            const state = store.getState();
            const message = `${SystemSelectors.isGameStarted(state) ? 'Game started': 'Game did\'t started'}
            Connected ${players(state).size} players`;
            bot.sendMessage(msg.from.id, message);
        } else {
            bot.sendMessage(msg.from.id, 'perm denied');
            bot.leaveChat(msg.chat.id);
        }
    },
    start(bot, msg) {
        cli.log(`/start recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            if(startGame()) {
                cli.log(`Game started. Source of command telegram bot. Execute by @${msg.from.username}`);
                return bot.sendMessage(msg.from.id, `Thx @${msg.from.username}, you successfully start the game`);
            }
            bot.sendMessage(msg.from.id, `Sorry @${msg.from.username}, game started before your command`);
        } else {
            bot.sendMessage(msg.from.id, 'perm denied');
            bot.leaveChat(msg.chat.id);
        }
    },
    finish(bot, msg) {
        cli.log(`/finish recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            cli.log(`Game finished. Source of command telegram bot. Execute by @${msg.from.username}`);
            finishGame();
            return bot.sendMessage(msg.from.id, `Thx @${msg.from.username}, you successfully finish the game`);
        } else {
            bot.sendMessage(msg.from.id, 'perm denied');
            bot.leaveChat(msg.chat.id);
        }
    }
};
