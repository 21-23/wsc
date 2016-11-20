const PATH = '/master';

function getProtocol(protocol) {
    return protocol === 'http:' ? 'ws://' : 'wss://';
}

export function getUrl(location) {
    const protocol = getProtocol(location.protocol);
    return `${protocol}${location.host}${PATH}`;
}
