import {
  createStore,
  applyMiddleware
  compose,
} from 'redux';

import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';

import reducers, { rootEpic } from '../modules/root.js';

export default (history, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middleware = [routerMiddleware(history), epicMiddleware];
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(reducers, initialState, enhancer);
  return store;
}
