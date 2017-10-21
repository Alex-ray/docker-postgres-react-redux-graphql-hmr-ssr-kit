// Libs
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Map as iMap, fromJS} from 'immutable';
// import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';

import {
  getCounters,
  countersQuerySchema,
} from 'universal/graphql/counter.js';

// Action Types
export const COUNTER_FETCH_COUNTERS = 'COUNTER_FETCH_COUNTERS';
export const COUNTER_FETCH_COUNTERS_SUCCESS = 'COUNTER_FETCH_COUNTERS_SUCCESS';
export const COUNTER_FETCH_COUNTERS_ERROR = 'COUNTER_FETCH_COUNTERS_ERROR';

export const COUNTER_SET_COUNT = 'COUNTER_SET_COUNT';

// Inital State
const initialState = fromJS({
  counters: {},
  count: 0,
});

// Reducer
export default handleActions({
  [COUNTER_SET_COUNT]: (state, { payload: { count } }) => (state.set('count', count)),
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
} = createActions({
  COUNTER_SET_COUNT: count => ({ count }),
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

// Selectors
export const counterCountSelector = (state, ownProps) => state.counter.get('count');
export const counterCountersSelector = (state, ownProps) => state.counter.get('counters');

// Epcis
const counterSetCountEpic = action$ =>
  action$.ofType(COUNTER_SET_COUNT)
    .mergeMap(({ payload: { count }}) => {
      console.log('counter epic!!! : setting count ', count);
      // BOOG
      return Observable.of({});
      // api.getCampaignRefferralModuleLinks(campaignId, data, apiKey, userId)
      //   .map(res => campaignReferralLinksSuccess(campaignId, res))
      //   .catch(err => Observable.of(campaignReferralLinksError(campaignId, err.message)))
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
  // counterSetCountEpic,
];
