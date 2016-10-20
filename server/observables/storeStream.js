import { observableFromStore } from 'redux-rx';

let stateStream = null;

export default function (store) {
    if (!stateStream) {
        stateStream = observableFromStore(store);
        stateStream
          .distinctUntilChanged(state => state.getIn(['system', 'isGameStarted']));
    }
}
