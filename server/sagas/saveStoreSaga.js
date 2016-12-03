import { throttle } from 'redux-saga';
import StoreModel from 'server/models/store';
import { call, select } from 'redux-saga/effects';

export default function*() {
    yield throttle(1000, '*', saveStore);
}

function* saveStore() {
    const state = yield select(store => store);
    const stateObj = new StoreModel({stateStore: state.toJS()});
    yield call(stateObj.save);
}
