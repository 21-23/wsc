import cli from 'server/cli';

export function parseMessage(obj) {
    try {
        const result = JSON.parse(obj);
        return typeof result === 'object' ? result : null;
    } catch (err) {
        cli.log('Wrong message recived');
        return null;
    }
}
