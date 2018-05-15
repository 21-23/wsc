import { createStore, applyMiddleware } from 'redux';

import { createEpicMiddleware } from 'redux-observable';

import reducers from 'reducers';

import wsEpic from './wsEpic';

const epicMiddleware = createEpicMiddleware(wsEpic);

export default applyMiddleware(epicMiddleware)(createStore)(reducers);
