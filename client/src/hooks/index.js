import immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import store from 'store';

export default function apply() {
    if (process.env.NODE_ENV !== 'production') {
        window.store = store;
        installDevTools(immutable);
    }
}
