import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';

export default applyMiddleware()(createStore)(reducers);
