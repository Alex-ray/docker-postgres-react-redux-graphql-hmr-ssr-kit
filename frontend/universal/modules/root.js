import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

// Epics
import { counterEpics } from './counter/ducks/counter.js';

// Reducers
import * as Reducers from '../redux/reducers/index.js';

export const rootEpic = combineEpics(
  ...counterEpics,
);

export default combineReducers({
  ...Reducers,
  routing: routerReducer,
});
