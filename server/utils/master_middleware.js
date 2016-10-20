//import { wss } from '../gameServer';

export default () => next => action => {
    const result = next(action);

    //wss.connections.forEach(c => c.send('wow'));

    return result;
};
