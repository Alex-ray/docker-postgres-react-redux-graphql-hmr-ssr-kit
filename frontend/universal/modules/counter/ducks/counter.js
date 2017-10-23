// Libs
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Map as iMap, fromJS} from 'immutable';
import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';

import {
  getCounters,
  updateCounter,
  createCounter,
  deleteCounter,
  countersQuerySchema,
} from 'universal/graphql/counter.js';

import {
  locationCurrentCounterId
} from 'universal/modules/location/ducks/location.js';

// Action Types
export const COUNTER_FETCH_COUNTERS = 'COUNTER_FETCH_COUNTERS';
export const COUNTER_FETCH_COUNTERS_SUCCESS = 'COUNTER_FETCH_COUNTERS_SUCCESS';
export const COUNTER_FETCH_COUNTERS_ERROR = 'COUNTER_FETCH_COUNTERS_ERROR';

export const COUNTER_SET_COUNT = 'COUNTER_SET_COUNT';
export const COUNTER_SET_COUNT_SUCCESS = 'COUNTER_SET_COUNT_SUCCESS';
export const COUNTER_SET_COUNT_ERROR = 'COUNTER_SET_COUNT_ERROR';

export const COUNTER_CREATE_COUNTER = 'COUNTER_CREATE_COUNTER';
export const COUNTER_CREATE_COUNTER_SUCCESS = 'COUNTER_CREATE_COUNTER_SUCCESS';
export const COUNTER_CREATE_COUNTER_ERROR = 'COUNTER_CREATE_COUNTER_ERROR';

export const COUNTER_DELETE_COUNTER = 'COUNTER_DELETE_COUNTER';
export const COUNTER_DELETE_COUNTER_SUCCESS = 'COUNTER_DELETE_COUNTER_SUCCESS';
export const COUNTER_DELETE_COUNTER_ERROR = 'COUNTER_DELETE_COUNTER_ERROR';

// Inital State
const initialState = fromJS({
  counters: {},
  count: 0,
});

// Reducer
export default handleActions({
  [COUNTER_DELETE_COUNTER_SUCCESS]: (state, { payload: { id } }) => {
    return state.deleteIn(['counters', id]);
  },
  [COUNTER_CREATE_COUNTER_SUCCESS]: (state, { payload: { id, value } }) => {
    return state.setIn(['counters', id], fromJS({ id, value }));
  },
  [COUNTER_SET_COUNT_SUCCESS]: (state, {payload: { id, count }}) => {
    return state.setIn(['counters', id, 'value'], count);
  },
  [COUNTER_FETCH_COUNTERS_SUCCESS]: (state, { payload: { counters } }) => {
    let countersData = (counters.data && counters.data.Counters) ? counters.data.Counters : [];
    let counterMap = {};

    for (let i = 0; i < countersData.length; i++) {
      let counter = countersData[i];
      counterMap[counter.id] = counter;
    }

    let currentCounters = state.get('counters');
    let newCounters = currentCounters.merge(counterMap);
    return state.set('counters', newCounters);
  }
}, initialState);

// Actions
export const {
  counterSetCount,
  counterSetCountSuccess,
  counterSetCountError,
} = createActions({
  COUNTER_SET_COUNT: (id, count) => ({ id, count }),
  COUNTER_SET_COUNT_SUCCESS: (id, count) => ({ id, count }),
  COUNTER_SET_COUNT_ERROR: (error) => ({ error })
});

export const {
  counterFetchCounters,
  counterFetchCountersSuccess,
  counterFetchCountersError,
} = createActions({
  COUNTER_FETCH_COUNTERS: () => ({}),
  COUNTER_FETCH_COUNTERS_SUCCESS: (counters) => ({ counters }),
  COUNTER_FETCH_COUNTERS_ERROR: error => ({ error })
});

export const {
  counterCreateCounter,
  counterCreateCounterSuccess,
  counterCreateCounterError,
} = createActions({
  COUNTER_CREATE_COUNTER: () => ({}),
  COUNTER_CREATE_COUNTER_SUCCESS: ({id, value}) => ({ id, value }),
  COUNTER_CREATE_COUNTER_ERROR: error => ({ error }),
});

export const {
  counterDeleteCounter,
  counterDeleteCounterSuccess,
  counterDeleteCounterError,
} = createActions({
  COUNTER_DELETE_COUNTER: id => ({ id }),
  COUNTER_DELETE_COUNTER_SUCCESS: id => ({ id }),
  COUNTER_DELETE_COUNTER_ERROR: error => ({ error }),
});

// Selectors
export const counterCountersSelector = (state, ownProps) => (state.counter.get('counters'))

export const counterCurrentCounterSelector = createSelector(
  counterCountersSelector,
  locationCurrentCounterId,
  (counters, currentCounterId) => ( counters.get(currentCounterId) )
);

export const counterSortedCountersSelector = createSelector(
  counterCountersSelector,
  (counters) => ( counters.sort((a, b) => ( a.get('createdAt') < b.get('createdAt'))))
);

export const counterCurrentCounterCountSelector = createSelector(
  counterCurrentCounterSelector,
  (currentCounter) => ( currentCounter ? currentCounter.get('value') : 0 )
);

// Epcis
const counterCreateCounterEpic = action$ =>
  action$.ofType(COUNTER_CREATE_COUNTER)
    .mergeMap(() => {
      return createCounter()
              .map(res => counterCreateCounterSuccess(res.data.Counter.create))
              .catch(error => Observable.of(counterCreateCounterError(error)))
    });

const counterDeleteCounterEpic = action$ =>
  action$.ofType(COUNTER_DELETE_COUNTER)
    .mergeMap(({ payload: { id }}) => {
      return deleteCounter(id)
              .map(res => counterDeleteCounterSuccess(id))
              .catch(error => Observable.of(counterDeleteCounterError(error)))
    });

const counterSetCountEpic = action$ =>
  action$.ofType(COUNTER_SET_COUNT)
    .mergeMap(({ payload: { id, count }}) => {
      return updateCounter(id, count)
              .map(res => counterSetCountSuccess(id, count))
              .catch(error => Observable.of(counterSetCountError(error)))
    });

const counterFetchCountersEpic = action$ =>
  action$.ofType(COUNTER_FETCH_COUNTERS)
    .mergeMap(({ payload }) => {
      return  getCounters()
               .map(res => counterFetchCountersSuccess(res))
               .catch(err => Observable.of(counterFetchCountersError(err)))
    });

export const counterEpics = [
  counterFetchCountersEpic,
  counterSetCountEpic,
  counterCreateCounterEpic,
  counterDeleteCounterEpic,
];
