import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import notes from './notes';

export default combineReducers({
    routing: routerReducer,
    notes
});