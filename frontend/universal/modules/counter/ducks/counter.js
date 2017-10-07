// Libs
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Map as iMap} from 'immutable';
// import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';

// Action Types
export const COUNTER_SET_COUNT = 'COUNTER_SET_COUNT';

// Inital State
const initialState = iMap({
  count: 0,
});

// Reducer
export default handleActions({
  COUNTER_SET: (state, { payload: { count } }) => (state.set('count', count))
}, initialState);

// Actions
export const {
  counterSetCount,
} = createActions({
  COUNTER_SET_COUNT: count => ({ count }),
});

// Selectors
export const counterCountSelector = (state, ownProps) => state.count.get('count');

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

export const counterEpics = [
  counterSetCountEpic,
];
