import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers, { rootEpic } from '../modules/root.js';

export default (history, initialState = {}) => {
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middleware = [routerMiddleware(history), epicMiddleware];
  const enhancer = compose(applyMiddleware(...middleware), devTools);

  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
     module.hot.accept('./reducers', () => {
       const nextReducers = require('../modules/root.js');
       store.replaceReducer(nextReducer);
     });
   }

  return store;
}
