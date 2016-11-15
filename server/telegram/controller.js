import cli from 'server/cli';
import { startGame } from 'server/actions/system_actions';
const users = ['sirShastel'];

function isAvailToControllBot(username) {
    return users.indexOf(username) !== -1;
}

export default {
    stat(bot, msg) {
        cli.log(`/stat recived from ${msg.from.username}`);
        if(isAvailToControllBot(msg.from.username)) {
            bot.sendMessage(msg.from.id, 'hello');
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
    }
};
