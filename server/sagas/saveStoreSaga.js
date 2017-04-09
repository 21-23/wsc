import { throttle } from 'redux-saga';
import StoreModel from 'server/models/store';
import { call, select } from 'redux-saga/effects';
const thtrorrleTimeout = 1000 * 60;

export default function*() {
    yield throttle(thtrorrleTimeout, '*', saveStore);
}

function* saveStore() {
    const state = yield select(store => store.toJS());
    const stateObj = new StoreModel({stateStore: state});
    yield call([stateObj, stateObj.save]);
}
