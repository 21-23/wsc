import { Observable } from 'rxjs';

import { getUrl } from 'helpers/web_socket_helpers';
import { decompressor } from 'redux-action-minifier';

const URL = getUrl(window.location);

export default () => Observable.webSocket(URL).map(decompressor);
