import cli from 'server/cli';
import { startGame, finishGame } from 'server/actions/system_actions';
import store from 'server/store';
import * as SystemSelectors from 'shared/selectors/system_selectors';
import { players } from 'server/selectors/players_selectors';
const users = ['sirShastel'];

function isAvailToControllBot(username) {
    return users.indexOf(username) !== -1;
}

const controller = {
    stat(bot, msg) {
        const state = store.getState();
        const message = `${SystemSelectors.isGameStarted(state) ? 'Game started': 'Game did\'t started'}\nConnected ${players(state).size} players`;
        bot.sendMessage(msg.from.id, message);
    },
    start(bot, msg) {
        if(startGame()) {
            cli.log(`Game started. Source of command telegram bot. Execute by @${msg.from.username}`);
            return bot.sendMessage(msg.from.id, `Thx @${msg.from.username}, you successfully start the game`);
        }
        bot.sendMessage(msg.from.id, `Sorry @${msg.from.username}, game started before your command`);
    },
    finish(bot, msg) {
        cli.log(`Game finished.\n Source of command telegram bot.\n Execute by @${msg.from.username}`);
        finishGame();
        return bot.sendMessage(msg.from.id, `Thx @${msg.from.username}, you successfully finish the game`);
    }
};

export default Object.keys(controller).reduce((R, key) => {
    R[key] = function(bot, msg) {
        cli.log(`${msg.text} recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            return controller[key](bot, msg);
        } else {
            bot.sendMessage(msg.from.id, 'perm denied');
            bot.leaveChat(msg.chat.id);
        }
    };
    return R;
}, {});
